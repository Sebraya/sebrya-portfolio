import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

type CommentBody = {
  name: string;
  email: string;
  postSlug: string;
  comment: string;
  parentId?: string | null;
};

type CommentRow = {
  id: string;
  name: string;
  email: string;
  post_slug: string;
  comment: string;
  created_at: string;
  replies: any[];
};

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE = path.join(DATA_DIR, 'comments.json');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
const supabase = SUPABASE_URL && SUPABASE_KEY
  ? createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

async function readComments() {
  if (supabase) {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: true });

    if (error) throw error;
    return data || [];
  }

  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    const txt = await fs.readFile(FILE, 'utf8');
    return JSON.parse(txt || '[]');
  } catch (e) {
    return [];
  }
}

async function writeComments(comments: any[]) {
  if (supabase) {
    throw new Error('Supabase write helper not supported. Please use the API functions directly.');
  }

  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(comments, null, 2), 'utf8');
}

async function fetchComments(postSlug?: string) {
  if (supabase) {
    let query = supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: true });

    if (postSlug) query = query.eq('post_slug', postSlug);

    const { data, error } = await query;
    if (error) throw error;

    return (data || []).map((row) => ({
      id: row.id,
      name: row.name,
      email: row.email,
      postSlug: row.post_slug,
      comment: row.comment,
      createdAt: row.created_at,
      replies: row.replies || [],
    }));
  }

  const comments = await readComments();
  return postSlug ? comments.filter((c: any) => c.postSlug === postSlug) : comments;
}

async function saveCommentRecord(comment: any) {
  if (supabase) {
    const row = {
      id: comment.id,
      name: comment.name,
      email: comment.email,
      post_slug: comment.postSlug,
      comment: comment.comment,
      created_at: comment.createdAt,
      replies: comment.replies || [],
    };
    const { error } = await supabase.from('comments').insert(row);
    if (error) throw error;
    return;
  }

  const comments = await readComments();
  comments.push(comment);
  await writeComments(comments);
}

async function saveReplyRecord(parentId: string, reply: any) {
  if (supabase) {
    const { data, error: fetchError } = await supabase
      .from('comments')
      .select('replies')
      .eq('id', parentId)
      .single();

    if (fetchError) throw fetchError;
    const currentReplies = data?.replies || [];
    const updatedReplies = [...currentReplies, reply];

    const { error: updateError } = await supabase
      .from('comments')
      .update({ replies: updatedReplies })
      .eq('id', parentId);

    if (updateError) throw updateError;
    return;
  }

  const comments = await readComments();
  const parent = comments.find((c: any) => c.id === parentId);
  if (parent) {
    parent.replies = parent.replies || [];
    parent.replies.push(reply);
    await writeComments(comments);
  }
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const post = url.searchParams.get('post');
    const comments = await fetchComments(post || undefined);
    return NextResponse.json(comments || []);
  } catch (err) {
    console.error('Failed to fetch comments:', err);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CommentBody;
    const { name, email, postSlug, comment, parentId } = body || {};
    if (!name || !email || !comment || !postSlug) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const newComment = {
      id,
      name,
      email,
      postSlug,
      comment,
      createdAt: new Date().toISOString(),
      replies: [],
    };

    if (parentId) {
      await saveReplyRecord(parentId, newComment);
      return NextResponse.json({ message: 'Reply saved', comment: newComment }, { status: 201 });
    }

    await saveCommentRecord(newComment);
    return NextResponse.json({ message: 'Comment saved', comment: newComment }, { status: 201 });
  } catch (err) {
    console.error('Failed to process comment:', err);
    let errorMsg = 'Unknown error';
    if (err instanceof Error) {
      errorMsg = err.message;
    } else if (typeof err === 'object' && err !== null) {
      errorMsg = JSON.stringify(err);
    } else {
      errorMsg = String(err);
    }
    console.error('Error details:', errorMsg);
    return NextResponse.json({ error: `Failed to process comment: ${errorMsg}` }, { status: 500 });
  }
}


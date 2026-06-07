import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

type CommentBody = {
  name: string;
  email: string;
  postSlug: string;
  comment: string;
  parentId?: string | null;
};

const DATA_DIR = path.join(process.cwd(), 'data');
const FILE = path.join(DATA_DIR, 'comments.json');

async function readComments() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    const txt = await fs.readFile(FILE, 'utf8');
    return JSON.parse(txt || '[]');
  } catch (e) {
    return [];
  }
}

async function writeComments(comments: any[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(comments, null, 2), 'utf8');
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const post = url.searchParams.get('post');
    const comments = await readComments();
    const filtered = post ? comments.filter((c: any) => c.postSlug === post) : comments;
    return NextResponse.json(filtered);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to read comments' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as CommentBody;
    const { name, email, postSlug, comment, parentId } = body || {};
    if (!name || !email || !comment || !postSlug) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const comments = await readComments();

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
      const parent = comments.find((c: any) => c.id === parentId);
      if (parent) {
        parent.replies = parent.replies || [];
        parent.replies.push({ ...newComment });
        await writeComments(comments);
        return NextResponse.json({ message: 'Reply saved', comment: newComment }, { status: 201 });
      }
      // if parent not found, fallthrough to add as top-level
    }

    comments.push(newComment);
    await writeComments(comments);
    return NextResponse.json({ message: 'Comment saved', comment: newComment }, { status: 201 });
  } catch (err) {
    console.error('Failed to process comment', err);
    return NextResponse.json({ error: 'Failed to process comment' }, { status: 500 });
  }
}


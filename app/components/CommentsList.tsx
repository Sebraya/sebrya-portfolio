"use client";

import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";

type Comment = {
  id: string;
  name: string;
  email: string;
  postSlug: string;
  comment: string;
  createdAt: string;
  replies: Comment[];
};

export default function CommentsList({ postSlug }: { postSlug: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchComments() {
    setLoading(true);
    try {
      const res = await fetch(`/api/comments?post=${encodeURIComponent(postSlug)}`);
      const data = await res.json();
      setComments(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchComments();
  }, [postSlug]);

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm text-slate-700 font-medium">💬 {comments.length} {comments.length === 1 ? 'comment' : 'comments'}</div>
      </div>
      <CommentForm postSlug={postSlug} onSuccess={fetchComments} startOpen={false} />

      <div className="mt-6 space-y-4">
        {loading && <div className="text-sm text-slate-500">Loading comments…</div>}
        {!loading && comments.length === 0 && <div className="text-sm text-slate-500">No comments yet.</div>}

        {comments.map((c) => (
          <div key={c.id} className="p-4 bg-white/60 rounded-md border">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">{c.name}</div>
                <div className="text-xs text-slate-500">{new Date(c.createdAt).toLocaleString()}</div>
              </div>
            </div>

            <p className="mt-2 text-slate-700">{c.comment}</p>

            {/* replies */}
            <div className="mt-3 pl-4 border-l border-slate-200">
              {c.replies && c.replies.map((r) => (
                <div key={r.id} className="mb-3">
                  <div className="text-sm font-semibold">{r.name} <span className="text-xs text-slate-500">• {new Date(r.createdAt).toLocaleString()}</span></div>
                  <div className="text-sm text-slate-700">{r.comment}</div>
                </div>
              ))}

              {/* reply form toggle — collapsed by default */}
              <div className="mt-2">
                <div className="text-sm text-slate-600 mb-2">Reply:</div>
                <CommentForm postSlug={postSlug} parentId={c.id} onSuccess={fetchComments} startOpen={false} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

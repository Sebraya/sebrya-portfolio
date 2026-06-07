"use client";

import { useState } from "react";

export default function CommentForm({
  postSlug,
  parentId,
  onSuccess,
  startOpen,
}: {
  postSlug: string;
  parentId?: string | null;
  onSuccess?: () => void;
  startOpen?: boolean;
}) {
  const [open, setOpen] = useState<boolean>(!!startOpen);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, comment, postSlug, parentId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      setStatus("success");
      setMessage(data?.message || "Thanks — your comment was submitted.");
      setName("");
      setEmail("");
      setComment("");
      if (onSuccess) onSuccess();
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setMessage(err?.message || "Failed to submit comment.");
    }
  }
  // If collapsed, show a small toggle button
  if (!open) {
    return (
      <div className="mt-4">
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 border rounded-md text-sm hover:shadow"
        >
          {parentId ? '↩️ Reply' : '💬 Leave a comment'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="mt-6 p-4 bg-white/60 rounded-lg border">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold mb-2">{parentId ? '↩️ Reply' : '💬 Leave a comment'}</h3>
        <button type="button" className="text-sm text-slate-500" onClick={() => setOpen(false)}>✖ Close</button>
      </div>

      <label className="block text-sm text-slate-700">Name</label>
      <input className="w-full p-2 rounded-md border mt-1 mb-2" value={name} onChange={(e) => setName(e.target.value)} required />

      <label className="block text-sm text-slate-700">Email</label>
      <input type="email" className="w-full p-2 rounded-md border mt-1 mb-2" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label className="block text-sm text-slate-700">Comment</label>
      <textarea className="w-full p-2 rounded-md border mt-1 mb-3" rows={4} value={comment} onChange={(e) => setComment(e.target.value)} required />

      <div className="flex items-center gap-3">
        <button type="submit" className="bg-slate-900 text-white px-4 py-2 rounded-md" disabled={status === "loading"}>
          {status === "loading" ? '⏳ Sending...' : '✅ Submit'}
        </button>
        {status === "success" && <span className="text-teal-700">✅ {message}</span>}
        {status === "error" && <span className="text-red-600">❌ {message}</span>}
      </div>
    </form>
  );
}

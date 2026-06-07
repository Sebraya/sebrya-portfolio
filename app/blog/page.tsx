import Link from "next/link";
import { posts } from "../../lib/posts";

export default function BlogPage() {
  return (
    <main className="text-slate-900 font-sans py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Insights & Articles</h1>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">Thoughtful posts on architecture, cloud, delivery and operational excellence.</p>
        </header>

        <section className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="p-6 rounded-lg border bg-white/60 hover:shadow-md transition">
              <h2 className="text-2xl font-semibold text-slate-900">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-slate-500 mt-1">{new Date(post.date).toLocaleDateString()}</p>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>

              <div className="mt-4 flex items-center justify-between">
                <Link href={`/blog/${post.slug}`} className="text-sm text-sky-700 font-medium">Read full article →</Link>
                <div className="text-sm text-slate-500">💬 0</div>
              </div>
            </article>
          ))}
        </section>

      </div>
    </main>
  );
}

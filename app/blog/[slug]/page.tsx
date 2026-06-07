import { notFound } from 'next/navigation';
import { getPostBySlug } from '../../../lib/posts';
import CommentsList from '../../components/CommentsList';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const resolvedParams = await params as { slug: string };
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) return notFound();

  return (
    <main className="text-slate-900 font-sans py-12 px-4">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">{post.title}</h1>
          <p className="text-sm text-slate-500 mt-2">{new Date(post.date).toLocaleDateString()}</p>
        </header>

        <article className="prose prose-slate max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-3">Discussion</h2>
          <CommentsList postSlug={post.slug} />
        </section>

      </div>
    </main>
  );
}

import Link from "next/link";
import { projects } from "../../lib/projects";

export default function ProjectsPage() {
  const underway = projects.filter((p) => p.status === "underway");
  const inProgress = projects.filter((p) => p.status === "in-progress");

  return (
    <main className="text-slate-900 font-sans py-12 px-4">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Projects</h1>
          <p className="mt-3 text-slate-600 max-w-3xl mx-auto">Current work and progress updates across initiatives.</p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Underway</h2>
          <div className="space-y-4">
            {underway.map((p) => (
              <article key={p.slug} className="p-4 rounded-lg border bg-white/60">
                <h3 className="text-xl font-semibold">
                  <Link href={`/projects/${p.slug}`} className="hover:underline">{p.title}</Link>
                </h3>
                <p className="text-sm text-slate-500">{p.excerpt}</p>
              </article>
            ))}
            {underway.length === 0 && <p className="text-slate-600">No projects underway right now.</p>}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">In-progress updates</h2>
          <div className="space-y-6">
            {inProgress.map((p) => (
              <div key={p.slug} className="p-4 rounded-lg border bg-white/60">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{p.excerpt}</p>
                <div className="space-y-3">
                  {(p.updates || []).map((u, i) => (
                    <div key={i} className="text-sm">
                      <div className="text-slate-500">{new Date(u.date).toLocaleDateString()}</div>
                      <div className="mt-1 text-slate-700" dangerouslySetInnerHTML={{ __html: u.contentHtml }} />
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href={`/projects/${p.slug}`} className="text-sm text-sky-700 font-medium">View details →</Link>
                </div>
              </div>
            ))}
            {inProgress.length === 0 && <p className="text-slate-600">No in-progress updates available.</p>}
          </div>
        </section>

      </div>
    </main>
  );
}

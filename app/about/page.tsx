import Link from "next/link";

const CAPABILITIES = [
  {
    title: "Solution Architecture",
    desc: "Designing scalable, secure, and resilient solutions aligned with business objectives.",
  },
  {
    title: "Technical Infrastructure",
    desc: "Implementing cloud and on-prem infrastructure, CI/CD, and operational foundations.",
  },
  {
    title: "Environment & Deployment",
    desc: "Structured environment strategy and reliable promotion pipelines (Dev → Prod).",
  },
  {
    title: "Cloud & Platform Engineering",
    desc: "Cloud adoption, platform setup, automation, and operational readiness.",
  },
  {
    title: "Governance & Leadership",
    desc: "Architecture reviews, standards, mentoring, and delivery governance.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Hero */}
        <div className="md:flex md:items-start md:justify-between">
          <div className="md:max-w-2xl">
            <p className="text-sm uppercase tracking-wide text-slate-400">Solution Architect</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white">Designing, building, and delivering scalable solutions</h1>
            <p className="mt-4 text-lg text-slate-300">Turning business vision into production-ready technology — end-to-end architecture, implementation, and operational readiness.</p>

            <div className="mt-6 flex gap-3">
              <Link href="/contact" className="inline-block rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Discuss Your Project</Link>
              <Link href="/blog" className="inline-block rounded-md px-5 py-3 text-sm font-medium text-slate-200 hover:text-white">Read My Blog</Link>
            </div>
          </div>

          <div className="mt-8 md:mt-0">
            <div className="w-56 h-36 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700 ring-1 ring-slate-700 p-4">
              <p className="text-sm text-slate-300">Enterprise Architecture</p>
              <p className="mt-3 text-xs text-slate-400">Cloud • Automation • Observability</p>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-white">What I Deliver</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((c) => (
              <article key={c.title} className="rounded-xl border border-slate-800 bg-slate-800/40 p-5">
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Engagement Model */}
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-white">Engagement Model</h2>
          <p className="mt-4 text-slate-300">I support projects at any stage — assessments, solution design, infrastructure planning, migration, DevOps enablement, and production readiness. I help establish environment strategies and governance to ensure reliable promotion across:</p>
          <ul className="mt-4 list-inside list-disc text-slate-300">
            <li>Development</li>
            <li>Alpha / Beta / Testing</li>
            <li>Staging / UAT</li>
            <li>Production</li>
          </ul>
        </div>

        {/* Thought Leadership */}
        <div className="mt-12">
          <h2 className="text-2xl font-medium text-white">Sharing Knowledge</h2>
          <p className="mt-4 text-slate-300">I write about practical architecture, cloud patterns, and operational lessons gathered from real projects — focused on helping teams make confident decisions.</p>
          <div className="mt-4">
            <Link href="/blog" className="text-indigo-400 hover:underline">Visit the blog →</Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 border-t border-slate-800 pt-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <h3 className="text-xl font-semibold text-white">Ready to discuss your project?</h3>
            <div className="mt-3 sm:mt-0 sm:ml-4 flex gap-3">
              <Link href="/contact" className="inline-block rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-700">Discuss Your Project</Link>
              <Link href="/blog" className="inline-block rounded-md px-5 py-3 text-sm font-medium text-slate-200 hover:text-white">Read My Blog</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

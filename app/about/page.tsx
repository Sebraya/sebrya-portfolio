import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="text-slate-900 font-sans py-12 px-4">
      <div className="mx-auto max-w-5xl">
        <header className="mb-10">
          <span className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-semibold">Solution Architect</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3">Designing, Building, and Delivering Scalable Solutions</h1>
          <p className="text-lg text-slate-600 leading-7 max-w-3xl mt-2">
            Turning business vision into production-ready technology. I help organisations design, implement, and operationalize secure, scalable technology solutions aligned with business goals.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">What I Deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <h3 className="text-teal-800 mb-1">Senior Solution Architecture</h3>
              <p className="text-slate-600">Designing scalable, secure, and resilient solutions.</p>
            </article>

            <article className="bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <h3 className="text-teal-800 mb-1">Technical Infrastructure</h3>
              <p className="text-slate-600">Implementing cloud and on-prem infrastructure, CI/CD, and networking.</p>
            </article>

            <article className="bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <h3 className="text-teal-800 mb-1">Environment & Deployment</h3>
              <p className="text-slate-600">Environment strategy and reliable promotion pipelines (Dev → Prod).</p>
            </article>

            <article className="bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <h3 className="text-teal-800 mb-1">Cloud & Platform Engineering</h3>
              <p className="text-slate-600">Platform adoption, automation, and operational readiness.</p>
            </article>

            <article className="bg-slate-50 border border-slate-100 p-4 rounded-lg">
              <h3 className="text-teal-800 mb-1">Governance & Leadership</h3>
              <p className="text-slate-600">Architecture reviews, standards, and stakeholder engagement.</p>
            </article>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Engagement Model</h2>
          <p className="text-slate-600">
            I support projects at any stage — assessments, solution design, migration, DevOps enablement, and production readiness. Typical environments include Development, QA, Staging/UAT, and Production.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-slate-900 mb-3">Sharing Knowledge</h2>
          <p className="text-slate-600">I write practical posts about architecture, cloud patterns, and operational lessons from real projects.</p>
          <Link href="/blog" className="text-indigo-600 mt-2 inline-block">Visit the blog →</Link>
        </section>

        <footer className="text-center bg-gradient-to-b from-slate-900 to-slate-800 text-slate-50 p-8 rounded-lg mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Let's Build Solutions That Deliver Results</h2>
          <p className="text-slate-200 mt-2">If you need a Solution Architect who can help design, implement, and operationalize production-ready systems, let's discuss your project.</p>
          <div className="mt-4 flex gap-3 justify-center">
            <Link href="/contact" className="px-4 py-2 rounded-md font-semibold bg-teal-400 text-slate-900">Discuss Your Project</Link>
            <Link href="/blog" className="px-4 py-2 rounded-md font-semibold border border-white/20 text-slate-100">Read My Blog</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}


export default function Home() {
  return (
    <main className="text-slate-900">

      {/* header moved to layout for site-wide nav */}

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* subtle professional background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-white" />

        <div className="relative max-w-6xl mx-auto px-6 py-28 text-center">
          <p className="text-blue-600 font-medium tracking-wide">
            Enterprise Architecture • Cloud • Infrastructure • Automation
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-6 leading-tight tracking-tight">
            From Architecture Strategy <br />
            to Production-Grade Systems
          </h1>

          <div className="mt-4">
            <span className="inline-block bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Tharani Sebi George</span>
          </div>

          <p className="mt-8 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I help enterprises design, build, and operationalize scalable cloud systems
            across AWS, Azure, and OpenShift — ensuring architecture is not just defined,
            but successfully implemented, deployed, and running in production.
          </p>

          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-slate-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-slate-800 transition"
            >
              Discuss a Project
            </a>

            <a
              href="#services"
              className="border border-slate-300 px-6 py-3 rounded-xl font-medium hover:border-slate-500 transition"
            >
              Explore Services
            </a>
          </div>

          {/* trust line */}
          <p className="mt-10 text-sm text-slate-500">
            20+ Years Experience • Enterprise Systems • Cloud Transformation • Automation & AI
          </p>

        </div>
      </section>

      {/* VALUE / DIFFERENTIATION */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">

        <div className="text-center">

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Beyond Architecture — Into Real Production Delivery
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Most architects focus on design documents.
            I focus on end-to-end delivery — from architecture design to infrastructure
            implementation, CI/CD pipelines, environment setup, and production readiness.
          </p>

        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {[
            {
              title: "Architecture",
              desc: "Enterprise-grade scalable design aligned with business outcomes."
            },
            {
              title: "Implementation",
              desc: "Cloud infrastructure, CI/CD pipelines, and automation frameworks."
            },
            {
              title: "Production Delivery",
              desc: "Stable, secure, and operational systems running in real environments."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border bg-white hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-600 mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center tracking-tight">
            Core Services
          </h2>

          <p className="text-center text-slate-600 mt-4 max-w-2xl mx-auto">
            End-to-end architecture and engineering support for enterprise transformation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              "Solution Architecture Design",
              "Cloud Migration (AWS / Azure / OpenShift)",
              "Infrastructure Implementation",
              "Website Creation & Management",
              "Mobile App Creation",
              "CI/CD & DevOps Automation",
              "Environment Strategy (Dev → Prod)",
              "Enterprise Modernization",
              "Production Readiness Reviews",
              "Technical Leadership & Consulting",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-xl p-5 hover:shadow-sm transition"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="max-w-4xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl font-bold">
          How I Deliver Value
        </h2>

        <div className="mt-10 space-y-6 text-slate-600 leading-relaxed">

          <p>
            I translate business requirements into scalable architecture blueprints.
          </p>

          <p>
            I implement infrastructure, automation, and deployment pipelines to bring designs to life.
          </p>

          <p>
            I ensure systems are production-ready, reliable, and operationally efficient.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-slate-900 text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-3xl font-bold tracking-tight">
            Let’s Build Systems That Scale in Production
          </h2>

          <p className="mt-6 text-slate-300">
            Open for enterprise architecture, cloud transformation, and consulting engagements.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-slate-900 px-6 py-3 rounded-xl font-medium hover:bg-slate-200 transition"
            >
              Contact Me
            </a>

            <a
              href="https://linkedin.com"
              className="border border-slate-500 px-6 py-3 rounded-xl hover:border-white transition"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-sm text-slate-500">
        © {new Date().getFullYear()} Solution Architecture Portfolio
      </footer>

    </main>
  );
}
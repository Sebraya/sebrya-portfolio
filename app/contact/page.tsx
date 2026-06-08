export default function ContactPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Let’s Build Scalable and Production-Ready Systems
        </h1>

        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          I help organizations design and deliver enterprise-grade cloud solutions
          across AWS, Azure, and OpenShift — from architecture to implementation
          and production deployment.
        </p>

      </section>

      {/* CONTACT CARD SECTION */}
      <section className="max-w-3xl mx-auto px-6">

        <div className="border rounded-2xl p-8 shadow-sm bg-slate-50">

          <h2 className="text-2xl font-semibold">
            Get in Touch
          </h2>

          <p className="text-slate-600 mt-2">
            I’m open to consulting, architecture design, and cloud transformation projects.
          </p>

          <div className="mt-6 space-y-3">

            {/* EMAIL */}
            <div className="flex justify-between items-center p-3 bg-white border rounded-lg">
              <span className="text-slate-600">Email</span>
              <a
                href="mailto:Contact@Sebraya.com"
                className="text-blue-600 font-medium"
              >
                Contact@Sebraya.com
              </a>
            </div>

            {/* LINKEDIN */}
            <div className="flex justify-between items-center p-3 bg-white border rounded-lg">
              <span className="text-slate-600">LinkedIn</span>
              <a
                href="https://linkedin.com"
                className="text-blue-600 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>

            {/* OPTIONAL CALENDLY */}
            <div className="flex justify-between items-center p-3 bg-white border rounded-lg">
              <span className="text-slate-600">Schedule</span>
              <a
                href="https://calendly.com"
                className="text-blue-600 font-medium"
                target="_blank"
                rel="noreferrer"
              >
                Book a Call
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT YOU CAN HELP WITH */}
      <section className="max-w-4xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-semibold text-center">
          What I Can Help With
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mt-10">

          {[
            "Solution Architecture Design",
            "Cloud Migration (AWS / Azure / OpenShift)",
            "Infrastructure Implementation",
            "CI/CD & DevOps Automation",
            "Enterprise Modernization",
            "Production Readiness Reviews",
            "System Architecture Reviews",
            "Technical Consulting & Advisory"
          ].map((item) => (
            <div
              key={item}
              className="border rounded-xl p-4 bg-white hover:shadow-sm transition"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT FORM */}
      <section className="max-w-3xl mx-auto px-6 pb-20">

        <div className="border rounded-2xl p-8 bg-white">

          <h2 className="text-2xl font-semibold">
            Send a Message
          </h2>

          <p className="text-slate-600 mt-2">
            Share your project details and I’ll get back to you.
          </p>

          <form className="mt-6 space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg"
            />

            <textarea
              placeholder="Project Details"
              rows={5}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="bg-slate-900 text-white px-6 py-3 rounded-lg w-full font-medium hover:bg-slate-800 transition"
            >
              Send Message
            </button>

          </form>

        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-900 text-white py-16 text-center">

        <h2 className="text-2xl font-bold">
          Let’s Build Something That Runs in Production
        </h2>

        <p className="mt-4 text-slate-300">
          Architecture • Cloud • Infrastructure • Automation
        </p>

      </section>

    </main>
  );
}

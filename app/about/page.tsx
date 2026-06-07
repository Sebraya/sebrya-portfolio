import Link from "next/link";

const skills = [
  "Cloud Architecture",
  "AI Engineering",
  "Platform Reliability",
  "Full Stack Development",
  "DevOps Automation",
  "Microservices",
  "Cybersecurity",
  "Data Engineering",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-blue-900 blur-3xl" />
      </div>

      {/* Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <p className="text-blue-400 uppercase tracking-[0.3em] mb-4">
          About Me
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Designing scalable digital systems with modern engineering and AI.
        </h1>

        <p className="text-lg text-gray-300 leading-8 max-w-3xl">
          I build intelligent, scalable, and resilient platforms combining
          cloud-native architecture, automation, AI systems, and modern web
          technologies.
        </p>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {skills.map((skill) => (
            <div
              key={skill}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-blue-500/10 transition"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-20 flex-wrap">
          <Link
            href="/projects"
            className="bg-blue-500 hover:bg-blue-400 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="border border-white/20 hover:border-blue-400 px-8 py-4 rounded-xl text-lg font-semibold transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}

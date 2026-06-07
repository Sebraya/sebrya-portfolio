```tsx
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
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e3a8a,transparent_50%)]" />

        {/* Architecture Grid */}
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Architecture Flow */}
          <g stroke="rgba(59,130,246,0.4)" strokeWidth="2" fill="none">
            <rect x="120" y="120" width="180" height="70" rx="12" />
            <rect x="420" y="120" width="180" height="70" rx="12" />
            <rect x="720" y="120" width="180" height="70" rx="12" />

            <line x1="300" y1="155" x2="420" y2="155" />
            <line x1="600" y1="155" x2="720" y2="155" />

            <rect x="260" y="320" width="220" height="80" rx="12" />
            <rect x="560" y="320" width="220" height="80" rx="12" />

            <line x1="510" y1="190" x2="510" y2="320" />
            <line x1="670" y1="190" x2="670" y2="320" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <section className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            Designing scalable digital systems with modern engineering and AI.
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            I build intelligent, scalable, and resilient platforms combining
            cloud-native architecture, automation, AI systems, and modern web
            technologies. My focus is creating elegant solutions that are both
            technically robust and visually refined.
          </p>
        </div>

        {/* Skills */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-500/10"
            >
              <h3 className="text-lg font-semibold">{skill}</h3>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 flex flex-wrap gap-6">
          <Link
            href="/projects"
            className="rounded-xl bg-blue-500 px-8 py-4 text-lg font-semibold transition hover:bg-blue-400"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold transition hover:border-blue-400 hover:bg-white/5"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
```

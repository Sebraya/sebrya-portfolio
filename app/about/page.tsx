```tsx
import Link from "next/link";

const domains = [
  "AWS",
  "Microsoft Azure",
  "OpenShift",
  "Kubernetes",
  "Hybrid Cloud",
  "On-Prem Infrastructure",
  "AI Platforms",
  "DevOps Automation",
  "Enterprise Architecture",
  "Microservices",
  "Observability",
  "Security & Compliance",
];

const phases = [
  "Requirements Gathering",
  "Discovery Workshops",
  "Context & Capability Mapping",
  "AS-IS Infrastructure Analysis",
  "Target State Architecture",
  "Cost Analysis & Optimization",
  "Solution Design Documentation",
  "Enterprise Architecture Governance",
  "Implementation Strategy",
  "End-to-End Product Delivery",
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-cyan-900" />

        {/* Architecture Pattern */}
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="1"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid)" />

          <g
            stroke="rgba(59,130,246,0.35)"
            strokeWidth="2"
            fill="none"
          >
            <rect x="120" y="120" width="220" height="80" rx="12" />
            <rect x="450" y="120" width="220" height="80" rx="12" />
            <rect x="780" y="120" width="220" height="80" rx="12" />

            <line x1="340" y1="160" x2="450" y2="160" />
            <line x1="670" y1="160" x2="780" y2="160" />

            <rect x="280" y="340" width="240" height="90" rx="12" />
            <rect x="620" y="340" width="240" height="90" rx="12" />

            <line x1="560" y1="200" x2="560" y2="340" />
            <line x1="730" y1="200" x2="730" y2="340" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-5xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            About Me
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight md:text-7xl">
            Enterprise Solution Architect focused on AI, Cloud, and Modern
            Platform Engineering.
          </h1>

          <p className="max-w-4xl text-lg leading-8 text-gray-300">
            In my current role as a Solution Architect, I work closely with
            enterprise customers to understand business challenges, gather
            technical and functional requirements, and design scalable
            enterprise-grade solutions aligned with their transformation goals.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            My day-to-day activities involve conducting discovery workshops,
            understanding AS-IS infrastructure landscapes, defining target-state
            architectures, performing cost analysis, and producing detailed
            architecture and observation documents for implementation teams.
            Solutions are designed across hybrid cloud, on-premises,
            OpenShift, AWS, and Azure environments depending on customer
            requirements and operational constraints.
          </p>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-400">
            I specialize in enterprise AI and cloud-native technologies,
            delivering architecture strategies that support scalability,
            resiliency, observability, security, and operational excellence.
            Engagements range from advisory and design consulting to complete
            end-to-end solution delivery.
          </p>
        </div>

        {/* Engagement Phases */}
        <div className="mt-20">
          <h2 className="mb-8 text-3xl font-semibold">
            Solution Delivery Lifecycle
          </h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {phases.map((phase) => (
              <div
                key={phase}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition hover:border-cyan-400 hover:bg-cyan-500/10"
              >
                <p className="text-sm font-medium leading-6 text-gray-200">
                  {phase}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Expertise */}
        <div className="mt-24">
          <h2 className="mb-8 text-3xl font-semibold">
            Technology Expertise
          </h2>

          <div className="flex flex-wrap gap-4">
            {domains.map((domain) => (
              <div
                key={domain}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-6 py-3 text-sm font-medium text-cyan-300 backdrop-blur-md"
              >
                {domain}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 flex flex-wrap gap-6">
          <Link
            href="/projects"
            className="rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-cyan-400"
          >
            View Projects
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white/20 px-8 py-4 text-lg font-semibold transition hover:border-cyan-400 hover:bg-white/5"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  );
}
```

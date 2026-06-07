import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const fullName = "Tharani Sebi George"
  const title = "Senior Solution Architect | Enterprise Architecture | AWS | Azure | OpenShift | AI & Automation"
  const bio = `Senior Solution Architect with 20+ years of experience designing enterprise-scale cloud and database solutions across multiple industries. Specialized in AWS, Azure, OpenShift, enterprise architecture, automation, and cloud-native systems. Experienced across consulting, technical architecture, and solution architecture roles with strong exposure to AI-driven solutions, GitHub-based development workflows, and modern automation platforms.`

  const experience = [
    "20+ years in enterprise architecture and solution design",
    "Specialized in AWS, Azure, and OpenShift",
    "Delivered automation and AI-driven solutions",
    "Consulting and large-scale system design"
  ]

  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">{fullName}</h1>
          <p className="text-sm text-slate-600">{title}</p>
        </div>
        <nav className="space-x-4">
          <Link href="/" className="text-sm text-slate-700 hover:text-slate-900">Home</Link>
          <Link href="/about" className="text-sm text-slate-700 hover:text-slate-900">About</Link>
          <Link href="/projects" className="text-sm text-slate-700 hover:text-slate-900">Projects</Link>
          <Link href="/blog" className="text-sm text-slate-700 hover:text-slate-900">Blog</Link>
          <Link href="/contact" className="text-sm text-slate-700 hover:text-slate-900">Contact</Link>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <div>
          <h2 className="text-2xl font-semibold text-slate-800 mb-3">About</h2>
          <p className="text-slate-700 leading-relaxed">{bio}</p>

          <h3 className="mt-4 text-lg font-medium text-slate-800">Experience</h3>
          <ul className="list-disc list-inside mt-2 text-slate-700">
            {experience.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-slate-700">LinkedIn: <Link href="https://linkedin.com/in/tharani-sebigeorge" className="text-indigo-600">linkedin.com/in/tharani-sebigeorge</Link></p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-full rounded-lg overflow-hidden shadow-sm ring-1 ring-slate-50">
            <Image src="/architecture.svg" alt="Architecture design" width={900} height={450} className="w-full h-auto" style={{filter: 'saturate(0.7) contrast(1.02)'}} priority />
          </div>
          <p className="text-sm text-slate-600 text-center">Architecture design — cloud, automation, and system thinking.</p>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2 text-slate-800">Quick Links</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/about" className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md">About</Link>
          <Link href="/projects" className="px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white rounded-md">Projects</Link>
          <Link href="/blog" className="px-4 py-2 bg-slate-600 hover:bg-slate-700 text-white rounded-md">Blog</Link>
          <Link href="/contact" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md">Contact</Link>
        </div>
      </section>
    </main>
  )
}

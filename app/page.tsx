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
          <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-500 to-yellow-400">{fullName}</h1>
          <p className="text-sm text-gray-200">{title}</p>
        </div>
        <nav className="space-x-4">
          <Link href="/" className="text-sm text-white/90 hover:text-white">Home</Link>
          <Link href="/about" className="text-sm text-white/90 hover:text-white">About</Link>
          <Link href="/projects" className="text-sm text-white/90 hover:text-white">Projects</Link>
          <Link href="/blog" className="text-sm text-white/90 hover:text-white">Blog</Link>
          <Link href="/contact" className="text-sm text-white/90 hover:text-white">Contact</Link>
        </nav>
      </header>

      <section className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 p-6 rounded-xl shadow-lg">
        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">About</h2>
          <p className="text-gray-200 leading-relaxed">{bio}</p>

          <h3 className="mt-4 text-lg font-medium text-white">Experience</h3>
          <ul className="list-disc list-inside mt-2 text-gray-300">
            {experience.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>

          <div className="mt-4">
            <p className="text-gray-300">LinkedIn: <Link href="https://linkedin.com/in/tharani-sebigeorge" className="text-cyan-300">linkedin.com/in/tharani-sebigeorge</Link></p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="w-full rounded-lg overflow-hidden shadow-inner ring-1 ring-white/5">
            <Image src="/architecture.svg" alt="Colorful architecture design" width={900} height={450} className="w-full h-auto object-cover" priority />
          </div>
          <p className="text-sm text-gray-300 text-center">A colorful view of architecture design — cloud, automation, and system thinking.</p>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/about" className="px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white rounded-md">About</Link>
          <Link href="/projects" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-cyan-400 text-white rounded-md">Projects</Link>
          <Link href="/blog" className="px-4 py-2 bg-gradient-to-r from-lime-400 to-emerald-400 text-white rounded-md">Blog</Link>
          <Link href="/contact" className="px-4 py-2 bg-gradient-to-r from-rose-400 to-purple-500 text-white rounded-md">Contact</Link>
        </div>
      </section>
    </main>
  )
}

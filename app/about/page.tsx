export default function About() {
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
    <section className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-6">
        <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">Photo</div>
        <div>
          <h1 className="text-3xl font-bold">{fullName}</h1>
          <p className="text-gray-600">{title}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">About</h2>
        <p className="text-gray-700 leading-relaxed">{bio}</p>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Experience</h3>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          {experience.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold">Contact</h3>
        <p className="text-gray-700">Email: (I'll update later)</p>
        <p className="text-gray-700">LinkedIn: https://linkedin.com/in/tharani-sebigeorge</p>
      </div>
    </section>
  )
}

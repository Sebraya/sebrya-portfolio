import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Sebrya — Portfolio',
  description: 'Cloud & Automation Architect specializing in AWS, serverless systems, and AI-driven workflows.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="border-b">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Sebrya</Link>
            <div className="flex gap-4">
              <Link href="/about" className="text-gray-700">About</Link>
              <Link href="/projects" className="text-gray-700">Projects</Link>
              <Link href="/blog" className="text-gray-700">Blog</Link>
              <Link href="/contact" className="text-gray-700">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="px-6 py-12 max-w-4xl mx-auto">{children}</main>

        <footer className="border-t mt-12 py-6">
          <div className="max-w-4xl mx-auto px-6 text-sm text-gray-600">
            © {new Date().getFullYear()} Sebrya. Built with Next.js and Tailwind CSS.
          </div>
        </footer>
      </body>
    </html>
  )
}

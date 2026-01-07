import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Jarrod Collins — Consulting',
  description: 'Jarrod Collins — Sr Software Analyst | Cloud, DevOps, Power Platform'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <header className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Jarrod Collins</h1>
            <p className="text-sm text-slate-600">Sr Software Analyst — Cloud, DevOps & Power Platform</p>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            <a className="text-slate-600 hover:text-slate-900" href="#services">Services</a>
            <a className="text-slate-600 hover:text-slate-900" href="#experience">Experience</a>
            <a className="text-slate-600 hover:text-slate-900" href="#education">Education</a>
            <a className="text-slate-600 hover:text-slate-900" href="#contact">Contact</a>
            <a className="text-slate-600 hover:text-slate-900" href="https://github.com/jcollins-devops" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-slate-600 hover:text-slate-900" href="https://www.linkedin.com/in/jarrod-collins" target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <footer className="max-w-5xl mx-auto p-6 text-xs text-center text-slate-500">© {new Date().getFullYear()} Jarrod Collins — Contact: Jarrod.Collins@gmail.com</footer>
      </body>
    </html>
  )
}

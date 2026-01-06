import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Consulting Website',
  description: 'Professional consulting services'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <header className="max-w-5xl mx-auto p-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Your Consulting Name</h1>
          <nav>
            <a className="px-3 text-sm" href="#services">Services</a>
            <a className="px-3 text-sm" href="#about">About</a>
            <a className="px-3 text-sm" href="#contact">Contact</a>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
        <footer className="max-w-5xl mx-auto p-6 text-xs text-center text-slate-500">© {new Date().getFullYear()} Your Consulting Name</footer>
      </body>
    </html>
  )
}

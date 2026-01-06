export default function Home() {
  return (
    <section>
      <div className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Professional Consulting Services</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">We help organizations deliver reliable, secure, and scalable solutions. Replace this text with your background and specialties.</p>
      </div>

      <section id="services" className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Services</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="p-4 border rounded">Cloud Architecture</li>
          <li className="p-4 border rounded">DevOps & Automation</li>
          <li className="p-4 border rounded">Security Reviews</li>
        </ul>
      </section>

      <section id="about" className="py-10">
        <h3 className="text-2xl font-semibold mb-4">About</h3>
        <p className="text-slate-600">Add a brief paragraph about your experience, certifications, and typical client outcomes.</p>
      </section>

      <section id="contact" className="py-10">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-slate-600">Email: hello@example.com — Replace with your contact details.</p>
      </section>
    </section>
  )
}

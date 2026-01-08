export default function Home() {
  const services = [
    "Cloud Architecture & Migration (AWS, Azure)",
    "DevOps & CI/CD Automation",
    "Power Platform & PowerApps Development",
    "Data & Reporting (Power BI, Dataverse)",
    "Security Assessments & Compliance",
    "Process Automation & Integration",
  ]

  const skills = [
    "AWS (EC2, S3, IAM, CloudWatch)",
    "Azure",
    "Power Platform",
    "Power BI",
    "Dataverse",
    "SharePoint Online",
    "ServiceNow",
    "Git / GitHub",
    "Python / PowerShell",
    "HTML / CSS",
  ]

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Scrum Master (Scrum Inc.)",
    "Registered Product Owner (Scrum Inc.)",
    "ITIL v3 Foundations",
    "CompTIA Security+",
  ]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight">
            Jarrod Collins Consulting
          </a>
          <nav className="hidden sm:flex gap-5 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#services">Services</a>
            <a className="hover:text-slate-900" href="#skills">Skills</a>
            <a className="hover:text-slate-900" href="#experience">Experience</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-2xl border p-8 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Consulting • Cloud • Automation • Data</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Jarrod Collins</h1>
          <p className="mt-4 text-slate-600 max-w-2xl">
            Solutions-oriented IT professional with 15+ years of experience in enterprise infrastructure,
            automation, and cloud platforms. I help organizations deliver data-driven, secure, scalable solutions.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white text-sm font-medium hover:bg-slate-800"
            >
              Get a free consult
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              See services
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-500">
            <span className="font-medium text-slate-700">Contact:</span>{" "}
            <a className="underline hover:text-slate-900" href="tel:15636502768">563-650-2768</a>
            {" • "}
            <a className="underline hover:text-slate-900" href="mailto:Jarrod.Collins@gmail.com">
              Jarrod.Collins@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Core Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Practical consulting focused on shipping results: secure cloud foundations, automated delivery, and clean reporting.
        </p>

        <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s) => (
            <li key={s} className="rounded-xl border p-4 hover:shadow-sm transition-shadow">
              <p className="font-medium">{s}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Technical Skills & Tools</h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full border text-sm text-slate-700">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="mt-4 list-disc list-inside text-slate-700 space-y-1">
          {certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Professional Experience</h2>

        <div className="mt-6 space-y-5">
          <article className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Sr Software Analyst — John Deere (2023 – Present)</h3>
            <p className="mt-2 text-slate-600">
              Developed multi-threaded testing pipelines using GitHub runners and GitHub Actions to parallelize
              test execution and reduce build times by ~50%. Built automated test generation pipelines and delivered
              Power Platform solutions including model-driven Power Apps and Dataverse migrations. Implemented AI-driven
              bots with Microsoft Copilot Studio.
            </p>
            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1">
              <li>Designed and optimized CI/CD pipelines and automated checks to improve release confidence.</li>
              <li>Created Copilot Studio bots using SharePoint data for contextual responses.</li>
              <li>Delivered PowerApps and Power BI dashboards to improve decision-making.</li>
            </ul>
          </article>

          <article className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Scrum Master — John Deere (Aug 2021 – Aug 2023)</h3>
            <p className="mt-2 text-slate-600">
              Facilitated agile ceremonies, prioritized work by business value, removed impediments, and collaborated with teams
              to improve delivery and capacity planning.
            </p>
          </article>

          <article className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Cloud Solutions Analyst — Contract via Sedona Technologies (Jun 2019 – Jul 2021)</h3>
            <p className="mt-2 text-slate-600">
              Migrated virtual infrastructure to AWS, deployed EC2/S3 resources (CloudFormation), and implemented monitoring and
              integration with ServiceNow. Built SCOM in AWS and implemented AppLocker policies and SQL/Windows clustering in multi-AZ environments.
            </p>
          </article>

          <article className="rounded-xl border p-5">
            <h3 className="text-lg font-semibold">Site Manager — Vista Defense Technologies (Sep 2017 – Jun 2019)</h3>
            <p className="mt-2 text-slate-600">
              Managed a team of nine, owned hiring and reviews, and led projects from initiation through close-out using formal project management practices.
            </p>
          </article>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Education</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>MS Business Analytics (currently attending) — The University of Iowa</li>
          <li>B.S. Technical Management — DeVry University</li>
          <li>Associate in Applied Science, Microcomputer Support Specialist — Black Hawk College</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-2xl border p-8">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Tell me what you're trying to build or fix. I'll respond with a clear plan and next steps.
          </p>

          <div className="mt-6 grid gap-3 text-slate-700">
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a className="underline hover:text-slate-900" href="tel:15636502768">563-650-2768</a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a className="underline hover:text-slate-900" href="mailto:Jarrod.Collins@gmail.com">
                Jarrod.Collins@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span> Jarrod Collins
              {/* If you want: replace with your real URL and make it a link */}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white text-sm font-medium hover:bg-slate-800"
              href="mailto:Jarrod.Collins@gmail.com?subject=Consulting%20Inquiry"
            >
              Email me
            </a>
            <a
              className="inline-flex items-center justify-center rounded-lg border px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
              href="tel:15636502768"
            >
              Call me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} Jarrod Collins. All rights reserved.
        </div>
      </footer>
    </main>
  )
}

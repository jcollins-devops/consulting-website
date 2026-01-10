export default function Home() {
  const coreServices = [
    {
      title: "Power Platform & Low-Code Solutions",
      icon: "⚡",
      description: "Build enterprise applications in days instead of months.",
      benefits: [
        "Custom PowerApps (Model-driven & Canvas)",
        "Power BI dashboards & reports",
        "Dataverse data modeling",
        "SharePoint integration",
      ],
    },
    {
      title: "AI & Intelligent Automation",
      icon: "🤖",
      description: "Leverage AI to eliminate manual work and unlock insights.",
      benefits: [
        "Microsoft Copilot Studio bots",
        "AI-driven process automation",
        "Intelligent document processing",
        "Natural language workflows",
      ],
    },
    {
      title: "Workflow Automation & Integration",
      icon: "🔄",
      description: "Connect systems and eliminate repetitive manual tasks.",
      benefits: [
        "Power Automate (Cloud & RPA)",
        "API integrations & Logic Apps",
        "Data synchronization",
        "Business process automation",
      ],
    },
  ]

  const skillsByService = {
    powerPlatform: ["PowerApps", "Power BI", "Dataverse", "SharePoint Online", "Power Automate"],
    aiAutomation: ["Microsoft Copilot Studio", "Python", "AI Builder", "Azure OpenAI"],
    workflowAutomation: ["Power Automate", "Logic Apps", "RPA", "API Integration", "ServiceNow"],
  }

  const caseStudies = [
    {
      title: "Enterprise PowerApp Delivery",
      company: "John Deere",
      result: "Delivered model-driven Power Apps with Dataverse migrations; improved team productivity by enabling self-service reporting.",
    },
    {
      title: "AI-Powered Customer Bots",
      company: "John Deere",
      result: "Built Copilot Studio bots with SharePoint integration for contextual customer responses, reducing support tickets by 30%.",
    },
    {
      title: "Automated Test Infrastructure",
      company: "John Deere",
      result: "Designed CI/CD pipelines using GitHub Actions; reduced build times by 50% through intelligent parallelization.",
    },
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
            <a className="hover:text-slate-900" href="#approach">Approach</a>
            <a className="hover:text-slate-900" href="#case-studies">Case Studies</a>
            <a className="hover:text-slate-900" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-2xl border p-8 shadow-sm bg-gradient-to-br from-slate-50 to-white">
          <p className="text-sm font-medium text-slate-500">Power Platform • AI • Workflow Automation</p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight">Jarrod Collins Consulting</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Transform your business with intelligent automation, low-code solutions, and AI. I help organizations reduce manual work, accelerate delivery, and scale without hiring.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white text-sm font-medium hover:bg-slate-800 transition"
            >
              Schedule Free Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 text-sm text-slate-500">
            <span className="font-medium text-slate-700">Get in touch:</span>{" "}
            <a className="underline hover:text-slate-900" href="mailto:Jarrod.Collins@gmail.com">
              Jarrod.Collins@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="services" className="mx-auto max-w-5xl px-4 py-14">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Core Services</h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Three focused areas to solve real business problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreServices.map((service) => (
            <div key={service.title} className="rounded-2xl border p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="text-sm text-slate-700 flex items-start">
                    <span className="text-slate-400 mr-2">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Approach Section */}
      <section id="approach" className="mx-auto max-w-5xl px-4 py-14 bg-slate-50 rounded-2xl">
        <h2 className="text-3xl font-bold">My Approach</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-2xl">
          15+ years delivering solutions that work
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-3xl font-bold text-slate-300 mb-3">1</div>
            <h3 className="font-semibold mb-2">Understand Your Challenges</h3>
            <p className="text-slate-600 text-sm">
              We diagnose bottlenecks and identify high-impact automation opportunities.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-3xl font-bold text-slate-300 mb-3">2</div>
            <h3 className="font-semibold mb-2">Design Smart Solutions</h3>
            <p className="text-slate-600 text-sm">
              Practical, scalable solutions using Power Platform and intelligent automation—delivered fast.
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border">
            <div className="text-3xl font-bold text-slate-300 mb-3">3</div>
            <h3 className="font-semibold mb-2">Deliver & Support</h3>
            <p className="text-slate-600 text-sm">
              Full implementation, training, and handoff. Your team owns it from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-3xl font-bold">Recent Work</h2>
        <p className="mt-3 text-lg text-slate-600 max-w-2xl">
          Real results from recent consulting engagements
        </p>

        <div className="mt-8 space-y-4">
          {caseStudies.map((study) => (
            <div key={study.title} className="rounded-lg border p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold">{study.title}</h3>
                <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{study.company}</span>
              </div>
              <p className="text-slate-600">{study.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills by Service */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Power Platform</h3>
            <div className="flex flex-wrap gap-2">
              {skillsByService.powerPlatform.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full border text-sm text-slate-700 bg-slate-50">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">AI & Automation</h3>
            <div className="flex flex-wrap gap-2">
              {skillsByService.aiAutomation.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full border text-sm text-slate-700 bg-slate-50">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Workflow & Integration</h3>
            <div className="flex flex-wrap gap-2">
              {skillsByService.workflowAutomation.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full border text-sm text-slate-700 bg-slate-50">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((c) => (
            <li key={c} className="flex items-center text-slate-700">
              <span className="text-slate-400 mr-3">✓</span>
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* Recent Experience (Relevant) */}
      <section id="experience" className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-3xl font-bold">Professional Background</h2>

        <div className="mt-8 space-y-5">
          <article className="rounded-xl border p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold">Sr Software Analyst</h3>
              <span className="text-sm text-slate-500">John Deere (2023 – Present)</span>
            </div>
            <p className="text-slate-600">
              Building enterprise Power Platform solutions and AI-driven automation. Delivered model-driven Power Apps, Dataverse migrations, and Copilot Studio bots.
            </p>
            <ul className="mt-3 list-disc list-inside text-slate-700 space-y-1 text-sm">
              <li>Designed and deployed Power Apps for 100+ users with automated workflows</li>
              <li>Created AI bots using Copilot Studio with SharePoint data integration</li>
              <li>Optimized CI/CD pipelines, reducing deployment time by 50%</li>
            </ul>
          </article>

          <article className="rounded-xl border p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold">Cloud Solutions Analyst</h3>
              <span className="text-sm text-slate-500">Sedona Technologies (2019 – 2021)</span>
            </div>
            <p className="text-slate-600">
              Infrastructure migration and cloud architecture. Migrated on-premise workloads to AWS, implemented monitoring, and integrated with enterprise systems.
            </p>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-5xl px-4 py-14">
        <div className="rounded-2xl border p-8 bg-gradient-to-br from-slate-50 to-white">
          <h2 className="text-3xl font-bold">Let's Talk</h2>
          <p className="mt-3 text-lg text-slate-600 max-w-2xl">
            Tell me about your challenge. I'll respond with a clear plan and next steps.
          </p>

          <div className="mt-8 grid gap-4 text-slate-700">
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a className="underline hover:text-slate-900" href="mailto:Jarrod.Collins@gmail.com">
                Jarrod.Collins@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a className="underline hover:text-slate-900" href="https://www.linkedin.com/in/collinsjarrod/">
                Jarrod Collins
              </a>
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-white text-sm font-medium hover:bg-slate-800 transition"
              href="mailto:Jarrod.Collins@gmail.com?subject=Consulting%20Inquiry"
            >
              Email Me
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

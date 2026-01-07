export default function Home() {
  return (
    <section>
      <div className="py-12 text-center">
        <h2 className="text-4xl font-bold mb-2">Jarrod Collins</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">Solutions-oriented IT professional with 15+ years of experience in enterprise infrastructure, automation, and cloud platforms. I help organizations deliver data-driven, secure, and scalable solutions.</p>
        <p className="mt-4 text-sm text-slate-500">Contact: 563-650-2768 • Jarrod.Collins@gmail.com</p>
      </div>

      <section id="services" className="py-8">
        <h3 className="text-2xl font-semibold mb-4">Core Services</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="p-4 border rounded">Cloud Architecture & Migration (AWS, Azure)</li>
          <li className="p-4 border rounded">DevOps & CI/CD Automation</li>
          <li className="p-4 border rounded">Power Platform & PowerApps Development</li>
          <li className="p-4 border rounded">Data & Reporting (Power BI, Dataverse)</li>
          <li className="p-4 border rounded">Security Assessments & Compliance</li>
          <li className="p-4 border rounded">Process Automation & Integration</li>
        </ul>
      </section>

      <section id="skills" className="py-8">
        <h3 className="text-2xl font-semibold mb-4">Technical Skills & Tools</h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 border rounded text-sm">AWS (EC2, S3, IAM, CloudWatch)</span>
          <span className="px-3 py-1 border rounded text-sm">Azure</span>
          <span className="px-3 py-1 border rounded text-sm">Power Platform</span>
          <span className="px-3 py-1 border rounded text-sm">Power BI</span>
          <span className="px-3 py-1 border rounded text-sm">SharePoint Online</span>
          <span className="px-3 py-1 border rounded text-sm">ServiceNow</span>
          <span className="px-3 py-1 border rounded text-sm">Git / GitHub</span>
          <span className="px-3 py-1 border rounded text-sm">Python / PowerShell</span>
          <span className="px-3 py-1 border rounded text-sm">HTML / CSS</span>
        </div>
      </section>

      <section id="certifications" className="py-8">
        <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
        <ul className="list-disc list-inside text-slate-700">
          <li>AWS Certified Cloud Practitioner</li>
          <li>Scrum Master (Scrum Inc.)</li>
          <li>Registered Product Owner (Scrum Inc.)</li>
          <li>ITIL v3 Foundations</li>
          <li>CompTIA Security+</li>
        </ul>
      </section>

      <section id="experience" className="py-8">
        <h3 className="text-2xl font-semibold mb-4">Professional Experience</h3>

        <article className="mb-6">
          <h4 className="text-xl font-semibold">Sr Software Analyst — John Deere (2023 – Present)</h4>
          <p className="text-slate-600">Developed multi-threaded testing pipelines using GitHub runners and GitHub Actions to parallelize test execution and reduce build times by ~50%. Built automated test generation pipelines and delivered Power Platform solutions including model-driven Power Apps and Dataverse migrations. Implemented AI-driven bots with Microsoft Copilot Studio.</p>
          <ul className="list-disc list-inside mt-2 text-slate-700">
            <li>Designed and optimized CI/CD pipelines and automated checks to improve release confidence.</li>
            <li>Created Copilot Studio bots using SharePoint data for contextual responses.</li>
            <li>Delivered PowerApps and Power BI dashboards to improve decision-making.</li>
          </ul>
        </article>

        <article className="mb-6">
          <h4 className="text-xl font-semibold">Scrum Master — John Deere (Aug 2021 – Aug 2023)</h4>
          <p className="text-slate-600">Facilitated agile ceremonies, prioritized work by business value, removed impediments, and collaborated with teams to improve delivery and capacity planning.</p>
        </article>

        <article className="mb-6">
          <h4 className="text-xl font-semibold">Cloud Solutions Analyst — Contract via Sedona Technologies (Jun 2019 – Jul 2021)</h4>
          <p className="text-slate-600">Migrated virtual infrastructure to AWS, deployed EC2/S3 resources (CloudFormation), and implemented monitoring and integration with ServiceNow. Built SCOM in AWS and implemented AppLocker policies and SQL/Windows clustering in multi-AZ environments.</p>
        </article>

        <article className="mb-6">
          <h4 className="text-xl font-semibold">Site Manager — Vista Defense Technologies (Sep 2017 – Jun 2019)</h4>
          <p className="text-slate-600">Managed a team of nine, owned hiring and reviews, and led projects from initiation through close-out using formal project management practices.</p>
        </article>
      </section>

      <section id="education" className="py-8">
        <h3 className="text-2xl font-semibold mb-4">Education</h3>
        <ul className="text-slate-700">
          <li>MS Business Analytics (currently attending) — The University of Iowa</li>
          <li>B.S. Technical Management — DeVry University</li>
          <li>Associate in Applied Science, Microcomputer Support Specialist — Black Hawk College</li>
        </ul>
      </section>

      <section id="contact" className="py-8">
        <h3 className="text-2xl font-semibold mb-4">Contact</h3>
        <p className="text-slate-600">Phone: 563-650-2768</p>
        <p className="text-slate-600">Email: Jarrod.Collins@gmail.com</p>
        <p className="text-slate-600">LinkedIn: Jarrod Collins</p>
      </section>
    </section>
  )
}

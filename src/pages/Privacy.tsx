import Layout from "@/components/Layout";

const Privacy = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p>NeuroNet AI ("we", "our", "us") values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our platform.</p>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Account information (name, email address)</li>
              <li>Startup idea and contextual inputs</li>
              <li>Usage data and interaction logs</li>
              <li>Technical data (browser, device, IP address)</li>
              <li>Payment details (processed via secure third-party providers)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. How We Use Information</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Provide AI-powered analysis and execution tools</li>
              <li>Improve platform performance</li>
              <li>Personalize user experience</li>
              <li>Maintain system security</li>
              <li>Process payments</li>
            </ul>
            <p className="mt-3 font-medium text-foreground">We do NOT sell user data.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. AI Processing</h2>
            <p>User inputs may be processed through AI systems to generate structured outputs. Data is used strictly for functionality improvement and platform operation.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Data Storage &amp; Security</h2>
            <p>We implement reasonable security measures to protect user data. However, no digital system is completely secure.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
            <p>We may use third-party infrastructure providers for hosting, payments, and analytics.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Request data deletion</li>
              <li>Request account removal</li>
              <li>Contact support regarding privacy concerns</li>
            </ul>
            <p className="mt-3">Contact: <a href="mailto:support@neuronetai.in" className="text-primary hover:underline">support@neuronetai.in</a></p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Privacy;

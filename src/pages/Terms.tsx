import Layout from "@/components/Layout";

const Terms = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">Terms &amp; Conditions</h1>
        <p className="text-sm text-muted-foreground mb-10">Effective Date: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          {[
            { title: "1. Acceptance of Terms", body: "By accessing NeuroNet AI, you agree to these Terms & Conditions." },
            { title: "2. Service Description", body: "NeuroNet AI provides AI-assisted strategic thinking and execution tools. All outputs are advisory in nature." },
            { title: "3. No Professional Guarantee", body: "We do not guarantee business outcomes, funding success, or revenue generation. Users are responsible for their own decisions." },
            { title: "4. Action-Based Usage", body: "User access may be limited by action quotas depending on subscription plan. An action may include AI analysis or structured output generation." },
            { title: "5. Acceptable Use", body: null },
            { title: "6. Intellectual Property", body: "All platform infrastructure and branding remain property of NeuroNet AI. Users retain ownership of their input content." },
            { title: "7. Limitation of Liability", body: "NeuroNet AI is not liable for business losses or indirect damages arising from use of the platform." },
            { title: "8. Termination", body: "We reserve the right to suspend accounts violating these terms." },
          ].map(({ title, body }) => (
            <div key={title}>
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h2>
              {title === "5. Acceptable Use" ? (
                <>
                  <p className="mb-2">Users may not:</p>
                  <ul className="list-disc list-inside space-y-1.5">
                    <li>Use the platform for illegal activities</li>
                    <li>Attempt to exploit system vulnerabilities</li>
                    <li>Resell platform outputs as proprietary AI systems</li>
                  </ul>
                </>
              ) : (
                <p>{body}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Terms;

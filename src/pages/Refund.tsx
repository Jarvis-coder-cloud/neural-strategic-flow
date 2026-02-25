import Layout from "@/components/Layout";

const Refund = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-10">Refund Policy</h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>All subscription purchases are final unless otherwise specified.</p>

          <div>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Refunds may be considered if:</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Technical failure prevents platform access</li>
              <li>Duplicate billing occurs</li>
            </ul>
          </div>

          <p>Refund requests must be submitted within 7 days of purchase.</p>

          <p>
            Contact: <a href="mailto:neuronetai1@gmail.com" className="text-primary hover:underline">neuronetai1@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Refund;

import { Check, X } from "lucide-react";

const DifferentiationSection = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-narrow">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-gradient-cool">Not just advice. Real execution.</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="glass-card p-8">
          <h3 className="font-display text-lg font-semibold text-muted-foreground mb-6">Other Tools</h3>
          <ul className="space-y-4">
            {["Long plans you never follow", "Confusing dashboards & features", "Switching between 10 different apps"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <X size={16} className="mt-0.5 shrink-0 text-destructive/60" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card p-8 ring-2 ring-primary/20 bg-accent/20">
          <h3 className="font-display text-lg font-semibold text-gradient mb-6">NeuroNet AI</h3>
          <ul className="space-y-4">
            {["No long plans — just clear daily focus", "No confusion — only next steps", "No tool switching — everything in one place"].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <Check size={16} className="mt-0.5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default DifferentiationSection;

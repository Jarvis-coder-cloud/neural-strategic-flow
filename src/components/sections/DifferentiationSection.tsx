import { Check, X } from "lucide-react";

const DifferentiationSection = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-narrow">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-gradient-cool">What Makes NeuroNet Different</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="glass-card p-8">
          <h3 className="font-display text-lg font-semibold text-muted-foreground mb-6">Other AI Tools</h3>
          <ul className="space-y-4">
            {["Instant generation without context", "Surface-level, generic output", "No strategic validation or feedback"].map((item) => (
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
            {["Thinks deeply before executing", "Identifies blind spots & assumptions", "Aligns strategy with every action"].map((item) => (
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

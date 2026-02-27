import { Brain, Wrench, RefreshCw } from "lucide-react";

const pillars = [
  { icon: Brain, title: "Strategic Thinking Engine", desc: "Analyzes your idea, identifies blind spots, and challenges assumptions before any code is written." },
  { icon: Wrench, title: "Structured Execution", desc: "Generates landing pages and MVP starter kits that are aligned with your validated strategy." },
  { icon: RefreshCw, title: "Continuous Refinement", desc: "Iteratively improves clarity and strategy before you invest in scaling." },
];

const SystemSection = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient">A Thinking + Execution System</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        NeuroNet AI doesn't just execute — it thinks with you, then builds for you.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card-hover p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
              <Icon size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SystemSection;

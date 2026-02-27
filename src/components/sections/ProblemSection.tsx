import { Target, AlertTriangle, Layers } from "lucide-react";

const problems = [
  { icon: Target, title: "Unclear ICP", desc: "Founders skip deep market clarity and build for everyone — which means no one." },
  { icon: AlertTriangle, title: "Premature Execution", desc: "Building features before validating whether anyone actually needs them." },
  { icon: Layers, title: "Strategic Gaps", desc: "No structured thinking layer between idea and execution." },
];

const ProblemSection = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient-warm">Most founders build before thinking.</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        And it costs them months of wasted effort, wrong features, and missed opportunities.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card-hover p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-accent-foreground mb-4">
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

export default ProblemSection;

import { HelpCircle, Brain, Battery } from "lucide-react";

const problems = [
  { icon: HelpCircle, title: "Don't know what to do next", desc: "You have ideas but no clear action plan for today." },
  { icon: Brain, title: "Overthink instead of executing", desc: "You spend hours planning but never actually start doing." },
  { icon: Battery, title: "Struggle to stay consistent", desc: "You start strong but lose momentum after a few days." },
];

const ProblemSection = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient-warm">Most founders are stuck because:</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        It's not about working harder. It's about knowing exactly what to do.
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

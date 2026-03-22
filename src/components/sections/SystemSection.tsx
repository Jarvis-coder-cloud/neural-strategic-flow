import { ListChecks, Footprints, TrendingUp } from "lucide-react";

const pillars = [
  { icon: ListChecks, title: "Clear daily actions", desc: "No guesswork. You get exactly what to focus on today." },
  { icon: Footprints, title: "Step-by-step execution", desc: "Follow a simple path. Do one thing at a time." },
  { icon: TrendingUp, title: "Track your progress", desc: "See how far you've come. Stay motivated every day." },
];

const SystemSection = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient">NeuroNet fixes that.</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Simple. Clear. Actionable. Every single day.
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

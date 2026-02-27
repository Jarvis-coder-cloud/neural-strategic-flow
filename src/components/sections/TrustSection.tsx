import { Zap, Shield, Users } from "lucide-react";

const stats = [
  { icon: Zap, label: "Faster Clarity", desc: "Go from vague idea to validated strategy in minutes" },
  { icon: Shield, label: "Risk Reduction", desc: "Identify blind spots before they become costly mistakes" },
  { icon: Users, label: "Built for Solo Founders", desc: "Your AI co-founder that thinks before it builds" },
];

const TrustSection = () => (
  <section className="section-padding">
    <div className="container-narrow">
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {stats.map(({ icon: Icon, label, desc }) => (
          <div key={label} className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
              <Icon size={24} />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{label}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;

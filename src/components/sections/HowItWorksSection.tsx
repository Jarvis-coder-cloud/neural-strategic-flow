import { MessageSquare, ListOrdered, Play, RefreshCw } from "lucide-react";

const steps = [
  { num: 1, title: "Tell your goal", desc: "Share what you're building or where you're stuck", icon: MessageSquare },
  { num: 2, title: "AI finds your top 3 tasks", desc: "Get the 3 most important things to do right now", icon: ListOrdered },
  { num: 3, title: "You execute", desc: "Do the work with clear guidance and focus", icon: Play },
  { num: 4, title: "AI improves your plan", desc: "Your plan gets smarter as you make progress", icon: RefreshCw },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding bg-muted/30">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient">How It Works</span>
      </h2>
      <p className="text-muted-foreground mb-14 max-w-xl mx-auto">
        Four simple steps. No complexity. Just action.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map(({ num, title, desc, icon: Icon }) => (
          <div key={num} className="glass-card-hover p-6 text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-cta text-primary-foreground font-display font-bold text-sm mb-4">
              {num}
            </div>
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-accent-foreground mb-3 mx-auto">
              <Icon size={18} />
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;

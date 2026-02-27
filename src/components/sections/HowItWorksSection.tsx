import { Lightbulb, Search, Wrench, RefreshCw } from "lucide-react";

const steps = [
  { num: 1, title: "Define your idea", desc: "Tell NeuroNet about your startup vision", icon: Lightbulb },
  { num: 2, title: "AI analyzes clarity & risks", desc: "Deep analysis of your market and strategy", icon: Search },
  { num: 3, title: "Generate aligned assets", desc: "Get MVPs and landing pages that match your strategy", icon: Wrench },
  { num: 4, title: "Refine before scaling", desc: "Iterate and improve before going all-in", icon: RefreshCw },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="section-padding bg-muted/30">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient">How It Works</span>
      </h2>
      <p className="text-muted-foreground mb-14 max-w-xl mx-auto">
        Four simple steps from idea to validated execution.
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

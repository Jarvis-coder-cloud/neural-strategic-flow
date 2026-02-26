import { Brain, Target, AlertTriangle, Layers, Lightbulb, Search, Wrench, RefreshCw, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import WaitlistForm from "@/components/WaitlistForm";
import dashboardMockup from "@/assets/dashboard-mockup.png";
import productPreview from "@/assets/product-preview.png";
import robotWave from "@/assets/robot-wave.png";
import robotThink from "@/assets/robot-think.png";
import robotChecklist from "@/assets/robot-checklist.png";

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-8 md:pt-12 pb-20 md:pb-28 px-4 md:px-8 relative overflow-hidden">
        <div className="gradient-glow absolute inset-0 pointer-events-none" />
        <div className="container-narrow relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-up">
              <div className="flex items-center gap-3">
                <img src={robotWave} alt="NeuroNet robot mascot" className="w-16 h-16 animate-float" />
                <span className="text-sm font-medium text-muted-foreground bg-accent/50 px-3 py-1 rounded-full">AI Thinking Partner</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">Think Clearly.</span><br />
                <span className="text-gradient-warm">Build Correctly.</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                NeuroNet AI is your <span className="font-semibold text-gradient-cool">AI Thinking + Execution Partner</span>. It analyzes your startup before helping you execute.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  size="lg"
                  className="gradient-cta text-primary-foreground border-0 shadow-md hover:shadow-lg transition-shadow text-base px-8"
                  onClick={() => scrollTo("waitlist")}
                >
                  Join Waitlist Now 🚀
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base px-8"
                  onClick={() => scrollTo("how-it-works")}
                >
                  See How It Works
                </Button>
              </div>
            </div>
            <div className="relative animate-float" style={{ animationDelay: "0.5s" }}>
              <div className="absolute -inset-8 gradient-glow rounded-3xl" />
              <img
                src={dashboardMockup}
                alt="NeuroNet AI dashboard showing structured startup insights and MVP generation"
                className="relative rounded-2xl shadow-xl border border-border/50"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gradient-warm">Most founders build before thinking.</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Unclear ICP", desc: "Founders skip deep market clarity.", robot: robotThink },
              { icon: AlertTriangle, title: "Premature Execution", desc: "Building features without validation.", robot: robotChecklist },
              { icon: Layers, title: "Strategic Gaps", desc: "No structured thinking layer.", robot: robotWave },
            ].map(({ icon: Icon, title, desc, robot }) => (
              <div key={title} className="glass-card-hover p-8 text-center relative">
                <img src={robot} alt="" className="w-12 h-12 mx-auto mb-3 opacity-80" />
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-accent-foreground mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-gradient mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            <span className="text-gradient-fresh">A Thinking + Execution System</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "Strategic Thinking Engine", desc: "Analyzes idea, identifies blind spots, challenges assumptions." },
              { icon: Wrench, title: "Structured Execution", desc: "Generates landing pages and MVP starter kits aligned with strategy." },
              { icon: RefreshCw, title: "Continuous Refinement", desc: "Improves clarity before scaling." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card-hover p-8 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent text-accent-foreground mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="font-display text-lg font-semibold text-gradient-cool mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="section-padding bg-muted/30">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-14">
            <span className="text-gradient">How It Works</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { num: 1, title: "Define your idea", icon: Lightbulb },
              { num: 2, title: "AI analyzes clarity & risks", icon: Search },
              { num: 3, title: "Generate aligned assets", icon: Wrench },
              { num: 4, title: "Refine before scaling", icon: RefreshCw },
            ].map(({ num, title, icon: Icon }) => (
              <div key={num} className="glass-card p-6 text-center relative">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full gradient-cta text-primary-foreground font-display font-bold text-sm mb-4">
                  {num}
                </div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-accent-foreground mb-3 mx-auto block">
                  <Icon size={18} />
                </div>
                <p className="text-sm font-medium text-gradient-fresh">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-warm">See the System in Action</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            From insight analysis to MVP blueprints — one aligned workflow.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-8 gradient-glow rounded-3xl" />
            <img
              src={productPreview}
              alt="NeuroNet AI product preview showing MVP starter kit blueprint"
              className="relative rounded-2xl shadow-xl border border-border/50"
              loading="lazy"
            />
            <img src={robotChecklist} alt="" className="absolute -bottom-6 -right-6 w-20 h-20 animate-float" />
          </div>
        </div>
      </section>

      {/* DIFFERENTIATION */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="text-gradient-cool">What Makes NeuroNet Different</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-8">
              <h3 className="font-display text-lg font-semibold text-muted-foreground mb-6">Other AI Tools</h3>
              <ul className="space-y-4">
                {["Instant generation", "Surface-level output", "No strategic validation"].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <X size={16} className="mt-0.5 shrink-0 text-destructive/60" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 ring-2 ring-primary/20 bg-accent/30">
              <h3 className="font-display text-lg font-semibold text-gradient mb-6">NeuroNet AI</h3>
              <ul className="space-y-4">
                {["Thinks before executing", "Identifies blind spots", "Aligns strategy with execution"].map((item) => (
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

      {/* VISION */}
      <section className="section-padding">
        <div className="container-narrow text-center max-w-2xl mx-auto">
          <img src={robotThink} alt="" className="w-20 h-20 mx-auto mb-6 animate-float" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Founders don't need more tools.</span><br />
            <span className="text-gradient-warm">They need better thinking.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            NeuroNet AI connects <span className="font-semibold text-gradient-fresh">clarity with execution</span>.
          </p>
        </div>
      </section>

      {/* WAITLIST CTA */}
      <section id="waitlist" className="section-padding">
        <div className="container-narrow">
          <div className="rounded-3xl gradient-cta p-12 md:p-16 text-center flex flex-col items-center gap-8">
            <div className="flex items-center gap-4">
              <img src={robotWave} alt="" className="w-16 h-16" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                Start building with clarity.
              </h2>
            </div>
            <WaitlistForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

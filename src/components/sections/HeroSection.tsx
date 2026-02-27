import { Button } from "@/components/ui/button";
import neuronetLogo from "@/assets/neuronet-logo.jpg";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-8 md:pt-12 pb-20 md:pb-28 px-4 md:px-8 relative overflow-hidden">
      <div className="gradient-glow absolute inset-0 pointer-events-none" />
      <div className="container-narrow relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <div className="flex items-center gap-3">
              <img src={neuronetLogo} alt="NeuroNet AI logo" className="w-14 h-14 rounded-xl object-contain shadow-sm" />
              <span className="text-sm font-medium text-muted-foreground bg-accent/60 px-4 py-1.5 rounded-full border border-border/50">
                AI Thinking Partner
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Think Clearly.</span><br />
              <span className="text-gradient-warm">Build Correctly.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              NeuroNet AI is your <span className="font-semibold text-foreground">AI Thinking + Execution Partner</span>. It analyzes your startup before helping you execute.
            </p>
            <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
              Unlike execution bots, NeuroNet AI thinks strategically about your startup before generating actions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="gradient-cta text-primary-foreground border-0 shadow-md hover:shadow-lg transition-all text-base px-8 hover:scale-[1.02]"
                onClick={() => scrollTo("waitlist")}
              >
                Join Waitlist Now 🚀
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 hover:bg-accent/50 transition-all"
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
              className="relative rounded-2xl shadow-2xl border border-border/50"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

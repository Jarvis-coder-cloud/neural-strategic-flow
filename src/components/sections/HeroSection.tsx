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
                Your AI Execution Partner
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gradient">Stop guessing.</span><br />
              <span className="text-gradient-warm">Start executing.</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              NeuroNet is an AI that tells you <span className="font-semibold text-foreground">what to do next</span> in your startup — and helps you do it.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                className="gradient-cta text-primary-foreground border-0 shadow-md hover:shadow-lg transition-all text-base px-8 hover:scale-[1.02]"
                onClick={() => scrollTo("waitlist")}
              >
                Tell me what to do 🚀
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
              alt="NeuroNet AI dashboard showing your daily execution plan"
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

import { ListChecks, Zap, SlidersHorizontal, BarChart3, Trophy } from "lucide-react";

const features = [
  { icon: ListChecks, title: "Top 3 tasks daily", desc: "Know exactly what matters most today" },
  { icon: Zap, title: "AI-generated actions", desc: "Get smart tasks based on your goals" },
  { icon: SlidersHorizontal, title: "Advisor / Executor / Autopilot", desc: "Choose how much help you want" },
  { icon: BarChart3, title: "Weekly progress tracking", desc: "See your growth week by week" },
  { icon: Trophy, title: "Daily win system", desc: "Celebrate progress and stay motivated" },
];

const FeaturesSection = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient-fresh">Everything you need to execute</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Simple features that keep you focused and moving forward.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="glass-card-hover p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
              <Icon size={22} />
            </div>
            <h3 className="font-display text-base font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;

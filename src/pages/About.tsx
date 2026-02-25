import Layout from "@/components/Layout";
import { Check } from "lucide-react";

const About = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
          About NeuroNet AI
        </h1>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-8">
          Built for Founders Who Think Before They Build.
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            NeuroNet AI was created with a simple belief: Founders don't need more tools. They need better thinking.
          </p>
          <p>
            In the early stages of building, clarity matters more than speed. Yet most AI platforms focus on generating output — not improving decisions.
          </p>
          <p>NeuroNet AI bridges that gap.</p>
          <p>
            We combine structured strategic thinking with aligned execution. The system analyzes startup ideas, identifies blind spots, and then helps founders build with clarity.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">Our Philosophy</h3>
          <ul className="space-y-3">
            {["Thinking before execution", "Strategy before scale", "Clarity before automation"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <Check size={16} className="text-primary shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <p className="text-muted-foreground leading-relaxed">
            NeuroNet AI is not an autonomous system. It does not replace founders. It supports them.
          </p>
        </div>

        <div className="mt-12">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">Built for</h3>
          <ul className="space-y-2">
            {["Solo founders", "Bootstrapped builders", "Pre-seed startups", "Indie operators"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 glass-card p-8 text-center">
          <h3 className="font-display text-xl font-semibold text-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
            We believe the future of AI in entrepreneurship is not automation without control. It is intelligent support with human authority. NeuroNet AI is designed to act as a Thinking + Execution Partner — where founders always remain in control.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-lg font-semibold text-foreground">
            Clarity compounds. Execution accelerates. NeuroNet connects both.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;

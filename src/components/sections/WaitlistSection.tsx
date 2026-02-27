import WaitlistForm from "@/components/WaitlistForm";
import neuronetLogo from "@/assets/neuronet-logo.jpg";

const WaitlistSection = () => (
  <section id="waitlist" className="section-padding">
    <div className="container-narrow">
      <div className="rounded-3xl gradient-cta p-12 md:p-16 text-center flex flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <img src={neuronetLogo} alt="" className="w-12 h-12 rounded-xl bg-primary-foreground/10 p-1" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
            Start building with clarity.
          </h2>
        </div>
        <p className="text-primary-foreground/80 max-w-md">
          Join the waitlist and be the first to access NeuroNet AI when we launch.
        </p>
        <WaitlistForm />
      </div>
    </div>
  </section>
);

export default WaitlistSection;

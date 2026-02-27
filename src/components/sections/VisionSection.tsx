import neuronetLogo from "@/assets/neuronet-logo.jpg";

const VisionSection = () => (
  <section className="section-padding bg-muted/30">
    <div className="container-narrow text-center max-w-2xl mx-auto">
      <img src={neuronetLogo} alt="NeuroNet AI" className="w-16 h-16 mx-auto mb-6 rounded-xl shadow-sm" />
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
        <span className="text-gradient">Founders don't need more tools.</span><br />
        <span className="text-gradient-warm">They need better thinking.</span>
      </h2>
      <p className="text-lg text-muted-foreground">
        NeuroNet AI connects <span className="font-semibold text-foreground">clarity with execution</span> — so you build the right thing, the right way.
      </p>
    </div>
  </section>
);

export default VisionSection;

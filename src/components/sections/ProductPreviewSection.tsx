import productPreview from "@/assets/product-preview.png";

const ProductPreviewSection = () => (
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
          className="relative rounded-2xl shadow-2xl border border-border/50"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default ProductPreviewSection;

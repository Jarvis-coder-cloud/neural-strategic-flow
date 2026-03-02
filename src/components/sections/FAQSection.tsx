import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is NeuroNet AI?",
    a: "NeuroNet AI is a strategic thinking + execution platform for solo founders. It helps you validate your startup idea, identify blind spots, and generate aligned assets like landing pages and MVP starter kits — all before you waste time building the wrong thing.",
  },
  {
    q: "How is this different from ChatGPT or other AI tools?",
    a: "Most AI tools generate output instantly without understanding your context. NeuroNet AI thinks deeply about your idea first — analyzing your ICP, assumptions, and risks — then builds assets that are strategically aligned with your validated vision.",
  },
  {
    q: "Who is NeuroNet AI built for?",
    a: "It's designed for solo founders, indie hackers, and early-stage entrepreneurs who want to move fast but smart. If you've ever built something nobody wanted, NeuroNet is your safeguard.",
  },
  {
    q: "Is NeuroNet AI free to use?",
    a: "We're currently in early access. Join our waitlist to be among the first to try it when we launch. Early adopters will get special pricing and priority access.",
  },
  {
    q: "What kind of assets can NeuroNet generate?",
    a: "NeuroNet can generate strategically-aligned landing pages, MVP starter kits, ICP analyses, competitive positioning frameworks, and more — all tailored to your validated startup strategy.",
  },
  {
    q: "How long does the process take?",
    a: "You can go from a vague idea to a validated strategy with aligned assets in minutes, not weeks. The AI handles the heavy lifting so you can focus on what matters.",
  },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient-warm">Frequently Asked Questions</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Everything you need to know about NeuroNet AI.
      </p>
      <div className="max-w-2xl mx-auto text-left">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map(({ q, a }, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/50">
              <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline hover:text-primary transition-colors">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;

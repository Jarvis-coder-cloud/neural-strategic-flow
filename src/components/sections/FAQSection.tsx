import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is NeuroNet AI?",
    a: "NeuroNet AI is your daily execution partner. It tells you the top 3 things to do in your startup every day and helps you actually do them.",
  },
  {
    q: "How is this different from other AI tools?",
    a: "Other tools give you long plans and advice. NeuroNet gives you clear, simple daily actions — no confusion, no overwhelm, just the next step.",
  },
  {
    q: "Who is this for?",
    a: "Founders, indie hackers, and anyone building something who feels stuck or doesn't know what to focus on next.",
  },
  {
    q: "Is it free?",
    a: "We're launching soon. Join the waitlist to get early access and special pricing.",
  },
  {
    q: "What are the Advisor, Executor, and Autopilot modes?",
    a: "Advisor suggests what to do. Executor helps you do it step by step. Autopilot handles tasks for you. Choose the level of help you need.",
  },
  {
    q: "How fast can I get started?",
    a: "Share your goal, and you'll have your first 3 tasks in under a minute. It's that simple.",
  },
];

const FAQSection = () => (
  <section className="section-padding">
    <div className="container-narrow text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient-warm">Questions? We got you.</span>
      </h2>
      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Simple answers to common questions.
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

import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow max-w-2xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Have a Question?</h2>
          <p className="text-muted-foreground mb-4">For support, partnerships, or general inquiries, contact us.</p>
          <p className="flex items-center gap-2 text-muted-foreground mb-10">
            <Mail size={16} className="text-primary" />
            <a href="mailto:neuronetai1@gmail.com" className="text-primary hover:underline">neuronetai1@gmail.com</a>
          </p>

          {submitted ? (
            <div className="glass-card p-10 text-center">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message Sent</h3>
              <p className="text-muted-foreground">Thank you for reaching out. We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" required rows={5} className="mt-1.5" />
              </div>
              <Button type="submit" className="gradient-cta text-primary-foreground border-0 shadow-sm hover:shadow-md transition-shadow">
                Send Message
              </Button>
            </form>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

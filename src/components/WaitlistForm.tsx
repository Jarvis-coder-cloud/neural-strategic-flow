import { useState } from "react";
import { FunctionsHttpError } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.functions.invoke("waitlist-signup", {
        body: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
        },
      });

      if (error) {
        if (error instanceof FunctionsHttpError) {
          const errorData = await error.context.json().catch(() => null);
          if (error.context.status === 409 || errorData?.code === "duplicate_email") {
            toast({ title: "Already on the list!", description: "This email is already registered." });
            return;
          }
        }

        toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
        return;
      }

      setSubmitted(true);
      toast({ title: "You're on the waitlist! 🎉", description: "We'll notify you when we launch." });
    } catch {
      toast({ title: "Network issue", description: "Please try again in a moment.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center animate-fade-up">
        <p className="font-display text-2xl font-bold text-gradient mb-2">You're In! 🚀</p>
        <p className="text-muted-foreground">We'll reach out when NeuroNet AI is ready.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-4 max-w-md w-full">
      <p className="font-display text-lg font-bold text-gradient text-center">Join the Waitlist</p>
      <Input
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        maxLength={100}
      />
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        maxLength={255}
      />
      <Button
        type="submit"
        disabled={loading}
        className="w-full gradient-cta text-primary-foreground border-0 shadow-md hover:shadow-lg transition-shadow text-base"
      >
        {loading ? "Joining..." : "Join Waitlist Now"}
      </Button>
    </form>
  );
};

export default WaitlistForm;

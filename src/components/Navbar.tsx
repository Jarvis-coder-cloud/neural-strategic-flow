import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import neuronetLogo from "@/assets/neuronet-logo.jpg";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
      <nav className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={neuronetLogo} alt="NeuroNet AI" className="w-8 h-8 rounded-lg object-contain" />
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            NeuroNet <span className="text-primary">AI</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Button size="sm" className="gradient-cta text-primary-foreground border-0 shadow-sm hover:shadow-md transition-shadow"
            onClick={() => { window.location.href = "/#waitlist"; }}>
            Join Waitlist 🚀
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-4 pb-4 space-y-3 animate-fade-up">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </Link>
            )
          )}
          <Button size="sm" className="w-full gradient-cta text-primary-foreground border-0"
            onClick={() => { setMobileOpen(false); window.location.href = "/#waitlist"; }}>
            Join Waitlist 🚀
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

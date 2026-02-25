import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-muted/30">
    <div className="container-narrow px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div>
          <span className="font-display text-lg font-bold text-foreground tracking-tight">
            NeuroNet <span className="text-primary">AI</span>
          </span>
          <p className="mt-2 text-sm text-muted-foreground max-w-xs">
            Think clearly. Build correctly.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms &amp; Conditions</Link>
          <Link to="/refund" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</Link>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-border text-xs text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} NeuroNet AI. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

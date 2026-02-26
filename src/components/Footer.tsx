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
          <a
            href="https://www.instagram.com/neuronet.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            @neuronet.ai
          </a>
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

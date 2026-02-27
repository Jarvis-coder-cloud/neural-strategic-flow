import { Brain, Target, AlertTriangle, Layers, Lightbulb, Search, Wrench, RefreshCw, Check, X, ArrowRight, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import WaitlistForm from "@/components/WaitlistForm";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SystemSection from "@/components/sections/SystemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProductPreviewSection from "@/components/sections/ProductPreviewSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import VisionSection from "@/components/sections/VisionSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import TrustSection from "@/components/sections/TrustSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SystemSection />
      <HowItWorksSection />
      <ProductPreviewSection />
      <DifferentiationSection />
      <TrustSection />
      <VisionSection />
      <WaitlistSection />
    </Layout>
  );
};

export default Index;

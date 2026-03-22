import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SystemSection from "@/components/sections/SystemSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ProductPreviewSection from "@/components/sections/ProductPreviewSection";
import DifferentiationSection from "@/components/sections/DifferentiationSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import VisionSection from "@/components/sections/VisionSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import TrustSection from "@/components/sections/TrustSection";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ProblemSection />
      <SystemSection />
      <HowItWorksSection />
      <ProductPreviewSection />
      <DifferentiationSection />
      <FeaturesSection />
      <TrustSection />
      <FAQSection />
      <VisionSection />
      <WaitlistSection />
    </Layout>
  );
};

export default Index;

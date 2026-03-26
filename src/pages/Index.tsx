import Header from "@/components/Header";
import BrandSignature from "@/components/BrandSignature";
import Hero from "@/components/Hero";
import AuthorityCards from "@/components/AuthorityCards";
import FormSection from "@/components/FormSection";
import InvestmentSection from "@/components/InvestmentSection";
import AwardsSection from "@/components/AwardsSection";
import BrandsSection from "@/components/BrandsSection";
import FranchiseModels from "@/components/FranchiseModels";
import CtaBanner from "@/components/CtaBanner";
import MarketSection from "@/components/MarketSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BrandSignature />
      <Hero />
      <AuthorityCards />
      <FormSection />
      <InvestmentSection />
      <AwardsSection />
      <BrandsSection />
      <FranchiseModels />
      <CtaBanner />
      <MarketSection />
      <Footer />
    </div>
  );
};

export default Index;

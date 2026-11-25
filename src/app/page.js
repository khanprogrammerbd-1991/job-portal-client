import Banner from "@/components/Banner";
import SmartJobDiscovery from "@/components/SmartJobDiscovery";
import Image from "next/image";
import SignUpPage from "./sign-up/page";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <div>
    <Banner />
    <SmartJobDiscovery />
    <FeaturesSection/>
    <PricingSection/>
    <CtaSection/>
    <Footer/>

  
  
  </div>
  );
}

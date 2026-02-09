"use client";

import { LanguageContext, useLanguageProvider } from "@/hooks/useLanguage";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CoverageArea from "@/components/CoverageArea";
import HowItWorks from "@/components/HowItWorks";
import SocialFeed from "@/components/SocialFeed";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const languageValue = useLanguageProvider();

  return (
    <LanguageContext.Provider value={languageValue}>
      <SplashScreen>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <div className="section-divider" />
          <About />
          <div className="section-divider" />
          <Services />
          <div className="section-divider" />
          <Gallery />
          <div className="section-divider" />
          <Testimonials />
          <div className="section-divider" />
          <HowItWorks />
          <div className="section-divider" />
          <CoverageArea />
          <div className="section-divider" />
          <SocialFeed />
          <div className="section-divider" />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </SplashScreen>
    </LanguageContext.Provider>
  );
}

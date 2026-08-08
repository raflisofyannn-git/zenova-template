import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/hero/Hero";
import LogoCloud from "@/components/sections/logos/LogoCloud";
import Features from "@/components/sections/features/Features";
import About from "@/components/sections/about/About";
import Services from "@/components/sections/services/Services";
import Showcase from "@/components/sections/showcase/Showcase";
import Statistics from "@/components/sections/statistics/Statistics";
import Projects from "@/components/sections/projects/Projects";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Pricing from "@/components/sections/pricing/Pricing";
import FAQ from "@/components/sections/faq/FAQ";
import CTA from "@/components/sections/cta/CTA";
import Contact from "@/components/sections/contact/Contact";

import MouseGlow from "@/components/common/MouseGlow";
import ScrollProgress from "@/components/common/ScrollProgress";
import FloatingShape from "@/components/common/FloatingShape";


export default function Home() {
  return (
    <>
      <ScrollProgress />

      <MouseGlow />

      <FloatingShape />

      <Navbar />

      <main>
        <Hero />

        <LogoCloud />

        <Features />

        <About />

        <Services />

        <Showcase />

        <Statistics />

        <Projects />

        <Testimonials />

        <Pricing />

        <FAQ />

        <CTA />

        <Contact />
      </main>

      <Footer />
    </>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Features from "@/components/sections/features/Features";
import Hero from "@/components/sections/hero/Hero";
import LogoCloud from "@/components/sections/logos/LogoCloud";
import Showcase from "@/components/sections/showcase/Showcase";
import Statistics from "@/components/sections/statistics/Statistics";

export default function Home() {
  return (
   <>
    <Navbar />
    <main>
    <Hero />
    <LogoCloud />
    <Features />
    <Showcase />
    <Statistics />
    </main>
    <Footer />

    </>
  );
}
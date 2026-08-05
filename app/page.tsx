import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/hero/Hero";
import LogoCloud from "@/components/sections/logos/LogoCloud";

export default function Home() {
  return (
   <>
    <Navbar />
    <main>
    <Hero />
    <LogoCloud />
    </main>
    <Footer />

    </>
  );
}
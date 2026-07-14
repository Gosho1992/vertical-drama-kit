import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Showcase from "@/components/sections/Showcase";
import Workflow from "@/components/sections/Workflow";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedCollection />
        <About />
        <WhyChooseUs />
        <Showcase />
        <Workflow />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import Catalog from "@/components/Catalog";
import Faqs from "@/components/Faqs";
import Feedback from "@/components/Feedbacks";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto hidden md:block">
      <Navbar/>
      <Hero/>
      <Catalog/>
      <Projects/>
      <Feedback/>
      <Pricing/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

import About from "@/components/About";
import Albums from "@/components/Albums";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Photos from "@/components/Photos";
import Services from "@/components/Services";
import Testomonial from "@/components/Testomonial";

export default function Home() {
  return (
    <main className="w-full h-full text-Beige">
      <Nav />
      <Hero />
      <About />
      <Albums/>
      <Services/>
      <Testomonial/>
      <Photos/>
      <Footer/>
    </main>
  );
}

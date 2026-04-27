import Navbar from "./components/Navbar";
import WhatsAppFloat from "./components/WhatsAppFloat";
import HeroSection from "./components/HeroSection";
import ServiciosSection from "./components/ServiciosSection";
import VigilanteSection from "./components/VigilanteSection";
import CapacitacionSection from "./components/CapacitacionSection";
import ReclutamientoSection from "./components/ReclutamientoSection";
import ProtocolosSection from "./components/ProtocolosSection";
import TecnologiaSection from "./components/TecnologiaSection";
import ContactoSection from "./components/ContactoSection";
import AltoImpactoSection from "./components/AltoImpactoSection";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-onyx-gold focus:text-onyx-black focus:rounded-md focus:font-semibold"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content" role="main">
        <HeroSection />
        <div className="section-divider" />
        <ServiciosSection />
        <div className="section-divider" />
        <VigilanteSection />
        <div className="section-divider" />
        <AltoImpactoSection />
        <div className="section-divider" />
        <CapacitacionSection />
        <div className="section-divider" />
        <ReclutamientoSection />
        <div className="section-divider" />
        <ProtocolosSection />
        <div className="section-divider" />
        <TecnologiaSection />
        <div className="section-divider" />
        <ContactoSection />
      </main>
      <WhatsAppFloat />
    </>
  );
}

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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <ServiciosSection />
        <div className="section-divider" />
        <VigilanteSection />
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

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import {
  AboutSection,
  AppointmentSection,
  ContactSection,
  DoctorsSection,
  FaqSection,
  FinalCtaSection,
  GallerySection,
  HeroSection,
  ServicesSection,
  TestimonialsSection,
  TrustedSection,
  WhyChooseSection
} from "@/components/site-sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustedSection />
        <ServicesSection />
        <AboutSection />
        <WhyChooseSection />
        <DoctorsSection />
        <AppointmentSection />
        <TestimonialsSection />
        <GallerySection />
        <FaqSection />
        <ContactSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

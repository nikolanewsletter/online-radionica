import AboutSection from "./components/AboutSection";
import AgendaSection from "./components/AgendaSection";
import AudienceSection from "./components/AudienceSection";
import BenefitsSection from "./components/BenefitsSection";
import ClientEffects from "./components/ClientEffects";
import DemoSection from "./components/DemoSection";
import ExampleSection from "./components/ExampleSection";
import FaqSection from "./components/FaqSection";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import MobileCta from "./components/MobileCta";
import PricingSection from "./components/PricingSection";
import SkipLink from "./components/SkipLink";
import WhySection from "./components/WhySection";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Korišćenje veštačke inteligencije za uspešno pisanje newslettera",
  description: "Online praktična radionica o korišćenju AI alata za pisanje newslettera.",
  startDate: "2026-02-09T19:00:00+01:00",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  offers: {
    "@type": "Offer",
    price: "59",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
  },
  location: {
    "@type": "VirtualLocation",
    url: "https://zoom.us",
  },
  organizer: {
    "@type": "Person",
    name: "Nikola",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SkipLink />
      <HeaderSection />
      <main>
        <HeroSection />
        <WhySection />
        <AudienceSection />
        <BenefitsSection />
        <AgendaSection />
        <DemoSection />
        <ExampleSection />
        <PricingSection />
        <AboutSection />
        <FaqSection />
      </main>
      <FooterSection />
      <MobileCta />
      <ClientEffects />
    </>
  );
}

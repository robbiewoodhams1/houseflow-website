import {
  Header,
  HeroSection,
  StatsSection,
  FeaturesSection,
  TestimonialsSection,
  AboutSection,
  DownloadCTASection,
  Footer,
} from '@/components';

export default function LandingClient() {
  return (
    <div className="w-full flex flex-col">
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <StatsSection />

      <section id="features">
        <FeaturesSection />
      </section>

      <section id="testimonials">
        <TestimonialsSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <DownloadCTASection />

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

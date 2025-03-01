import Hero from "@/components/hero/Hero";
import MainFeatures from "@/components/features/MainFeatures";
import Mission from "@/components/Mission";
import Benefits from "@/components/benefits/BenefitsUI";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FAQs from "@/components/faq/FAQs";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
      <section>
        <MainFeatures />
      </section>
      <section>
        <Mission />
      </section>
      <section>
        <Benefits />
      </section>
      <section>
        <FAQs />
      </section>
      <section>
        <FinalCTA />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

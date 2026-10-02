import Hero from "../components/sections/Hero";
import PlotCategories from "../components/sections/PlotCategories";
import LocationAdvantages from "../components/sections/LocationAdvantages";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import ContactForm from "../components/sections/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlotCategories />
      <LocationAdvantages />
      {/* <Services /> */}
      <Testimonials />
      <ContactForm />
    </main>
  );
}

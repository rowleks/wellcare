import About from "./components/about/About";
import Appointment from "./components/appointment/Appointment";
import Cta from "./components/cta/Cta";
import Docs from "./components/doctors/Docs";
import Hero from "./components/hero/Hero";
import Reviews from "./components/reviews/Reviews";
import HelpServices from "./components/services/HelpServices";
import MedServicesMini from "./components/services/MedServicesMini";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <MedServicesMini />
        <HelpServices />
        <Appointment />
        <Docs />
        <Cta />
        <Reviews />
      </main>
    </div>
  );
}

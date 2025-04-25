import About from "./components/about/About";
import Appointment from "./components/appointment/Appointment";
import Hero from "./components/hero/Hero";
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
      </main>
    </div>
  );
}

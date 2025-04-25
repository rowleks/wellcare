import About from "./components/about/About";
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
      </main>
    </div>
  );
}

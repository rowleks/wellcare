import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import ServicesMini from "./components/services/ServicesMini";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <About />
        <ServicesMini />
      </main>
    </div>
  );
}

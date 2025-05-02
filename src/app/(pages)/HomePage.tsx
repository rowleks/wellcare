import About from "../components/about/About";
import Appointment from "../components/appointment/Appointment";
import MiniArticlesList from "../components/articles/MiniArticlesList";
import Cta from "../components/cta/Cta";
import MiniDocsList from "../components/doctors/MiniDocsList";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import Reviews from "../components/reviews/Reviews";
import HelpLineServices from "../components/services/HelpLineServices";
import MiniServicesList from "../components/services/MiniServicesList";

export default function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <MiniServicesList />
      <HelpLineServices />
      <Appointment />
      <MiniDocsList />
      <Cta />
      <Reviews />
      <Features />
      <MiniArticlesList />
    </>
  );
}

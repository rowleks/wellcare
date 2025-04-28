import About from "../components/about/About";
import Appointment from "../components/appointment/Appointment";
import ArticlesMini from "../components/articles/ArticlesMini";
import Cta from "../components/cta/Cta";
import Docs from "../components/doctors/Docs";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import Reviews from "../components/reviews/Reviews";
import HelpServices from "../components/services/HelpServices";
import MedServicesMini from "../components/services/MedServicesMini";

export default function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <MedServicesMini />
      <HelpServices />
      <Appointment />
      <Docs />
      <Cta />
      <Reviews />
      <Features />
      <ArticlesMini />
    </>
  );
}

import Story from "../components/about/Story";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import Cta from "../components/cta/Cta";
import Docs from "../components/doctors/MiniDocsList";
import Insights from "../components/about/Insights";
import Reviews from "../components/reviews/Reviews";
import AboutCta from "../components/cta/AboutCta";
import { HeroType, TitleType } from "../types/types";
import PageHero from "../components/hero/PageHero";
import PageTitle from "../components/page-titles/PageTitle";
import FaqSection from "../components/faq/FaqSection";

export default function AboutPage() {
  const header: TitleType = {
    title: "About WellCare",
    subtitle: "Over 15 Years of Experience",
  };

  const hero: HeroType = {
    imgUrl: "/about-hero.jpg",
    alt: "WellCare about hero",
  };
  return (
    <>
      <PageTitle {...header} />
      <section>
        <PageHero {...hero} />
        <Story />
      </section>
      <Mission />
      <Vision />
      <Cta />
      <Docs />
      <Insights />
      <Reviews />
      <FaqSection />
      <AboutCta />
    </>
  );
}

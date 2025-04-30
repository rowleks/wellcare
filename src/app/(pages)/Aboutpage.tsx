import PageHero, { HeroType } from "../components/hero/PageHero";
import PageTitle, { TitleType } from "../components/page-titles/PageTitle";
import Story from "../components/about/Story";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import Cta from "../components/cta/Cta";
import Docs from "../components/doctors/Docs";
import Insights from "../components/about/Insights";
import Reviews from "../components/reviews/Reviews";
import AboutCta from "../components/cta/AboutCta";

export default function Aboutpage() {
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
      <AboutCta />
    </>
  );
}

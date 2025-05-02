import Insights from "../components/about/Insights";
import MiniArticlesList from "../components/articles/MiniArticlesList";
import DocsList from "../components/doctors/DocsList";
import PageHero from "../components/hero/PageHero";
import PageTitle from "../components/page-titles/PageTitle";
import { HeroType, TitleType } from "../types/types";

export default function DoctorsPage() {
  const header: TitleType = {
    title: "Doctors",
    subtitle: "Our Dedicated Medical Professionals",
  };

  const hero: HeroType = {
    imgUrl: "/doctors-hero.jpg",
    alt: "WellCare doctor checking a patient",
  };
  return (
    <>
      <PageTitle {...header} />
      <section>
        <PageHero {...hero} />
      </section>
      <DocsList />
      <Insights />
      <MiniArticlesList />
    </>
  );
}

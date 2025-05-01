import Insights from "../components/about/Insights";
import ArticlesMini from "../components/articles/ArticlesMini";
import DocsList from "../components/doctors/DocsList";
import PageHero, { HeroType } from "../components/hero/PageHero";
import PageTitle, { TitleType } from "../components/page-titles/PageTitle";

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
      <ArticlesMini />
    </>
  );
}

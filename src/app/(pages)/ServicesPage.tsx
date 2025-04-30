import ServicesCta from "../components/cta/ServicesCta";
import PageHero, { HeroType } from "../components/hero/PageHero";
import PageTitle, { TitleType } from "../components/page-titles/PageTitle";
import Reviews from "../components/reviews/Reviews";
import ServicesList from "../components/services/ServicesList";

export default function ServicesPage() {
  const header: TitleType = {
    title: "Our Services",
    subtitle: "Uniting Seven Essential Services",
  };

  const hero: HeroType = {
    imgUrl: "/services-hero.jpg",
    alt: "WellCare services hero",
  };
  return (
    <>
      <PageTitle {...header} />
      <section>
        <PageHero {...hero} />
      </section>
      <ServicesList />
      <ServicesCta />
      <Reviews />
    </>
  );
}

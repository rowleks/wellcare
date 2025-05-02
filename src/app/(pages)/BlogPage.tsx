import BlogHero from "../components/hero/BlogHero";
import PageTitle from "../components/page-titles/PageTitle";
import { TitleType } from "../types/types";
import { articles } from "../lib/data";
import ArticlesList from "../components/articles/ArticlesList";
import AboutCta from "../components/cta/AboutCta";

export default function BlogPage() {
  const header: TitleType = {
    title: "Blogs",
    subtitle: "Exploring Wellness Insights",
  };
  return (
    <>
      <PageTitle {...header} />
      <BlogHero {...articles[0]} />
      <ArticlesList articles={articles.slice(1)} />
      <AboutCta />
    </>
  );
}

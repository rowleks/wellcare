import ButtonPrimary from "../buttons/ButtonPrimary";
import Heading from "../headings/Heading";
import ArticleCard, { ArticleType } from "./ArticleCard";

export default function ArticlesMini() {
  const headingContents = {
    title: "latest posts",
    subtitle: "articles",
  };

  const articles: ArticleType[] = [
    {
      image: "/article-1.jpg",
      title: "Integrating Mind, Body, and Soul for Optimal Health",
      date: "Aug 18, 2024",
      link: "#",
    },
    {
      image: "/article-2.jpg",
      title: "Pediatric Surgery Navigating Surgical Care for Children",
      date: "Aug 18, 2024",
      link: "#",
    },
    {
      image: "/article-3.jpg",
      title: "Innovations in Surgical Recovery Advances for Quicker Healing",
      date: "Aug 18, 2024",
      link: "#",
    },
  ];

  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-7 lg:gap-10">
          <div>
            <Heading contents={headingContents} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-lg:gap-y-10">
            {articles.map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          <div className="ml-auto text-sm">
            <ButtonPrimary content="view all blogs" />
          </div>
        </div>
      </div>
    </section>
  );
}

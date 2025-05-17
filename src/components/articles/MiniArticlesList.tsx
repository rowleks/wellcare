import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Heading from "@/components/headings/Heading";
import ArticleCard from "./ArticleCard";
import { articles } from "@/lib/data";

export default function MiniArticlesList() {
  const headingContents = {
    title: "latest posts",
    subtitle: "articles",
  };

  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-7 lg:gap-10">
          <div>
            <Heading contents={headingContents} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-lg:gap-y-10">
            {articles.slice(0, 3).map((article, index) => (
              <ArticleCard key={index} article={article} />
            ))}
          </div>

          <div className="ml-auto text-sm">
            <ButtonPrimary content="view all blogs" link="/blogs" />
          </div>
        </div>
      </div>
    </section>
  );
}

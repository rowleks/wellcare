import { ArticleType } from "@/app/types/types";
import ArticleCard from "./ArticleCard";

type ArticleProps = {
  articles: ArticleType[];
};

export default function ArticlesList({ articles }: ArticleProps) {
  return (
    <section>
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:max-lg:gap-y-10">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

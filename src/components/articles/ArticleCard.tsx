import Image from "next/image";
import Link from "next/link";
import ArrowBig from "@/components/buttons/ArrowBig";
import { ArticleType } from "@/types/types";

type ArticleProp = {
  article: ArticleType;
};

export default function ArticleCard({ article }: ArticleProp) {
  return (
    <Link href={article.link || "#"} className="flex flex-col gap-3 group">
      <div className="inline-block overflow-hidden rounded-sm">
        <Image
          src={article.image}
          alt={article.title}
          width={816}
          height={600}
          className="img-zoom w-full"
        />
      </div>
      <div className="flex items-center gap-2 text-dark-200 text-base">
        <Image src="/calendar.svg" alt="calender icon" width={20} height={24} />
        <small className="text-sm">{article.date}</small>
      </div>

      <div className="flex items-center justify-between gap-5">
        <h5>{article.title}</h5>
        <ArrowBig />
      </div>
    </Link>
  );
}

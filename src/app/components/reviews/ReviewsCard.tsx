import Image from "next/image";

export interface ReviewType {
  imageSrc: string;
  message: string;
  author: string;
}

type ReviewProps = {
  review: ReviewType;
};

export default function ReviewsCard({ review }: ReviewProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-7 md:gap-12 lg:gap-18 select-none">
      <div className="bg-secondary-100 md:max-w-2/5 lg:max-w-3/10 w-full h-auto flex-1">
        <Image
          src={review.imageSrc}
          alt={review.author}
          width={896}
          height={920}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-7 lg:gap-12 flex-1">
        <p className="text-dark-200 text-lg md:text-2xl lg:text-[1.625rem] font-light leading-relaxed cursor-grabbing">
          &#34;{review.message}&#34;
        </p>
        <p className="text-lg font-urbanist font-medium">- {review.author}</p>
      </div>
    </div>
  );
}

import Image from "next/image";

export interface HeroType {
  imgUrl: string;
  alt: string;
}

export default function PageHero({ imgUrl, alt }: HeroType) {
  return (
    <div id="page">
      <Image
        src={imgUrl}
        width={1440}
        height={700}
        alt={alt}
        className="object-cover w-full min-h-60 mb-10"
      />
    </div>
  );
}

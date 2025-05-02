import { ArticleType } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
import BtnSecondary2 from "../buttons/BtnSecondary2";

export default function BlogHero({
  title,
  image,
  heroImg,
  date,
  link,
}: ArticleType) {
  return (
    <section>
      <div id="page" className="relative">
        <Image
          src={heroImg || image}
          width={1440}
          height={700}
          alt={title}
          className="object-cover w-full min-h-60 mb-10"
        />

        <div className="absolute left-0 bottom-3 md:bottom-6 max-w-full md:max-w-3/5 lg:max-w-xl px-4">
          <Link href={link || "#"} className="group">
            <div className="flex flex-col gap-2 md:gap-5 bg-white p-3 md:p-7 lg:p-10 rounded-md">
              <div className="flex items-center gap-2 text-dark-200 text-base">
                <Image
                  src="/calendar.svg"
                  alt="calender icon"
                  width={20}
                  height={24}
                />
                <small className="text-sm">{date}</small>
              </div>
              <h4 className="font-light">{title}</h4>
              <div className="hidden md:block mt-3">
                <BtnSecondary2 content="Read More" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

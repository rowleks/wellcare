import { TitleType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

export default function PageTitle({ title, subtitle }: TitleType) {
  return (
    <div className="py-10 md:max-lg:pb-5 lg:pt-20 border-b-1 border-line-200">
      <div className="wrapper">
        <div className="flex flex-col gap-15">
          <h1>{title}</h1>
          <div className="hidden md:flex items-center justify-between">
            <Link
              href="#page"
              className="flex gap-2 items-center text-dark-200"
            >
              <small>Scroll to Explore</small>
              <Image
                src="/scroll-arrow.svg"
                alt="scroll arrow icon"
                width={18}
                height={18}
              />
            </Link>
            <small>{subtitle}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

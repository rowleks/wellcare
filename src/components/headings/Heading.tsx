import { HeadingType } from "@/types/types";
import Image from "next/image";

type HeadingProps = {
  contents: HeadingType;
};

export default function Heading({ contents }: HeadingProps) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Image
          src="/heartbeat.svg"
          alt="heartbeat icon"
          width={30}
          height={24}
        />
        <span className="text-sm text-dark-200 capitalize">
          {contents.subtitle}
        </span>
      </div>
      <h2 className="font-light mt-2 capitalize">{contents.title}</h2>
    </>
  );
}

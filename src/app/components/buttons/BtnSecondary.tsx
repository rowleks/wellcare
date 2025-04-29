import Link from "next/link";
import Arrow from "./Arrow";
type BtnProps = {
  content: string;
  link?: string;
};

export default function BtnSecondary({ content, link }: BtnProps) {
  return (
    <>
      <Link href={link || "#"} className="flex items-center gap-3 group">
        <small className="group-hover:text-dark-200 text-primary-200 text-sm font-semibold">
          {content}
        </small>
        <Arrow />
      </Link>
    </>
  );
}

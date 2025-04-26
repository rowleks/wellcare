import Link from "next/link";
type BtnProps = {
  content: string;
  link?: string;
};

export default function ButtonPrimary({ content, link }: BtnProps) {
  return (
    <>
      <Link href={link || "#"} className="btn-primary inline-block">
        <small className="text-sm">{content}</small>
      </Link>
    </>
  );
}

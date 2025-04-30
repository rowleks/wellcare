import Link from "next/link";
type BtnProps = {
  content: string;
  link?: string;
};

export default function ButtonPrimary2({ content, link }: BtnProps) {
  return (
    <>
      <Link
        href={link || "#"}
        className="btn-primary inline-block bg-transparent text-primary-200 hover:bg-primary-200 hover:text-secondary-100"
      >
        <small className="text-sm">{content}</small>
      </Link>
    </>
  );
}

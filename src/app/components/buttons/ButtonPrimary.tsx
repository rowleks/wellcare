import Link from "next/link";

export default function ButtonPrimary({ content }: { content: string }) {
  return (
    <>
      <Link href="#" className="btn-primary inline-block">
        {content}
      </Link>
    </>
  );
}

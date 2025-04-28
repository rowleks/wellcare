import Link from "next/link";

export interface LinkType {
  text: string;
  link?: string;
}

type LinksProps = {
  contents: LinkType[];
};

export default function FooterLinks({ contents }: LinksProps) {
  return (
    <div>
      <ul className="flex flex-col gap-4">
        {contents.map((content, index) => (
          <li key={index}>
            <Link
              href={content.link || "#"}
              className="hover:text-primary-100 transition duration-300 text-sm capitalize"
            >
              {content.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

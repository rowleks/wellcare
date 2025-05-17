import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface SocialLinkType {
  name: string;
  url: string;
  logo: string;
  width?: number;
  height?: number;
}

type SocialProps = {
  links: SocialLinkType[];
};

export default function Social({ links }: SocialProps) {
  return (
    <div className="flex items-center gap-3">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social w-10 h-10"
        >
          <Image
            src={link.logo}
            alt={`${link.name} logo`}
            width={link.width || 16}
            height={link.height || 16}
          />
        </Link>
      ))}
    </div>
  );
}

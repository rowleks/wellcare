import Image from "next/image";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Heading({ title, subtitle }: HeaderProps) {
  return (
    <>
      <div className="flex gap-2 items-center">
        <Image
          src="/heartbeat.svg"
          alt="heartbeat icon"
          width={30}
          height={24}
        />
        <span className="text-sm text-dark-200">{subtitle}</span>
      </div>
      <h2 className="font-light mt-2">{title}</h2>
    </>
  );
}

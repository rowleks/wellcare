import Image from "next/image";
import Link from "next/link";

interface ContactInfoProps {
  contactsInfo: {
    label: string;
    phone?: string;
    email?: string;
    icon: string;
    width?: number;
  };
}

export default function ContactInfo({ contactsInfo }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Image
        src={contactsInfo.icon}
        alt="phone logo"
        width={contactsInfo.width || 50}
        height={50}
        className="align-middle max-xs:w-10 max-xs:h-10"
      />
      <div className="flex flex-col gap-1.5">
        <h5 className="font-medium capitalize max-xs:text-base">
          {contactsInfo.label}
        </h5>

        {contactsInfo.phone && (
          <Link
            href={`tel:${contactsInfo.phone}`}
            className="text-dark-200 text-sm"
          >
            {contactsInfo.phone}
          </Link>
        )}
        {contactsInfo.email && (
          <Link
            href={`mailto:${contactsInfo.email}`}
            className="text-dark-200 text-sm"
          >
            {contactsInfo.email}
          </Link>
        )}
      </div>
    </div>
  );
}

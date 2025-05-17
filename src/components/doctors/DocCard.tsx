import Image from "next/image";
import Link from "next/link";
import { DocType } from "@/types/types";

type DoctorProp = {
  doctor: DocType;
};

export default function DocCard({ doctor }: DoctorProp) {
  return (
    <Link href={doctor.link} className="flex flex-col gap-3 group">
      <div className="inline-block overflow-hidden rounded-sm">
        <Image
          src={doctor.image}
          alt={`${doctor.name} icon`}
          width={500}
          height={567}
          className="img-zoom"
        />
      </div>
      <div className="flex items-center justify-between text-dark-200 text-base capitalize">
        <p>{doctor.name}</p>
        <small className="text-sm">{doctor.spec}</small>
      </div>
    </Link>
  );
}

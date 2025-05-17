import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import BtnSecondary2 from "@/components/buttons/BtnSecondary2";

export default function ServicesList() {
  return (
    <section>
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-7 lg:gap-15">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group hover:bg-secondary-100 transition duration-300 p-6 md:p-8 lg:p-12 outline-1 outline-line-100 rounded-md"
            >
              <div className="flex flex-col gap-5 md:gap-6 lg:gap-9">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={65}
                  height={65}
                />

                <div className="flex flex-col gap-4">
                  <h3>{service.title}</h3>
                  <p className="text-dark-200">{service.description}</p>
                </div>

                <BtnSecondary2 content="View Service" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { services } from "@/app/lib/data";
import { HeadingType } from "@/app/types/types";
import Heading from "../headings/Heading";

export default function MiniServicesList() {
  const headingContents: HeadingType = {
    title: "our medical services",
    subtitle: "what we do",
  };
  return (
    <section className="py-10 md:py-20 lg:py-30 border-y-1 border-line-100">
      <div className="wrapper">
        <div className="flex flex-col gap-7 lg:gap-12">
          <div>
            <Heading contents={headingContents} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-10 md:max-lg:gap-7 lg:gap-x-10">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="flex flex-col gap-5">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={55}
                  height={55}
                />

                <div className="flex flex-col gap-2.5">
                  <h5>{service.title}</h5>
                  <p className="text-dark-200">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="ml-auto">
            <ButtonPrimary content="view all" link="/services" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Heading, { HeadingType } from "../headings/Heading";
import ButtonPrimary from "../buttons/ButtonPrimary";

interface ServiceType {
  icon: string;
  title: string;
  description: string;
}

export default function MedServicesMini() {
  const services: ServiceType[] = [
    {
      icon: "/bone.svg",
      title: "Bone Marrow Transplant",
      description:
        "Discover renewed hope through our advanced bone marrow transplant procedures",
    },
    {
      icon: "/van.svg",
      title: "Emergency Care",
      description:
        "Rapid and reliable emergency care services to address your urgent health needs promptly and effectively.",
    },
    {
      icon: "/heart.svg",
      title: "Operation Theater",
      description:
        "Equipped with advanced technology, ensuring a safe and efficient environment for surgical procedures.",
    },
    {
      icon: "/pills.svg",
      title: "Pharmacy",
      description:
        "Pharmacy services offering a wide range of medications to support your health and wellness needs.",
    },
  ];

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
            {services.map((service, index) => (
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
            <ButtonPrimary content="view all" />
          </div>
        </div>
      </div>
    </section>
  );
}

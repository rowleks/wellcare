import Image from "next/image";
import Faq from "@/components/faq/Faq";
import { HeadingType } from "@/types/types";
import Heading from "@/components/headings/Heading";

export default function FaqSection() {
  const headingContents: HeadingType = {
    title: "Frequently Asked Questions",
    subtitle: "FAQ's",
  };
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-7 lg:gap-12">
          <div>
            <Heading contents={headingContents} />
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-20">
            <div className="flex-1">
              <Image
                src="/faq-img.jpg"
                alt="A patient booking an appointment"
                width={1216}
                height={1248}
                className="object-cover w-full"
              />
            </div>

            <div className="flex-1">
              <Faq />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

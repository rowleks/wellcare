import Image from "next/image";
import ButtonPrimary2 from "../buttons/ButtonPrimary2";

export default function ServicesCta() {
  return (
    <section>
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-10">
          <div className="bg-secondary-100 relative w-full py-10 px-5 md:py-16 md:pl-0 lg:pr-12 overflow-hidden">
            <div className="flex items-center">
              <Image
                src="/services-cta-1.png"
                alt="cta skilled doctor"
                width={339}
                height={335}
                className="hidden md:inline-block object-cover absolute lg:bottom-0 left-0 lg:max-xl:w-3xs max-lg:top-0"
              />
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col gap-6 lg:gap-10 md:max-w-[35%] lg:max-w-[2/5]">
                <h3>Consult with Our Skilled Doctors</h3>
                <div>
                  <ButtonPrimary2 content="Our Doctors" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary-100 relative w-full py-10 px-5 md:py-16 md:pl-0 lg:pr-12 overflow-hidden">
            <div className="flex items-center">
              <Image
                src="/services-cta-2.png"
                alt="cta health transformation"
                width={377}
                height={307}
                className="hidden md:inline absolute object-cover bottom-0 left-0 lg:max-xl:w-3xs"
              />
            </div>
            <div className="flex justify-end">
              <div className="flex flex-col gap-6 lg:gap-10 md:max-w-[35%] lg:max-w-[3/5] lg:max-xl:mr-6">
                <h3>Experience Health Transformation</h3>
                <div>
                  <ButtonPrimary2 content="Learn More" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

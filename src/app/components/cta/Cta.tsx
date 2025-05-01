import Image from "next/image";
import BtnSecondary from "../buttons/BtnSecondary";
import ButtonPrimary from "../buttons/ButtonPrimary";

export default function Cta() {
  return (
    <section className="bg-secondary-100">
      <div className="py-15 md:py-20 lg:py-25 max-w-[1336px] mx-auto relative">
        <div className="wrapper">
          <div className="flex items-center">
            <div className="grid gap-6 lg:max-w-1/2">
              <h1 className="font-light text-3xl md:text-[2.75rem]">
                Empower Your Health with us
              </h1>
              <p className="text-primary-200">
                Embark on a transformative journey towards improved well-being.
                Every step you take today shapes your healthier tomorrow.
              </p>
              <div className="flex items-center gap-5">
                <ButtonPrimary content="meet our doctors" link="/doctors" />
                <BtnSecondary content="Contact Us" />
              </div>
            </div>

            <Image
              src="/cta.png"
              alt="smiling doctor folding hands"
              width={346}
              height={389}
              className="hidden object-cover absolute bottom-0 lg:inline-block align-middle right-[8%] lg:max-xl:w-[450px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

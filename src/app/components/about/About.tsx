import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col-reverse md:flex-row gap-16 md:items-center">
          <div className="grid grid-cols-2 gap-7 flex-1">
            <div className="relative h-full w-full">
              <Image
                src="/wellness-img-1.jpg"
                alt="wellness doctor"
                width={592}
                height={870}
                className="rounded-sm object-cover mt-5 md:mt-8 lg:mt-16"
              />

              <div className="absolute left-0 bottom-6 w-full max-md:hidden">
                <div className="flex items-center gap-2 py-2 px-2.5 lg:px-[18px] lg:py-3 bg-white w-[85%] mx-auto text-dark-200 rounded-sm">
                  <Image
                    src="/ic-wellness.svg"
                    width={24}
                    height={24}
                    alt="checkmark icon"
                  />
                  <p className="text-sm lg:text-base">
                    Your Health, Our Priority
                  </p>
                </div>
              </div>
            </div>

            <Image
              src="/wellness-img-2.jpg"
              alt="wellness doctor"
              width={592}
              height={870}
              className="rounded-sm object-cover max-h-[432px]"
            />
          </div>
          <div className="flex flex-col gap-3 lg:gap-5 flex-1">
            <h2 className="font-light">Our Wellness Platform</h2>
            <p className="text-dark-200">
              We&#39;re a passionate team dedicated to guiding you towards a
              life of vitality and well-being. With a deep commitment to
              holistic health, we merge expert knowledge with a personalized
              approach to empower your journey.
            </p>

            <div className="flex items-center gap-6 text-dark-200">
              <div className="my-2">
                <p className="counter">184k+</p>
                <p className="text-sm lg:text-base">Happy Patient</p>
              </div>
              <div>
                <p className="counter">14+</p>
                <p className="text-sm lg:text-base">Years of Excellence</p>
              </div>
            </div>

            <Link href="#" className="btn-primary mt-3">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

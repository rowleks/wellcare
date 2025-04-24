import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-primary-100 mb-15 md:mb-20 lg:mb-25 relative">
      <div className="container w-full">
        <div className="sm:h-[30rem] lg:h-[44rem] flex flex-col xs:flex-row items-center overflow-hidden w-full justify-between">
          <div className="flex flex-col max-w-xl gap-7 xs:min-w-[26rem] max-xs:w-full pt-10">
            <h1 className="max-xs:text-center">
              WellCare Nurturing Health, Inspiring Life
            </h1>
            <p className="text-dark-200 xs:max-w-4/5 max-xs:text-center">
              Empowering wellness through comprehensive care. Discover the
              journey to vibrant health and an inspired life with wellcare
              health.
            </p>
            <Link href="#" className="btn-primary w-fit max-xs:self-center">
              Learn More
            </Link>
          </div>

          <div className="flex items-center h-full">
            <div className="pt-10 h-full">
              <Image
                src="/hero-image.png"
                alt="hero image"
                width={416}
                height={700}
                className="object-cover min-h-full lg:h-[700px] xs:min-w-[28rem] relative xs:max-[49rem]:right-34"
              />
            </div>
            <div className="max-[992px]:hidden flex flex-col gap-8">
              <div className="flex flex-col gap-1.5 bg-white p-7 rounded-sm">
                <p className="font-light text-4xl/tight">15+</p>
                <p>Years of Experience</p>
              </div>
              <div className="flex flex-col gap-1.5 bg-white p-7 rounded-sm">
                <p className="font-light text-4xl/tight">18+</p>
                <p>Operation Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center absolute py-5 px-6 border-1 border-white bg-[#ffffff0d] backdrop-blur-lg bottom-5 sm:left-2/5 lg:left-1/2 transform lg:translate-x-[-50%] left-5">
        <div className="flex items-center">
          <Image
            src="/avatar-1.jpg"
            alt="reviewer avatar"
            height={46}
            width={46}
            className="rounded-full relative border-1 border-white"
          />
          <Image
            src="/avatar-2.jpg"
            alt="reviewer avatar"
            height={46}
            width={46}
            className="rounded-full relative border-1 border-white z-2 right-2"
          />
          <Image
            src="/avatar-3.jpg"
            alt="reviewer avatar"
            height={46}
            width={46}
            className="rounded-full relative border-1 border-white z-4 right-4"
          />
        </div>
        <div className="flex flex-col gap-1 text-sm ml-1 font-medium">
          <span>150k+ Patient</span>
          <span>Recover</span>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import BtnSecondary from "../buttons/BtnSecondary";

export default function Mission() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-7 md:gap-10 lg:gap-14">
          <div className="flex-1">
            <Image
              src="/mission.jpg"
              alt="A doctor checking a patient"
              width={1080}
              height={941}
              className="object-cover w-full"
            />
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-light">Our Mission</h2>
            <div className="flex flex-col gap-4 text-dark-200">
              <p>
                At WellCare, our mission is centered around the belief that
                every individual deserves to lead a life of vitality and
                well-being. We are committed to being a catalyst for positive
                change in the realm of healthcare.
              </p>
              <p>
                Our commitment to excellence drives us to continually innovate
                and evolve our services that each patient receives personalized
                and compassionate care.
              </p>
            </div>
            <div className="mt-3 font-bold">
              <BtnSecondary content="Make an Appointment" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import BtnSecondary from "../buttons/BtnSecondary";

export default function Vision() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:items-center gap-7 md:gap-10 lg:gap-14">
          <div className="flex flex-col gap-4 flex-1">
            <h2 className="font-light">Our Vision</h2>
            <p className="text-dark-200">
              We envision a world where well-being is not just the absence of
              illness, but a state of thriving vitality. Our vision encompasses
              personalized care that respects individuality, embraces
              innovation, and prioritizes holistic wellness.
            </p>
            <ul className="flex flex-col gap-4 my-5 text-dark-200">
              <li className="list-img">Shaping Tomorrow&#39;s Health</li>
              <li className="list-img">Goals, Aspirations, and Progress</li>
              <li className="list-img">Setting Achievable Milestones</li>
              <li className="list-img">
                Transformation of Targets & Actionalble Steps
              </li>
            </ul>
            <div className="font-bold">
              <BtnSecondary content="Our Services" link="/services" />
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/vision.jpg"
              alt="A doctor checking a patient"
              width={1080}
              height={941}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

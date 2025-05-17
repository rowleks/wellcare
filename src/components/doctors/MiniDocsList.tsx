import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import Heading from "@/components/headings/Heading";
import { doctors } from "@/lib/data";
import DocCard from "./DocCard";

export default function MiniDocsList() {
  const headingContents = {
    title: "meet our doctors",
    subtitle: "doctors",
  };

  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-7 lg:gap-10">
          <div>
            <Heading contents={headingContents} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:max-lg:gap-y-10">
            {doctors.slice(0, 4).map((doctor, index) => (
              <DocCard key={index} doctor={doctor} />
            ))}
          </div>

          <div className="ml-auto text-sm">
            <ButtonPrimary content="view all doctors" link="/doctors" />
          </div>
        </div>
      </div>
    </section>
  );
}

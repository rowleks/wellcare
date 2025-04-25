import ButtonPrimary from "../buttons/ButtonPrimary";
import Heading from "../headings/Heading";
import DocCard, { DocType } from "./DocCard";

export default function Docs() {
  const headingContents = {
    title: "meet our doctors",
    subtitle: "doctors",
  };

  const doctors: DocType[] = [
    {
      image: "/guy.jpg",
      name: "guy hawkins",
      spec: "pediatrics",
      link: "#",
    },
    {
      image: "/jenny.jpg",
      name: "jenny wilson",
      spec: "psychiatry",
      link: "#",
    },
    {
      image: "/cooper.jpg",
      name: "jane cooper",
      spec: "cardiology",
      link: "#",
    },
    {
      image: "/courtney.jpg",
      name: "courtney henry",
      spec: "orthopedics",
      link: "#",
    },
  ];

  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-7 lg:gap-10">
          <div>
            <Heading contents={headingContents} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:max-lg:gap-y-10">
            {doctors.map((doctor, index) => (
              <DocCard key={index} doctor={doctor} />
            ))}
          </div>

          <div className="ml-auto text-sm">
            <ButtonPrimary content="view all doctors" />
          </div>
        </div>
      </div>
    </section>
  );
}

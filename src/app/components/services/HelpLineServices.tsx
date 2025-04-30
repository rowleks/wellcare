import Image from "next/image";
import ContactInfo, { ContactInfoType } from "../contact/ContactInfo";
import Heading, { HeadingType } from "../headings/Heading";

export default function HelpLineServices() {
  const headingContents: HeadingType = {
    title: "essential helpline services",
    subtitle: "emergency helpline",
  };

  const contactInfoContents1: ContactInfoType = {
    label: "helpline number",
    phone: "+234 91 5109 5848",
    icon: "/ic-phone.svg",
  };

  const contactInfoContents2: ContactInfoType = {
    label: "appointment",
    email: "momohrowland@gmail.com",
    icon: "/mail.svg",
  };
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row items-center gap-14">
          <div className="flex flex-col gap-4 flex-1">
            <div>
              <Heading contents={headingContents} />
            </div>
            <p className="text-dark-200">
              We understand that emergencies can happen unexpectedly. Put our
              emergency contact information in your reach and take comfort in
              knowing that you have a reliable ally by your side.
            </p>

            <div className="flex flex-col md:flex-row lg:items-center gap-6 xl:gap-12 mt-4">
              <ContactInfo contactsInfo={contactInfoContents1} />
              <ContactInfo contactsInfo={contactInfoContents2} />
            </div>
          </div>

          <div className="flex-1">
            <Image
              src="/helpline.jpg"
              alt="A nurse checking a patient"
              width={1240}
              height={1280}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

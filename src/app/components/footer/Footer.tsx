import Image from "next/image";
import Link from "next/link";
import ArrowFooter from "../buttons/ArrowFooter";
import FooterLinks, { LinkType } from "./FooterLinks";
import Social, { SocialLinkType } from "./Social";

export default function Footer() {
  const footerlinks1: LinkType[] = [
    {
      text: "about us",
      link: "/about",
    },
    {
      text: "services",
      link: "/services",
    },
    {
      text: "doctors",
      link: "#",
    },
    {
      text: "blogs",
      link: "#",
    },
    {
      text: "health plans",
      link: "#",
    },
  ];
  const footerlinks2: LinkType[] = [
    {
      text: "contact us",
      link: "#",
    },
    {
      text: "appointment",
      link: "#",
    },
    {
      text: "privacy policy",
      link: "#",
    },
    {
      text: "terms & conditions",
      link: "#",
    },
  ];

  const footerlinks3: LinkType[] = [
    {
      text: "style guide",
      link: "#",
    },
    {
      text: "licensing",
      link: "#",
    },
  ];

  const socialLinks: SocialLinkType[] = [
    {
      name: "x",
      url: "#",
      logo: "/x.svg",
    },
    {
      name: "facebook",
      url: "#",
      logo: "/fb.svg",
      width: 11,
      height: 17,
    },
    {
      name: "youtube",
      url: "#",
      logo: "/yt.svg",
    },
    {
      name: "instagram",
      url: "#",
      logo: "/insta.svg",
    },
  ];

  return (
    <footer className="text-secondary-100 bg-primary-200 pt-10 md:pt-20 lg:pt-25">
      <div className="wrapper">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 items-center">
            <div className="flex flex-col max-lg:items-center gap-8 max-w-96">
              <div className="flex flex-col gap-4 max-lg:items-center max-lg:text-center">
                <Image
                  src="/white-logo.svg"
                  width={166}
                  height={40}
                  alt="wellcare logo"
                  className="cursor-pointer"
                />
                <p>
                  Discover Expert Medical Care, Trusted Health Resources, and
                  Empowering Solutions at WellCare.
                </p>
              </div>

              <div className="flex justify-center items-center">
                <Link
                  href="#"
                  className="flex items-center gap-2 group max-lg:text-center max-lg:items-center w-full"
                >
                  <small className="group-hover:text-primary-100 transition duration-300 md:text-base">
                    Make Appointment
                  </small>
                  <ArrowFooter />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 md:gap-10 lg:gap-15">
              <FooterLinks contents={footerlinks1} />
              <FooterLinks contents={footerlinks2} />
              <FooterLinks contents={footerlinks3} />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 mt-3 md:mt-12">
            <div className="flex flex-col md:flex-row lg:items-center gap-6 md:gap-12 text-sm md:text-base max-xs:text-center">
              <div className="flex flex-col gap-1 md:max-w-3xs">
                <p>3891 Ranchview Dr. Richardson,</p>
                <p>California 62639</p>
              </div>
              <div className="flex flex-col gap-1 md:max-w-3xs">
                <Link href="tel:+2348038209794" className="footer-link">
                  +234 80 3820 9794
                </Link>
                <Link
                  href="mailto:momohrowland@gmail.com"
                  className="footer-link"
                >
                  momohrowland@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <span className="hidden lg:block">Follow us</span>
              <div>
                <Social links={socialLinks} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 mt-5 border-t-1 border-secondary-200">
        <div className="flex flex-col md:flex-row gap-2 items-center justify-between text-sm wrapper">
          <p>
            Design by{" "}
            <Link href="https://www.nixar.io" className="footer-link">
              Nixar.
            </Link>{" "}
            Developed by{" "}
            <Link
              href="https://rowland-momoh.netlify.app/"
              className="footer-link"
            >
              Rolex.
            </Link>
          </p>

          <p>Copyright &copy; 2025 WellCare. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import ArrowLeft from "../buttons/ArrowLeft";
import ArrowRight from "../buttons/ArrowRight";
import Heading from "../headings/Heading";
import ReviewsCard from "./ReviewsCard";

export default function Reviews() {
  const headingContents = {
    title: "patient experience",
    subtitle: "reviews",
  };
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-7 lg:gap-10">
          <div className="flex items-center justify-between">
            <div>
              <Heading contents={headingContents} />
            </div>
            <div className="hidden md:flex items-center gap-3">
              <Link href="#" className="group">
                <ArrowLeft />
              </Link>
              <Link href="#" className="group">
                <ArrowRight />
              </Link>
            </div>
          </div>
          <div>
            <ReviewsCard />
          </div>
        </div>
      </div>
    </section>
  );
}

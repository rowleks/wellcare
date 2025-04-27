"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ArrowLeft from "../buttons/ArrowLeft";
import ArrowRight from "../buttons/ArrowRight";
import Heading from "../headings/Heading";
import ReviewsCard, { ReviewType } from "./ReviewsCard";

const reviewsData: ReviewType[] = [
  {
    imageSrc: "/review-1.png",
    message:
      "I had an exceptional experience with WellCare. The expert doctors provided me with personalized care, and the friendly staff made me feel comfortable throughout. I'm truly grateful for their dedicated service!",
    author: "Wade Warren",
  },
  {
    imageSrc: "/review-2.png",
    message:
      "I'm truly grateful for the exceptional care I received at WellCare. The dedicated team went above and beyond to address my health concerns and guide me toward a better lifestyle.",
    author: "Leslie Alexander",
  },
  {
    imageSrc: "/review-3.png",
    message:
      "Choosing WellCare for my surgical procedure was the best decision I made. The level of professionalism and care I experienced from start to finish exceeded my expectations and coaches at WellCare are dedicated and knowledgeable.",
    author: "Bessie Cooper",
  },
];

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
              {/* Custom navigation buttons */}
              <div className="group swiper-button-prv cursor-pointer">
                <ArrowLeft />
              </div>
              <div className="group swiper-button-nxt cursor-pointer">
                <ArrowRight />
              </div>
            </div>
          </div>
          <div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                prevEl: ".swiper-button-prv",
                nextEl: ".swiper-button-nxt",
              }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
            >
              {reviewsData.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewsCard review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

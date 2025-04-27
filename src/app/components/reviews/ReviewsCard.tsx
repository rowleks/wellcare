import Image from "next/image";

export default function ReviewsCard() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-7 md:gap-12 lg:gap-18">
        <div className="bg-secondary-100 md:max-w-2/5 lg:max-w-3/10 w-full h-auto flex-1">
          <Image
            src="/review-1.png"
            alt="Wade Warren"
            width={896}
            height={920}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-7 lg:gap-12 flex-1">
          <p className="text-dark-200 text-lg md:text-2xl lg:text-[1.625rem] font-light leading-relaxed">
            &#34;I had an exceptional experience with WellCare. The expert
            doctors provided me with personalized care, and the friendly staff
            made me feel comfortable throughout. I&#39;m truly grateful for
            their dedicated service!&#34;
          </p>
          <p className="text-lg font-urbanist font-medium">- Wade Warren</p>
        </div>
      </div>
    </>
  );
}

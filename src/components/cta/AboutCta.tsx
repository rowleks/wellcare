import NewsLetterForm from "../form/NewsLetterForm";

export default function AboutCta() {
  return (
    <section className="py-15 md:py-20 lg:py-25 bg-secondary-100 relative mb-0">
      <div className="wrapper">
        <div className="flex flex-col md:flex-row gap-5 md:max-lg:gap-10 md:items-center md:justify-between">
          <div className="grid gap-6 lg:max-w-1/2">
            <h1 className="font-light text-3xl md:text-4xl lg:text-[2.75rem]">
              Stay Connected to Better Health
            </h1>
          </div>
          <div className="md:max-w-[56%] lg:max-w-[40%] flex flex-col gap-6 lg:gap-10">
            <p className="text-dark-200">
              Join our health revolution, where empowerment, innovation, and
              your well-being intersect.
            </p>
            <NewsLetterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

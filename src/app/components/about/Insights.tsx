import Heading from "../headings/Heading";

export default function Insights() {
  const headingContents = {
    title: "medical insights",
    subtitle: "factual overview",
  };
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col gap-7 lg:gap-10">
          <div>
            <Heading contents={headingContents} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-x-1 divide-line-100 border-1 border-line-100 max-xs:divide-y-1">
            <div className="py-10 md:py-20 lg:py-25">
              <div className="flex flex-col lg:flex-row lg:items-center gap-1.5 lg:gap-5 max-w-4/5 lg:max-w-3/5 mx-auto">
                <h1 className="font-light text-4xl md:text-5xl lg:text-6xl">
                  15+
                </h1>
                <small className="md:text-lg text-dark-200">
                  Years of Experience
                </small>
              </div>
            </div>

            <div className="py-10 md:py-20 lg:py-25  bg-primary-100">
              <div className="flex flex-col lg:flex-row lg:items-center gap-1.5 lg:gap-5 max-w-4/5 lg:max-w-3/5 mx-auto">
                <h1 className="font-light text-4xl md:text-5xl lg:text-6xl">
                  184k+
                </h1>
                <small className="md:text-lg text-dark-200">
                  Our Happy Patients
                </small>
              </div>
            </div>

            <div className="py-10 md:py-20 lg:py-25">
              <div className="flex flex-col lg:flex-row lg:items-center gap-1.5 lg:gap-5 max-w-4/5 lg:max-w-3/5 mx-auto">
                <h1 className="font-light text-4xl md:text-5xl lg:text-6xl">
                  86%
                </h1>
                <small className="md:text-lg text-dark-200">
                  Patient&#39;s Satisfaction
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

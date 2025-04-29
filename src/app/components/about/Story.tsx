export default function Story() {
  return (
    <>
      <div className="wrapper">
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-4">
          <h2 className="md:max-w-[35%] font-light">
            The Story From Inception to Impact
          </h2>
          <div className="flex flex-col gap-8 md:max-w-1/2 text-dark-200">
            <p>
              Embark on our compelling narrative that revolves around a profound
              passion for well-being, an unwavering dedication to healthcare
              excellence.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 items-center lg:max-w-[90%] justify-between gap-6 flex-wrap">
              <div className="flex flex-col gap-1.5">
                <p className="font-light leading-tight md:text-5xl text-4xl">
                  15+
                </p>
                <small className="md:text-base">Years of Experience</small>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-light leading-tight md:text-5xl text-4xl">
                  18+
                </p>
                <small className="md:text-base">Operation Specialist</small>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-light leading-tight md:text-5xl text-4xl">
                  86%
                </p>
                <small className="md:text-base">Patient Satisfaction</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

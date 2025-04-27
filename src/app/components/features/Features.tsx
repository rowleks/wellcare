import Image from "next/image";

export default function Features() {
  return (
    <section className="py-10 md:py-15 lg:py-20 border-y-1 border-line-100">
      <div className="wrapper">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/doc.svg" alt="doctor icon" width={50} height={50} />
            <div>
              <h5>Expert Doctors</h5>
              <small className="text-dark-200">
                Your health journey with expert.
              </small>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/heart.svg" alt="heart icon" width={50} height={50} />
            <div>
              <h5>Emergency Care</h5>
              <small className="text-dark-200">
                Proven Experts for Consultation.
              </small>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image src="/van.svg" alt="ambulance icon" width={50} height={50} />
            <div>
              <h5>Request Appointment</h5>
              <small className="text-dark-200">Schedule Your Visit</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

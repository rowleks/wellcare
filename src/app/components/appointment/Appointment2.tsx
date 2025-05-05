import Image from "next/image";
import BookingForm from "../form/BookingForm";

export default function Appointment2() {
  return (
    <section className="mt-10 md:mt-12 lg:mt-15">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:items-center gap-14">
          <div className="flex-1">
            <BookingForm />
          </div>

          <div className="flex-1">
            <Image
              src="/appointment3.jpg"
              alt="A patient booking an appointment"
              width={1080}
              height={1234}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

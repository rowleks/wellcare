import Image from "next/image";
import BookingForm from "../form/BookingForm";

export default function Appointment() {
  return (
    <section>
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row-reverse lg:items-center gap-14">
          <div className="flex-1">
            <BookingForm />
          </div>

          <div className="flex-1">
            <Image
              src="/appointment.jpg"
              alt="A patient booking an appointment"
              width={620}
              height={640}
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

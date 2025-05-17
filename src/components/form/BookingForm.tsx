import Form from "@/components/form/Form";

export default function BookingForm() {
  return (
    <>
      <div className="flex flex-col gap-6 md:max-lg:w-[80%] md:max-lg:mx-auto">
        <h2 className="font-light max-lg:text-center">
          Book your Appointment{" "}
        </h2>

        <Form />
      </div>
    </>
  );
}

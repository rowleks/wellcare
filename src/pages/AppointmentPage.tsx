import PageTitle from "@/components/page-titles/PageTitle";
import { TitleType } from "@/types/types";
import Appointment2 from "@/components/appointment/Appointment2";
import FaqSection from "@/components/faq/FaqSection";
import Reviews from "@/components/reviews/Reviews";

export default function AppointmentPage() {
  const header: TitleType = {
    title: "Appointment",
    subtitle: "Book an Appointment with Our Dedicated Medical Professionals",
  };
  return (
    <>
      <PageTitle {...header} />
      <Appointment2 />
      <FaqSection />
      <Reviews />
    </>
  );
}

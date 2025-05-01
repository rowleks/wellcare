import { doctors } from "@/app/lib/data";
import DocCard from "./DocCard";

export default function DocsList() {
  return (
    <section>
      <div className="wrapper">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-lg:gap-y-10">
          {doctors.map((doctor, index) => (
            <DocCard key={index} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function ServicesMini() {
  return (
    <section>
      <div>
        <div>
          <div className="">
            <div className="flex gap-2 items-center">
              <Image
                src="/heartbeat.svg"
                alt="heartbeat icon"
                width={30}
                height={24}
              />
              <span>What We Do</span>
            </div>
            <h2>Our Medical Services</h2>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  );
}

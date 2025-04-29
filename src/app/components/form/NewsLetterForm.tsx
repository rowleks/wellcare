import Image from "next/image";

export default function NewsLetterForm() {
  return (
    <form className="flex flex-col gap-3 text-sm text-dark-100 relative">
      <label className="flex items-center gap-1 bg-white rounded-full justify-between">
        <div className="flex items-center gap-1 w-full relative">
          <Image
            src="/mail.svg"
            alt="mail icon"
            width={24}
            height={24}
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className="w-full h-full px-0 py-5 rounded-full pl-12 outline-none text-dark-100"
          />
        </div>
      </label>
      <button className="btn-primary text-white py-4 hover:text-primary-200 md:absolute md:right-2 md:top-1/2 md:transform md:-translate-y-1/2 md:py-2.5 max-md:w-full">
        Subscribe
      </button>
    </form>
  );
}

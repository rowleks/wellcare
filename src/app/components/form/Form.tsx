export default function Form() {
  const now = new Date();

  const minDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    .toISOString()
    .slice(0, 16);

  const maxDate = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate())
    .toISOString()
    .slice(0, 16);

  return (
    <>
      <form
        action=""
        className="flex flex-col md:grid md:grid-cols-2 text-sm gap-x-5 gap-y-7 lg:gap-x-10"
      >
        <div className="flex flex-col gap-2">
          <span className="font-medium">Name</span>
          <label htmlFor="name" className="w-full">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
            />
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium">Email</span>
          <label htmlFor="email" className="w-full">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="xyz@gmail.com"
            />
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-medium">Phone</span>
          <label htmlFor="phone" className="w-full">
            <input
              type="tel"
              name="phone"
              id="phone"
              pattern="^(\+234|0)[789][01]\d{8}$"
              required
              placeholder="(+xxx) xxxx-xxx-xxxx"
            />
          </label>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="doa" className="w-full cursor-pointer">
            <span className="font-medium">Date</span>
            <input
              type="datetime-local"
              name="doa"
              id="doa"
              min={minDate}
              max={maxDate}
              required
              placeholder="DD / MM / YYYY"
              className="mt-1"
            />
          </label>
        </div>

        <div className="flex flex-col gap-2 col-span-2">
          <span className="font-medium">Message</span>
          <label htmlFor="message" className="w-full">
            <textarea
              name="message"
              id="message"
              rows={7}
              required
              placeholder="Enter message here"
            ></textarea>
          </label>
        </div>

        <div className="col-span-2 flex flex-end">
          <button className="ml-auto mt-2 btn-primary">Send Now</button>
        </div>
      </form>
    </>
  );
}

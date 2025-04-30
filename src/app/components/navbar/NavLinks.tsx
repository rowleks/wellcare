import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <ul className="flex flex-col lg:flex-row items-center gap-8 ">
        <li>
          <Link
            href="/about"
            className="hover:text-dark-200 transition duration-200"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="hover:text-dark-200 transition duration-200"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-dark-200 transition duration-200"
          >
            Doctors
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-dark-200 transition duration-200"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-dark-200 transition duration-200"
          >
            Health Plans
          </Link>
        </li>
      </ul>
    </>
  );
}

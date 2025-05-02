import Link from "next/link";

interface NavLinksProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function NavLinks({ setIsMobileMenuOpen }: NavLinksProps) {
  return (
    <ul className="flex flex-col lg:flex-row items-center gap-8">
      <li>
        <Link
          href="/about"
          className="hover:text-dark-200 transition duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          href="/services"
          className="hover:text-dark-200 transition duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/doctors"
          className="hover:text-dark-200 transition duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Doctors
        </Link>
      </li>
      <li>
        <Link
          href="/blogs"
          className="hover:text-dark-200 transition duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Blogs
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:text-dark-200 transition duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Health Plans
        </Link>
      </li>
    </ul>
  );
}

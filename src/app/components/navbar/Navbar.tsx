"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white py-4 text-sm relative z-50" ref={mobileMenuRef}>
      <div className="flex items-center justify-between px-5 wrapper">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          <Image
            src="/blue-logo.svg"
            alt="wellcare logo"
            width={166}
            height={40}
            className="cursor-pointer align-middle"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center ml-auto">
          <NavLinks />
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-8 ml-auto">
          <div className="flex items-center gap-2.5">
            <Image
              src="/ic-phone.svg"
              alt="phone logo"
              width={35}
              height={50}
              className="align-middle"
            />
            <div className="flex flex-col gap-1.5">
              <p className="font-medium">Emergency Call</p>
              <Link href="tel:+2348038209794" className="text-dark-200">
                +234 80 3820 9794
              </Link>
            </div>
          </div>
          <Link href="#" className="btn-primary">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <Image
          src="/hamburger.svg"
          alt="hamburger menu"
          width={32}
          height={32}
          className="lg:hidden cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        <div
          className={`mobile-nav ${
            isMobileMenuOpen
              ? "translate-y-18 opacity-100"
              : "pointer-events-none translate-y-[-10%] opacity-0"
          }`}
        >
          <NavLinks />
          <Link href="#" className="btn-primary w-full mb-6">
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}

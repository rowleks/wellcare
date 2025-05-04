"use client";

import { FaqType } from "@/app/types/types";
import { useState } from "react";

const faqData: FaqType[] = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a comprehensive range of services, including emergency care, diagnostic excellence, specialized treatments.",
  },
  {
    question: "Can I schedule appointments for specialized treatments?",
    answer:
      "Yes, we offer appointment scheduling for a wide range of specialized treatments tailored to your unique health needs.",
  },
  {
    question: "What is the focus of your wellness programs?",
    answer:
      "Our wellness programs are designed to promote overall well-being through personalized plans that encompass physical, mental, and emotional health.",
  },
  {
    question: "Are walk-ins accepted for emergency care services?",
    answer:
      "Yes, we do accept walk-ins for emergency care services. Your health and well-being are our top priorities, and our dedicated medical team is here to provide immediate attention and expert care in urgent situations.",
  },
  {
    question: "How can I contact customer support for assistance?",
    answer:
      "Contacting our medical professionals for advice is easy and convenient. You can reach out to us through our dedicated helpline, available 10 AM to 05 PM, where our experienced team is ready to provide guidance and address your health concerns.",
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <div>
        {faqData.map((faq, index) => (
          <div
            className="py-3 rounded-md cursor-pointer"
            key={index}
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center">
              <h6 className="max-w-4/5">{faq.question}</h6>
              <span className="text-3xl font-extralight">
                {openIndexes.includes(index) ? "-" : "+"}
              </span>
            </div>
            <div
              className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                openIndexes.includes(index) ? "max-h-44 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-dark-200 text-sm md:text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

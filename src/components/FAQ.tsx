"use client";

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es NocodeHackers?",
    answer:
      "NocodeHackers es una academia de formación en herramientas no-code y low-code en español. Ofrecemos cursos gratuitos y programas de formación para que puedas aprender a construir productos digitales sin necesidad de saber programar.",
  },
  {
    question: "¿Si no estoy satisfecho, me devolvéis el dinero?",
    answer:
      "Sí, ofrecemos garantía de devolución durante los primeros 14 días si no estás satisfecho con la formación.",
  },
  {
    question: "¿Cuándo hay programas?",
    answer:
      "Lanzamos programas de formación varias veces al año. Puedes consultar las próximas fechas en la sección de programas.",
  },
  {
    question: "¿Hay formación para empresas?",
    answer:
      "Sí, ofrecemos formaciones personalizadas para empresas. Contacta con nosotros para más información.",
  },
  {
    question: "¿Puedo bonificar por FUNDAE?",
    answer:
      "Sí, nuestras formaciones son bonificables a través de FUNDAE para empresas españolas.",
  },
  {
    question: "¿Me hacéis factura?",
    answer:
      "Sí, emitimos factura para todas nuestras formaciones de pago.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 lg:px-16 py-16 max-w-[1200px] mx-auto">
      {/* Header - centered */}
      <div className="text-center mb-10">
        <div className="bg-lime rounded-lg px-4 py-2 inline-block mb-3">
          <span className="text-xs text-black">Q&A</span>
        </div>
        <h2 className="text-[40px] md:text-[48px] leading-[1.1] tracking-[-1px] text-black font-normal">
          Nuestras preguntas frecuentes
        </h2>
      </div>

      {/* FAQ items */}
      <div className="flex flex-col gap-3 max-w-[800px] mx-auto">
        {faqs.map((faq, index) => (
          <button
            key={faq.question}
            className="flex items-center justify-between p-6 text-left w-full cursor-pointer bg-light-gray rounded-2xl"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="flex-1">
              <h3 className="text-[24px] leading-[24px] tracking-[-1px] text-black font-normal">
                {faq.question}
              </h3>
              {openIndex === index && (
                <p className="text-sm text-black/60 leading-5 mt-3 max-w-[600px]">
                  {faq.answer}
                </p>
              )}
            </div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className={`shrink-0 ml-4 transition-transform ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              <path
                d="M10 4V16M4 10H16"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        ))}
      </div>
    </section>
  );
}

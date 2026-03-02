"use client";

import { useRef, useState } from "react";

const people = [
  {
    name: "Carlos Calle",
    description:
      "Portero de balonmano y desarrollador No-code en el resto de su día. Carlos Calle es una persona inquieta que combina la pasión por el deporte con su pasión por construir cosas. Su experiencia técnica tanto en No-code como en Low-code le permite enfrentarse a retos que serían impensables hace años.",
    image:
      "https://framerusercontent.com/images/o4G2N4CDZfLp3RFD3n1zU6LxbA.jpg?width=908&height=1278",
    video:
      "https://framerusercontent.com/assets/EAbDHGCRCmdvJknXWFjzFaOmAfg.mp4",
    bgColor: "bg-lime",
  },
  {
    name: "Tracy Medina",
    description:
      "Desarrolladora No-code que descubrió la pasión por construir proyectos con No-code en el No-code Specialist. Ahora se dedica a trabajar con clientes freelance desde las Islas Canarias, teniendo una vida que le permite compaginar su trabajo y sus ambiciones personales.",
    image:
      "https://framerusercontent.com/images/42AIjwnk4GEdLcyUPnj6d8ZpA4.jpg?width=908&height=1278",
    video:
      "https://framerusercontent.com/assets/DAOBkaDjrusmSLEVKB7lTVzMnE.mp4",
    bgColor: "bg-nch-green",
  },
  {
    name: "Irene Cancela",
    description:
      "Perfil que viene del mundo del Producto y la UX/UI, que ha descubierto en el mundo del No-code una manera de poder llevar a cabo sus ideas sin tener que depender de programadores.",
    image:
      "https://framerusercontent.com/images/QqwR95LyD0Qn9H80En9zUWeTKM.jpg?width=908&height=1278",
    video:
      "https://framerusercontent.com/assets/XAosZojxWgCx9XQRscEVCW62U.mp4",
    bgColor: "bg-[#fce8ec]",
  },
];

function TestimonialCard({
  person,
}: {
  person: (typeof people)[number];
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full lg:w-1/3 cursor-pointer group">
      {/* Card image/video */}
      <div
        className={`h-[480px] rounded-3xl overflow-hidden relative ${person.bgColor}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Static image */}
        <img
          src={person.image}
          alt={person.name}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video (hidden until hover) */}
        <video
          ref={videoRef}
          src={person.video}
          muted
          loop
          playsInline
          preload="none"
          poster={person.image}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* "Conoce su historia" button - centered at bottom */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
          <span className="text-sm text-white bg-black rounded-full px-6 py-3">
            Conoce su historia
          </span>
        </div>
      </div>

      {/* Info */}
      <div>
        <h3 className="text-[22px] tracking-[-0.5px] text-black font-normal mb-2">
          {person.name}
        </h3>
        <p className="text-sm text-black/60 leading-5">
          {person.description}
        </p>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-cream px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] md:text-[48px] leading-[1.1] tracking-[-1px] text-black font-normal max-w-[600px] mb-10">
          Si siempre has tenido ideas y quieres convertirlas en realidad, el
          no-code está hecho para ti.
        </h2>

        <div className="flex flex-col lg:flex-row gap-5">
          {people.map((person) => (
            <TestimonialCard key={person.name} person={person} />
          ))}
        </div>
      </div>
    </section>
  );
}

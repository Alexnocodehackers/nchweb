import Link from "next/link";

export function JoinBanner() {
  return (
    <section className="mx-6 lg:mx-16 my-12 bg-cream rounded-3xl flex flex-col items-center justify-center py-20 lg:py-28 px-8 max-w-[1200px] lg:mx-auto">
      <h2 className="text-[48px] md:text-[64px] lg:text-[88px] leading-[0.98] tracking-[-5px] text-black text-center font-normal max-w-[700px] mb-8">
        Únete a más de 10.000 alumnos
      </h2>

      <div className="flex items-center gap-4 mb-10">
        <Link
          href="https://www.nocodehackers.es/cursos"
          className="bg-black text-white text-sm px-8 py-4 rounded"
        >
          Empieza a aprender
        </Link>
        <Link
          href="#programas"
          className="border border-black/20 text-black/60 text-sm px-8 py-4 rounded text-center"
        >
          Ver Programas
        </Link>
      </div>

      {/* Alumni faces - using the banner image */}
      <div className="flex items-center justify-center">
        <img
          src="https://framerusercontent.com/images/ZGR3GPQ7r9CFcFF6uh4xxL1c.png?width=2095&height=363"
          alt="Alumnos de NocodeHackers"
          className="h-[80px] lg:h-[120px] w-auto"
        />
      </div>
    </section>
  );
}

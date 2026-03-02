import Link from "next/link";

export function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-12 pb-8 px-6 max-w-[1200px] mx-auto">
      {/* Badge */}
      <div className="bg-pink-badge rounded-lg px-4 py-2 mb-4">
        <span className="text-xs text-black">Cursos de IA y NoCode en español</span>
      </div>

      {/* Title */}
      <h1 className="text-[48px] md:text-[64px] lg:text-[88px] leading-[0.98] tracking-[-5px] text-black max-w-[809px] font-normal mb-6">
        Impulsa tu carrera profesional y convierte tus ideas en productos
      </h1>

      {/* Subtitle */}
      <p className="text-sm leading-[1.42] text-black/60 max-w-[437px] mb-8">
        Te formamos para que aprendas cómo la Inteligencia Artificial y el
        NoCode te ayudarán a construir productos digitales sin necesidad de
        saber programar.
      </p>

      {/* CTAs */}
      <div className="flex items-center gap-4 mb-12">
        <Link
          href="https://www.nocodehackers.es/cursos"
          className="bg-black text-white text-sm px-8 py-4 rounded"
        >
          Empieza a aprender hoy
        </Link>
        <Link
          href="#programas"
          className="border border-black/20 text-black/60 text-sm px-8 py-4 rounded text-center"
        >
          Ver programas
        </Link>
      </div>

      {/* Hero image */}
      <div className="w-full max-w-[1100px] rounded-2xl overflow-hidden">
        <img
          src="https://framerusercontent.com/images/kSVLTX1yClEnXVjgig7B0yQy2Nk.png?width=1392&height=752"
          alt="Imagen de Alex Vaughtton, fundador de NocodeHackers"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}

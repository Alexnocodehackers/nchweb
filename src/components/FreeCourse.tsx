import Link from "next/link";

export function FreeCourse() {
  return (
    <section className="bg-light-blue px-6 lg:px-16 py-20 lg:py-28">
      <div className="flex flex-col lg:flex-row gap-10 items-start max-w-[1200px] mx-auto">
        {/* Left content */}
        <div className="flex-1 max-w-[500px]">
          <div className="bg-nch-blue rounded-lg px-4 py-2 inline-block mb-3">
            <span className="text-xs text-white">Curso Gratuito</span>
          </div>

          <h2 className="text-[32px] md:text-[48px] leading-[1.1] tracking-[-1px] text-black font-normal mb-5">
            Descubre el potencial de combinar la IA con el No-code con este
            curso de introdución 100% gratis
          </h2>

          <p className="text-sm text-black/60 leading-5 max-w-[449px] mb-6">
            Aprende cómo puedes construir aplicaciones, páginas webs y
            automatizar procesos, con tu asistente de Inteligencia Artificial
            todo sin necesidad de saber programar.
          </p>

          <Link
            href="https://www.nocodehackers.es/introduccion-al-no-code"
            className="inline-flex bg-black text-white text-sm px-8 py-4 rounded mb-6"
          >
            Empieza a aprender
          </Link>

          <div className="flex items-center gap-3 mt-3">
            <img
              src="https://framerusercontent.com/images/7Tjdzil1q4Mwbw1LYZbCoxQNg.png?width=198&height=100"
              alt="Alumnos de NocodeHackers"
              className="h-[30px] w-auto"
            />
            <p className="text-sm text-black/60">
              Más de 3000 alumnos han hecho este curso
            </p>
          </div>
        </div>

        {/* Right - Course preview image */}
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden shadow-[0px_4px_32px_rgba(0,0,0,0.15)]">
            <img
              src="https://framerusercontent.com/images/r2UXowkqhiLo3brvewjF7MVB6Mg.jpg?width=5789&height=3859"
              alt="Curso de introducción al No-code"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

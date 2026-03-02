export function VibeCoding() {
  const tickerText = "<html> es taaaaaaaaaaaaaaaaaaaaaaaaaaaaaan complicado";

  return (
    <section className="px-6 lg:px-16 py-16 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="bg-nch-orange rounded-lg px-4 py-2 inline-block mb-3">
          <span className="text-xs text-white">Cursos de Nocode en español</span>
        </div>
        <h2 className="text-[32px] md:text-[48px] leading-[1.1] tracking-[-1px] text-black font-normal">
          Nocode? Nah. Vibe coding.
        </h2>
      </div>

      {/* Cards row */}
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Card 1 - Dark with horizontal ticker */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="h-[360px] rounded-3xl bg-black flex items-center justify-center overflow-hidden relative">
            {/* Ticker with mask fade on edges */}
            <div
              className="absolute inset-0 flex items-center"
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
              }}
            >
              <div
                className="flex items-center whitespace-nowrap"
                style={{
                  animation: "marquee-left 12s linear infinite",
                }}
              >
                {[1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className="text-[32px] font-normal mx-8"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgb(255,255,255) 27%, rgba(255,255,255,0.45) 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {tickerText}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-sm text-black/60 leading-5 px-2">
            Construir páginas webs, aplicaciones o automatizar procesos puede
            parecer algo difícil y reservado a los programadores.
          </p>
        </div>

        {/* Card 2 - Green with images */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="h-[360px] rounded-3xl bg-nch-green flex items-center justify-center overflow-hidden px-4">
            <div className="flex items-center -space-x-2">
              <img
                src="https://framerusercontent.com/images/C1ysOcxBg4B968gOq2Z5Bv7Rp64.png?width=1280&height=1599"
                alt="Persona trabajando con post-its"
                className="w-[102px] h-[89px] object-cover rounded-[9px] shadow-lg -rotate-6"
              />
              <img
                src="https://framerusercontent.com/images/7A2aASSRXcCTnLxaNp8eoGv1kFc.png?width=1800&height=2400"
                alt="Persona trabajando en No-code"
                className="w-[111px] h-[145px] object-cover rounded-[4px] shadow-lg z-10"
              />
              <img
                src="https://framerusercontent.com/images/zgeXjd5fjQ9sNYd4jqTmJjmsUL4.png?width=636&height=828"
                alt="Persona sonriendo"
                className="w-[86px] h-[112px] object-cover rounded-[9px] shadow-lg rotate-6"
              />
            </div>
          </div>
          <p className="text-sm text-black/60 leading-5 px-2">
            Sin embargo déjame decirte que esto ya no es así. No necesitas pasar
            meses o años estudiando cómo programar u otras habilidades
            tecnológicas que pueden parecer imposibles para muchos de nosotros.
          </p>
        </div>

        {/* Card 3 - Purple with "De 0 a 100" gradient text */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          <div className="h-[360px] rounded-3xl bg-nch-purple flex items-center justify-center px-[63px]">
            <p
              className="text-[44px] leading-[1.1] tracking-[-1px] font-normal"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(255,255,255) 0%, rgba(0,0,0,0) 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              De 0 a 100
            </p>
          </div>
          <p className="text-sm text-black/60 leading-5 px-2">
            &ldquo;El NoCode funciona como la palanca que desbloquea tus
            limitaciones técnicas a la vez que la IA te ayuda a eliminar el
            folio en blanco. De 0 a 100 ya no es una utopía: solo necesitas una
            idea y la curiosidad de explorar&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

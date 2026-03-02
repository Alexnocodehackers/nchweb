import Link from "next/link";

const programs = [
  {
    date: "9 Febrero 2026",
    title: "Experto en desarrollo web",
    description:
      "Convierte tus diseños en páginas webs reales sin tener que aprender HTML o CSS. Disfruta creando como si estuvieras diseñando. Aprende las mejores prácticas de desarrollo y gestión de clientes.",
    instructors: [
      { name: "Alex Vaughtton", role: "NocodeHackers", img: "https://framerusercontent.com/images/t7QKhkNoBvoqXBwbwxDuYRK1MI4.png?width=165&height=164" },
      { name: "Carlos Gerónimo", role: "Framer Expert", img: "https://framerusercontent.com/images/t7QKhkNoBvoqXBwbwxDuYRK1MI4.png?width=165&height=164" },
    ],
    href: "/programas/experto-desarrollo-webs",
    dateBg: "bg-nch-orange",
  },
  {
    date: "23 Marzo 2026",
    title: "⭐️ No-code Specialist",
    description:
      "Forma parte de los primeros profesionales que aprovechen el No-code para construir productos digitales dentro de empresas. Aprende a detectar, definir y resolver problemas reales de las empresas más rápido gracias al No-code. Un programa de 1 año.",
    instructors: [
      { name: "Elena Madrigal", role: "Experta en Nocode", img: "" },
      { name: "Alex Vaughtton", role: "Fundador NocodeHackers", img: "" },
      { name: "Danny Saltaren", role: "Founder Modulor Ventures", img: "" },
    ],
    href: "#",
    dateBg: "bg-nch-orange",
  },
  {
    date: "Plazas abiertas",
    title: "Curso de VibeCoding",
    description:
      "En este curso vamos a entender cómo podemos potenciar el proceso de construir prototipos gracias a herramientas de IA como Lovable o Bolt. Sin tener conocimientos técnicos.",
    instructors: [
      { name: "Alex Vaughtton", role: "Founder NocodeHackers", img: "" },
      { name: "Celia Rozalén", role: "VibeCoder", img: "" },
      { name: "Sara Rivera", role: "Head of Design MS", img: "" },
    ],
    href: "/programas/vibe-coding",
    dateBg: "bg-nch-orange",
  },
  {
    date: "Próximamente",
    title: "Experto en automatizaciones con IA",
    description:
      "Automatiza e integra las operaciones de tu proyecto y ahorra miles de horas de trabajo gracias a herramientas como Make.",
    instructors: [
      { name: "Santi Alonso", role: "Experto Automatista", img: "" },
      { name: "Elías Silva", role: "Experto Automatista", img: "" },
      { name: "Celia Rozalén", role: "Automator", img: "" },
    ],
    href: "/programas/experto-automatizaciones",
    dateBg: "bg-nch-orange",
  },
  {
    date: "Próximamente",
    title: "Experto en desarrollo de Apps",
    description:
      "Empieza tu carrera como freelance creando apps completamente personalizadas como Airbnb sin código.",
    instructors: [{ name: "Adrià Solé", role: "Flutterflow Expert", img: "" }],
    href: "/programas/experto-desarrollo-apps",
    dateBg: "bg-nch-orange",
  },
  {
    date: "Próximamente",
    title: "Experto en operaciones con IA",
    description:
      "Aprende todo lo que necesitas saber de Airtable para construir herramientas profesionales que automaticen tus procesos internos y operativa en 8 semanas.",
    instructors: [{ name: "Luis Alfonso", role: "Airtable Specialist", img: "" }],
    href: "/programas/experto-operaciones",
    dateBg: "bg-nch-orange",
  },
];

export function Programs() {
  return (
    <section id="programas" className="bg-cream px-6 lg:px-16 py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto">
        {/* Header - centered */}
        <div className="text-center mb-10">
          <div className="bg-nch-orange rounded-lg px-4 py-2 inline-block mb-3">
            <span className="text-xs text-white">Nuestras formaciones</span>
          </div>
          <h2 className="text-[48px] md:text-[64px] lg:text-[88px] leading-[0.98] tracking-[-5px] text-black font-normal mb-4">
            Descubre nuestros programas
          </h2>
          <p className="text-sm text-black/60 leading-5 max-w-[500px] mx-auto">
            Escoge el programa que más se adapte a ti. Aprende en formaciones de
            6-8 semanas y en grupos reducidos de 20 personas.
          </p>
        </div>

        {/* Program cards - horizontal rows */}
        <div className="flex flex-col gap-5">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8"
            >
              {/* Date badge */}
              <div className="shrink-0">
                <span className={`${program.dateBg} text-white text-xs rounded-lg px-4 py-2 inline-block`}>
                  {program.date}
                </span>
              </div>

              {/* Title + description */}
              <div className="flex-1 min-w-0">
                <h3 className="text-[22px] tracking-[-0.5px] text-black font-normal mb-2">
                  {program.title}
                </h3>
                <p className="text-sm text-black/60 leading-5">
                  {program.description}
                </p>
              </div>

              {/* Instructors */}
              <div className="flex flex-col gap-3 shrink-0">
                {program.instructors.map((instructor) => (
                  <div key={instructor.name} className="flex items-center gap-3">
                    <div className="w-[44px] h-[44px] rounded-full bg-gray-200 shrink-0 overflow-hidden">
                      {instructor.img && (
                        <img src={instructor.img} alt={instructor.name} className="w-full h-full object-cover" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-black">{instructor.name}</p>
                      <p className="text-xs text-black/60">{instructor.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={program.href}
                className="bg-black text-white text-sm px-6 py-3 rounded text-center shrink-0"
              >
                Inscríbete
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

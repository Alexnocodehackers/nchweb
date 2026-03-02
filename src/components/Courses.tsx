import Link from "next/link";

const courses = [
  {
    title: "Aprende como la IA puede ayudarte a automatizar tu negocio",
    description:
      "Aprende a crear flujos automatizados que te permitan ahorra horas en tu negocio o proyecto, sin escribir ni una línea de código, usando ChatGPT, Make.com y Airtable",
    logoImg: "https://framerusercontent.com/images/8wgImHR9ZFKgQNVv3zmjruIi0.png?width=271&height=175",
    bgImg: "https://framerusercontent.com/images/9Gz9OVBBXPzUHhGICmrUYFBlg.png?width=538&height=247",
    bgColor: "bg-pink-badge",
  },
  {
    title: "Crea tu primera aplicación con Vibe Coding",
    description:
      "Aprende a construir una aplicación real, incluyendo autenticación, usuarios, backend y conexión con APIS sin que tengas que escribir una sola línea de código.",
    logoImg: "https://framerusercontent.com/images/EjVuGpDlTPe9Ff4tpF1cTivzsHM.png?width=175&height=174",
    bgImg: "https://framerusercontent.com/images/waLFDwDTxAyiGJK3FlgtmtiRM98.png?width=3004&height=1722",
    bgColor: "bg-black",
  },
  {
    title: "Aprende a construir páginas webs sin programar",
    description:
      "Sé capaz de pasar de idea a web en tiempo record con Framer. Descubre y aprende la mejor herramienta para crear webs espectaculares sin saber programar.",
    logoImg: "https://framerusercontent.com/images/CWqj3jMBaqQeHy6vobr98mfirmo.png?width=175&height=175",
    bgImg: "https://framerusercontent.com/images/mE4UZaHoMgoQf9BMSZQVu5nPKG0.jpg?width=2132&height=1220",
    bgColor: "bg-nch-blue",
  },
  {
    title: "Mejora las operaciones de tu empresa",
    description:
      "Aprende cómo usar Airtable, la herramienta más potente para construir desde bases de datos a auténticas aplicaciones en este curso en español.",
    logoImg: "https://framerusercontent.com/images/nlMiI0khTa1MilyendaP5l6sdA.png?width=175&height=175",
    bgImg: "https://framerusercontent.com/images/i0GUgVJMRR3svWXHxb6mp0SmGCI.png?width=1146&height=736",
    bgColor: "bg-nch-orange",
  },
];

export function Courses() {
  return (
    <section className="px-6 lg:px-16 py-16 max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="bg-nch-orange rounded-lg px-4 py-2 inline-block mb-3">
          <span className="text-xs text-white">Nuestros Cursos</span>
        </div>
        <h2 className="text-[32px] md:text-[48px] leading-[1.1] tracking-[-1px] text-black font-normal">
          Aprende con nuestros cursos completamente gratuitos
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        {courses.map((course) => (
          <Link
            key={course.title}
            href="#"
            className="flex flex-col group cursor-pointer"
          >
            {/* Image area */}
            <div
              className={`${course.bgColor} h-[340px] lg:h-[440px] rounded-3xl overflow-hidden relative flex items-center justify-center`}
            >
              {/* Background image - centered */}
              <img
                src={course.bgImg}
                alt=""
                className="w-[82%] h-auto object-contain relative z-0"
              />

              {/* Logo - bottom left */}
              <img
                src={course.logoImg}
                alt=""
                className="absolute bottom-0 left-0 w-[173px] h-[76px] object-contain z-10"
              />
            </div>

            {/* Content */}
            <div className="pt-4 pb-2">
              <h3 className="text-[24px] tracking-[-1px] leading-[1] text-black font-normal mb-1">
                {course.title}
              </h3>
              <p className="text-sm text-black/60 leading-5">
                {course.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA - centered */}
      <div className="flex justify-center">
        <Link
          href="/cursos"
          className="border border-black/20 text-black/60 text-sm px-8 py-4 rounded text-center"
        >
          Ver todos los cursos
        </Link>
      </div>
    </section>
  );
}

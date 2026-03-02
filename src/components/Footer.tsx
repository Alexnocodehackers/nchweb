import Link from "next/link";

const footerSections = [
  {
    title: "Modulor",
    links: [
      { label: "Modulor Studios", href: "https://www.modulor.ventures/es" },
      { label: "Mendesaltaren", href: "https://www.mendesaltaren.com/" },
      { label: "Minimum.run", href: "https://minimum.run" },
      { label: "Tailor Hub", href: "https://www.tailor-hub.com/" },
      { label: "Mito", href: "https://mito.films" },
    ],
  },
  {
    title: "Nosotros",
    links: [
      { label: "Sobre Nosotros", href: "https://www.nocodehackers.es/nosotros" },
      { label: "Contacto", href: "#" },
      { label: "Forma a tu equipo", href: "https://www.nocodehackers.es/empresas" },
      { label: "Creamos tu proyecto", href: "https://www.nocodehackers.es/solutions" },
    ],
  },
  {
    title: "Programas",
    links: [
      { label: "Prototipado con IA", href: "#" },
      { label: "Desarrollador Web", href: "#" },
      { label: "Desarrollador de Apps", href: "#" },
      { label: "Profesional en Automatizaciones", href: "#" },
      { label: "Profesional en Operaciones", href: "#" },
    ],
  },
  {
    title: "Productos",
    links: [
      { label: "Cursos", href: "https://www.nocodehackers.es/cursos" },
      { label: "Portfolio", href: "https://www.nocodehackers.es/portfolio" },
      { label: "Podcast", href: "https://anchor.fm/nocodehackers" },
      { label: "Blog", href: "https://www.nocodehackers.es/blog" },
      { label: "Directorio", href: "https://www.nocodehackers.es/herramientas-no-code" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Instagram", href: "https://instagram.com/nocodehackers" },
      { label: "Twitter", href: "https://twitter.com/nocodehackers" },
      { label: "Youtube", href: "https://www.youtube.com/channel/UCeTPJCAsGm6drfYt-FZu5VQ" },
      { label: "Linkedin", href: "https://www.linkedin.com/school/nocodehackers" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mx-6 lg:mx-16 mb-6 max-w-[1200px] lg:mx-auto">
      <div className="bg-lime rounded-3xl px-8 lg:px-12 py-12 lg:py-16">
        {/* Logo + tagline */}
        <div className="flex items-center gap-2 mb-2">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <rect width="10" height="10" rx="2" fill="black" />
            <rect x="14" width="10" height="10" rx="2" fill="black" />
            <rect y="14" width="10" height="10" rx="2" fill="black" />
            <rect x="14" y="14" width="10" height="10" rx="2" fill="black" />
          </svg>
        </div>
        <p className="text-sm text-black/60 mb-10">
          Academia de herramientas no-code y low-code
        </p>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-black mb-4">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-black/60 hover:text-black transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 max-w-[1200px] mx-auto w-full">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 bg-cream rounded-lg px-6 py-3 shrink-0"
        >
          <img
            src="https://framerusercontent.com/images/v505DPoQO1IkNDyjwWy5w2RzSI.png?width=800&height=119"
            alt="NocodeHackers"
            className="h-5 w-auto"
          />
        </Link>

        {/* Navigation - desktop only */}
        <nav className="hidden lg:flex items-center justify-between bg-cream rounded-lg px-6 py-3 flex-1 max-w-[700px] mx-3">
          <button className="flex items-center gap-1.5 text-sm text-black">
            Programas
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link href="/cursos" className="text-sm text-black">Cursos</Link>
          <button className="flex items-center gap-1.5 text-sm text-black">
            Empresas
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Link href="https://www.nocodehackers.es/herramientas-no-code" className="text-sm text-black">Herramientas</Link>
          <Link href="https://www.nocodehackers.es/nosotros" className="text-sm text-black">Sobre Nosotros</Link>
        </nav>

        {/* CTA - desktop */}
        <Link
          href="https://cursos.nocodehackers.es"
          className="hidden lg:flex items-center justify-center bg-black text-white text-sm rounded-lg px-6 py-3 shrink-0"
        >
          Iniciar Sesión
        </Link>

        {/* Hamburger - mobile */}
        <button className="lg:hidden flex items-center justify-center w-[48px] h-[48px] rounded-lg border border-black/10">
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <path d="M1 1H19M1 7H19M1 13H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}

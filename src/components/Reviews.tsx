const column1 = [
  {
    name: "Diego Rodríguez",
    avatar: "https://framerusercontent.com/images/tC9vYOVfkcG2jTsM2gyP7RyjvI.png?width=362&height=347",
    text: "Asistí al taller avanzado de Framer y tanto el profesor Carlos, que fue muy generoso en todos los sentidos, como la organización hicieron que fuese todo un reto como experiencia de aprendizaje y muy enriquecedora. Muy motivado y agradecido.",
  },
  {
    name: "Wilkin Daniel",
    avatar: "https://framerusercontent.com/images/MXMJNdOSJKE6NSrAyN1BMOVgSM.png?width=362&height=347",
    text: "Muy buen curso para aprender Framer, fue una experiencia muy gratificando dado que yo no sabia Framer. La comunidad es atenta , los profesores estan dispuestos a despajar cualquier duda. Gracias a este curso pude hacer mi portafolio y asi atraer mas cliente a mi cartera.",
  },
  {
    name: "Ana Montero",
    avatar: "https://framerusercontent.com/images/5O2QhB44aAwf4d9f3eU5REda59M.png?width=362&height=347",
    text: "Muy contenta con la metodología y la organización del workshop. Es un curso completo y práctico. Terminas con la sensación de poder enfrentarte a proyectos reales.",
  },
];

const column2 = [
  {
    name: "Jorge Cortizas",
    avatar: "https://framerusercontent.com/images/vH5ylk9IGBYBqO0eo9Jo7d1QZw.png?width=152&height=146",
    text: "Me ha abierto un mundo nuevo de posibilidades. Tenía muchas ideas en la cabeza, pero sentía que estaba limitado por no saber programar.",
  },
  {
    name: "Jor Balda",
    avatar: "https://framerusercontent.com/images/4aIXq0cVPE2wcn1LFg7fvhCrruY.png?width=362&height=347",
    text: "Definitivamente, recomiendo esta academia a cualquiera que quiera aprender Framer y dar un salto de calidad en su diseño web. ¡Gracias por esta gran experiencia!",
  },
  {
    name: "Rubén Triviño",
    avatar: "https://framerusercontent.com/images/n3zEJwWH7ngOCbCeGWZJyd6Jbc.png?width=362&height=347",
    text: "Sin duda, una buenísima decisión apuntarme a este Workshop sobre Automatizaciones. Ha hecho que me enamore de la herramienta al igual que me paso con Airtable en el anterior Workshop. La metodología basada en ejercicios prácticos y problemas reales hace que realmente aprendas y desarrolles tus capacidades y crees una mentalidad de automatista.",
  },
];

const column3 = [
  {
    name: "Eva Palacios",
    avatar: "https://framerusercontent.com/images/ZoxHKNfjvTzwXWePGOPtZQNQ.png?width=362&height=347",
    text: "Estoy muy satisfecha de haberme embarcado en esta formación y me siento motivada para empezar a construir productos digitales con Airtable. Dar las gracias al equipo de Nocode Hackers por el trabajo que hay detrás. Y a la persona que esté leyendo esta opinión y tenga dudas, le digo que; si tiene compromiso, y ganas de seguir el ritmo, que se anime porque no le va a decepcionar",
  },
  {
    name: "Fran Cano",
    avatar: "https://framerusercontent.com/images/X4TL9GEp95SqxFg8cL2Jc17SKo.png?width=362&height=347",
    text: "Gracias este curso, puedo decir que no-code es igual a no-limit. Esta comunidad tiene mucho desarrollo por delante y estoy seguro que será referentes en formación, desarrollo y soporte en los proyectos del futuro. Muy acertada su metodología y con Alex a la cabeza es éxito seguro.",
  },
  {
    name: "Jorge Cortizas",
    avatar: "https://framerusercontent.com/images/vH5ylk9IGBYBqO0eo9Jo7d1QZw.png?width=152&height=146",
    text: "Me ha abierto un mundo nuevo de posibilidades. Tenía muchas ideas en la cabeza, pero sentía que estaba limitado por no saber programar.",
  },
];

function ReviewCard({ name, avatar, text }: { name: string; avatar: string; text: string }) {
  return (
    <div className="bg-white rounded-3xl p-10 shrink-0 border border-black/5">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-[38px] h-[37px] object-cover shrink-0"
        />
        <p className="text-[24px] leading-[24px] text-black font-normal">{name}</p>
      </div>
      <p className="text-sm text-black/60 leading-5">{text}</p>
    </div>
  );
}

function MarqueeColumn({
  reviews,
  direction = "up",
  duration = "25s",
  className = "",
}: {
  reviews: { name: string; avatar: string; text: string }[];
  direction?: "up" | "down";
  duration?: string;
  className?: string;
}) {
  const items = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div className={`flex-1 overflow-hidden h-[600px] relative ${className}`}>
      <div
        className="flex flex-col gap-4"
        style={{
          animation: `marquee-${direction} ${duration} linear infinite`,
        }}
      >
        {items.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} name={review.name} avatar={review.avatar} text={review.text} />
        ))}
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="px-6 lg:px-16 py-16 max-w-[1200px] mx-auto">
      <h2 className="text-[32px] md:text-[48px] leading-[1.1] tracking-[-1px] text-black font-normal text-left md:text-center mb-10">
        Opiniones reales de alumnos reales
      </h2>

      <div className="flex gap-4">
        <MarqueeColumn reviews={column1} direction="up" duration="30s" />
        <MarqueeColumn reviews={column2} direction="down" duration="28s" className="hidden md:block" />
        <MarqueeColumn reviews={column3} direction="up" duration="32s" className="hidden lg:block" />
      </div>
    </section>
  );
}

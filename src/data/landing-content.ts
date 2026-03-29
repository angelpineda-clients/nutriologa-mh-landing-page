export type NavItem = {
  label: string;
  href: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type Service = {
  title: string;
  description: string;
  cta: string;
  href: string;
};

export type Testimonial = {
  quote: string;
};

export type Specialty = {
  label: string;
};

export type SocialItem = {
  label: string;
};

export const siteMeta = {
  title: "Monserrat Herrera | Nutrición clínica con enfoque humano",
  description:
    "Nutrición clínica con conexión humana para tu salud digestiva y metabólica."
};

export const navigation: NavItem[] = [
  { label: "Filosofía", href: "#filosofia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" }
];

export const hero = {
  brand: "Monserrat Herrera",
  eyebrow: "nutriCion con conexion",
  headline:
    "Nutrición clínica con enfoque humano para cuidar tu salud digestiva y metabólica.",
  paragraph:
    "Permiteme guiarte a conocer tu cuerpo de tal manera que logres nutrirlo física, mental y socialmente, desde la libertad y la compasión, y así cuidar de tu bienestar con un abordaje 100% integral y personal",
  primaryCta: {
    label: "Agendar",
    href: "#contacto"
  },
  secondaryCta: {
    label: "Conoce mi enfoque",
    href: "#filosofia"
  }
};

export const philosophy = {
  label: "nutriCion Gentil",
  title: "La salud sostenible empieza cuando tu alimentación se adapta a ti",
  paragraphs: [
    "Basada en escuchar e interpretar las señales internas de tu cuerpo; en lugar de seguir reglas rígidas o dietas restrictivas.",
    "Nuestro objetivo no es perseguir reglas perfectas, sino construir una relación más clara, amable y realista con tu alimentación, tu cuerpo y tu bienestar.",
    "Adoptarás conductas saludables de autocuidado sin necesidad de enfocar la atención en el peso."
  ],
  aside:
    "Cuando se alinean tu sentir, pensar y actuar, la nutrición deja de ser una obligación y se convierte en algo natural dentro"
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "A tu propio ritmo",
    description: "Cada paso que demos será respetuoso a tu bienestar integral."
  },
  {
    number: "02",
    title: "Con escucha activa",
    description:
      "Siente la seguridad que toda información nos guía en tu camino individual de la alimentación."
  },
  {
    number: "03",
    title: "Propositiva",
    description:
      "Adaptando las recomendaciones nutricionales según tus necesidades, entorno y acceso."
  },
  {
    number: "04",
    title: "Respetuosa a la diversidad",
    description:
      "Adaptando las recomendaciones nutricionales según tus necesidades, entorno y acceso."
  }
];

export const services: Service[] = [
  {
    title: "Consulta online",
    description:
      "Sesiones personalizadas para salud digestiva, metabólica y cambio de hábitos.",
    cta: "Agendar",
    href: "#contacto"
  },
  {
    title: "Charlas y talleres",
    description:
      "Espacios educativos para equipos, comunidades o grupos que buscan bienestar con información útil y cercana.",
    cta: "Quiero saber más",
    href: "#contacto"
  },
  {
    title: "Asesoría estudiantil",
    description:
      "Acompañamiento para estudiantes y profesionales en formación que quieren integrar una mirada más humana a la nutrición.",
    cta: "Quiero saber más",
    href: "#contacto"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "“Ahora voy con la mentalidad de hacer las cosas porque me amo, y no porque me odie y quiera cambiar algo malo. Agradezco mucho que estés en este proceso, te valoro mucho” - Ximena, 25"
  },
  {
    quote:
      "“A partir de las recomendaciones de Monse para ayudar en el tratamiento de síndrome de intestino irritable, me di cuenta de que mi alimentación podía ser mucho más variada, disfrutar de mi comida, y así sentirme bien” - Cointa, 79"
  }
];

export const specialties: Specialty[] = [
  { label: "Resistencia a la insulina" },
  { label: "Diabetes tipo 2" },
  { label: "Hipotiroidismo" },
  { label: "Alteraciones digestivas" },
  { label: "Hipertensión" },
  { label: "Alteraciones del colesterol" },
  { label: "Cambio de hábitos" },
  { label: "Otro*" }
];

export const closingCta = {
  title: "¿Comenzamos?",
  paragraph:
    "Nadie es más experto en tu historia de vida que tú mismo, por lo que mi propósito es ser una guía y acompañante en tu propio camino de salud",
  bullets: [
    "A tu propio ritmo",
    "Escucha activa",
    "Propositiva",
    "Respetando la diversidad"
  ],
  button: {
    label: "Iniciemos",
    href: "#footer"
  }
};

export const socialItems: SocialItem[] = [
  { label: "Instagram" },
  { label: "TikTok" },
  { label: "WhatsApp" }
];

export const footerLinks: NavItem[] = [
  { label: "Nutrición gentil", href: "#filosofia" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" }
];

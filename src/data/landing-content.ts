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
  icon: "videocam" | "groups" | "school";
  featured?: boolean;
};

export type Testimonial = {
  quote: string;
};

export type Specialty = {
  label: string;
};

export type SocialItem = {
  label: string;
  href: string;
  handle: string;
  ariaLabel: string;
  platform: "instagram" | "tiktok";
};

export const siteMeta = {
  title: "Monserrat Herrera | Nutrición clínica con enfoque humano",
  description:
    "Nutrición clínica con conexión humana para tu salud digestiva y metabólica."
};

export const whatsappConsultationCta = {
  href: "https://wa.me/5213310803142?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20las%20consultas."
};

export const floatingWhatsAppCta = {
  label: "WhatsApp",
  helper: "Agenda o resuelve tus dudas",
  ariaLabel: "Abrir WhatsApp para pedir información sobre las consultas",
  href: whatsappConsultationCta.href
};

export const navigation: NavItem[] = [
  { label: "Filosofía", href: "#filosofia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" }
];

export const hero = {
  brand: "Monserrat Herrera",
  eyebrow: "Nutrición con conexión",
  headline:
    "Nutrición clínica con enfoque humano para cuidar tu salud digestiva y metabólica",
  paragraph:
    "Permíteme guiarte para conocer tu cuerpo, de tal manera que logres nutrirlo física, mental y socialmente, desde la libertad y la compasión, y así cuidar tu bienestar con un abordaje 100% integral y personal.",
  primaryCta: {
    label: "Agendar",
    href: "#contacto"
  },
  secondaryCta: {
    label: "Escríbeme por WhatsApp",
    href: whatsappConsultationCta.href
  }
};

export const philosophy = {
  label: "Nutrición gentil",
  title: "La salud sostenible empieza cuando tu alimentación se adapta a ti",
  paragraphs: [
    "Se basa en escuchar e interpretar las señales internas de tu cuerpo, en lugar de seguir reglas rígidas o dietas restrictivas.",
    "Nuestro objetivo no es perseguir reglas perfectas, sino construir una relación más clara, amable y realista con tu alimentación, tu cuerpo y tu bienestar.",
    "Adoptarás conductas saludables de autocuidado sin necesidad de enfocar la atención en el peso."
  ],
  aside:
    "Cuando se alinean tu sentir, pensar y actuar, la nutrición deja de ser una obligación y se convierte en algo natural dentro de tu vida diaria."
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "A tu propio ritmo",
    description: "Cada paso que demos respetará tu bienestar integral."
  },
  {
    number: "02",
    title: "Con escucha activa",
    description:
      "Todo lo que compartas nos ayudará a comprender tu proceso y a acompañarte mejor."
  },
  {
    number: "03",
    title: "Propositiva",
    description:
      "Te ofreceré recomendaciones nutricionales adaptadas a tus necesidades, tu entorno y tu acceso."
  },
  {
    number: "04",
    title: "Respetuosa a la diversidad",
    description:
      "Tu proceso se construirá con respeto a tu historia, tu contexto y tu diversidad."
  }
];

export const processCta = {
  intro: "Si este acompañamiento se siente alineado contigo, demos el siguiente paso.",
  button: {
    label: "Agenda tu primera consulta",
    href: "#contacto"
  }
};

export const services: Service[] = [
  {
    title: "Consulta en línea",
    description:
      "Sesiones personalizadas para salud digestiva, metabólica y cambio de hábitos.",
    cta: "Agendar",
    href: "#contacto",
    icon: "videocam",
    featured: true
  },
  {
    title: "Charlas y talleres",
    description:
      "Espacios educativos para equipos, comunidades o grupos que buscan bienestar con información útil y cercana.",
    cta: "Quiero saber más",
    href: "https://wa.me/5213310803142?text=Hola%2C%20me%20podr%C3%ADa%20dar%20informaci%C3%B3n%20acerca%20de%20las%20charlas%20y%20talleres.",
    icon: "groups"
  },
  {
    title: "Asesoría estudiantil",
    description:
      "Acompañamiento para estudiantes y profesionales en formación que quieren integrar una mirada más humana a la nutrición.",
    cta: "Quiero saber más",
    href: "https://wa.me/5213310803142?text=Hola%2C%20me%20podr%C3%ADa%20dar%20informaci%C3%B3n%20sobre%20la%20asesor%C3%ADa%20estudiantil%2C%20por%20favor.",
    icon: "school"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "“Ahora voy con la mentalidad de hacer las cosas porque me amo, y no porque me odie y quiera cambiar algo malo. Agradezco mucho que estés en este proceso, te valoro mucho” - Ximena, 25"
  },
  {
    quote:
      "“A partir de las recomendaciones de Monse para apoyar mi tratamiento de síndrome de intestino irritable, me di cuenta de que mi alimentación podía ser mucho más variada, disfrutar mi comida y así sentirme bien” - Cointa, 79"
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
    "Nadie conoce tu historia de vida mejor que tú, por lo que mi propósito es ser una guía y acompañarte en tu propio camino de salud.",
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
  {
    label: "Instagram",
    href: "https://www.instagram.com/nutricionconconexion",
    handle: "@nutricionconconexion",
    ariaLabel: "Abrir Instagram de Nutrición con Conexión",
    platform: "instagram"
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@nutricionconconexion",
    handle: "@nutricionconconexion",
    ariaLabel: "Abrir TikTok de Nutrición con Conexión",
    platform: "tiktok"
  }
];

export const footerLinks: NavItem[] = [
  { label: "Nutrición gentil", href: "#filosofia" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Especialidades", href: "#especialidades" }
];

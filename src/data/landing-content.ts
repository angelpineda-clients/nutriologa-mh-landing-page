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
  author: string;
  age?: number;
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

export type CredentialsGalleryLabels = {
  gridLabel: string;
  openItemPrefix: string;
  dialogLabel: string;
  counterLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
  previewHint: string;
};

export type CredentialDocument = {
  title: string;
  image: string;
  alt: string;
  kind: "image" | "pdf";
  extension: string;
  note?: string;
};

const siteUrl = (import.meta.env.SITE_URL ?? "").replace(/\/$/, "");

const toAbsoluteUrl = (path: string) => {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  if (!siteUrl) {
    return undefined;
  }

  return new URL(path, siteUrl).toString();
};

const compactObject = <T extends Record<string, unknown>>(value: T): T =>
  Object.fromEntries(
    Object.entries(value).filter(([, entry]) => {
      if (entry === undefined || entry === null || entry === "") {
        return false;
      }

      if (Array.isArray(entry)) {
        return entry.length > 0;
      }

      return true;
    })
  ) as T;

export const siteMeta = {
  title: "Nutrición con conexión | Monserrat Herrera",
  description:
    "Consulta de nutrición clínica con enfoque humano para salud digestiva, metabólica y cambio de hábitos. Agenda en línea con Monserrat Herrera.",
  siteName: "Monserrat Herrera | Nutrición con conexión",
  locale: "es_MX",
  type: "website",
  image: "/images/og-share.webp",
  siteUrl
};

export const whatsappConsultationCta = {
  href: "https://wa.me/5213310803142?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20las%20consultas."
};

export const contactInfo = {
  telephone: "+52 33 1080 3142",
  telephoneHref: "tel:+523310803142",
  whatsappHref: whatsappConsultationCta.href,
  consultationMode: "Consulta en línea",
  areaServed: "México"
};

export const professionalProfile = {
  name: "Monserrat Herrera",
  jobTitle: "Nutrióloga clínica",
  description:
    "Nutrióloga clínica con enfoque humano para salud digestiva, salud metabólica y cambio de hábitos."
};

export const floatingWhatsAppCta = {
  label: "WhatsApp",
  helper: "Agenda o resuelve tus dudas",
  ariaLabel: "Abrir WhatsApp para pedir información sobre las consultas",
  href: whatsappConsultationCta.href
};

export const appointmentBookingHref = "/agendar";

export const navigation: NavItem[] = [
  { label: "Filosofía", href: "#filosofia" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" }
];

export const hero = {
  brand: "Monserrat Herrera",
  eyebrow: "Nutrición con conexión",
  headline:
    "Nutrición clínica con enfoque gentil para cuidar tu salud digestiva y metabólica",
  paragraph:
    "Permíteme guiarte para conocer tu cuerpo, de tal manera que logres nutrirlo física, mental y socialmente, desde la libertad y la compasión, y así cuidar tu bienestar con un abordaje 100% integral y personal.",
  primaryCta: {
    label: "Agendar",
    href: appointmentBookingHref
  },
  secondaryCta: {
    label: "Escríbeme por WhatsApp",
    href: whatsappConsultationCta.href
  }
};

export const philosophy = {
  label: "NUTRICIÓN GENTIL + DIVERSIDAD DE TALLAS + CONSCIENCIA SOCIAL",
  title: "La salud sostenible empieza cuando tu alimentación se adapta a ti",
  paragraphs: [
    "Se basa en escuchar e interpretar las señales internas de tu cuerpo, en lugar de seguir reglas rígidas o dietas restrictivas.",
    "Nuestro objetivo no es perseguir reglas perfectas, sino construir una relación más clara, amable y realista con tu alimentación, tu cuerpo y tu bienestar.",
    "Adoptarás conductas saludables de autocuidado sin necesidad de enfocar la atención en el peso."
  ],
  aside:
    "Nuestro objetivo no es perseguir reglas perfectas, sino construir una relación más amable, realista y sostenible con tu alimentación, tu cuerpo y tu bienestar"
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
    title: "Proposito",
    description:
      "Te ofreceré recomendaciones nutricionales adaptadas a tus necesidades, tu entorno y tu acceso."
  },
  {
    number: "04",
    title: "Respetuoso a la diversidad",
    description:
      "Construiremos tu mejor camino de autocuidado con respeto a tu historia y tu contexto individual"
  }
];

export const processCta = {
  intro: "Si este acompañamiento se siente alineado contigo, demos el siguiente paso.",
  button: {
    label: "Agenda tu primera consulta",
    href: appointmentBookingHref
  }
};

export const services: Service[] = [
  {
    title: "Consulta en línea",
    description:
      "Sesiones personalizadas para salud digestiva, metabólica y cambio de hábitos.",
    cta: "Agendar",
    href: appointmentBookingHref,
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
      "Ahora voy con la mentalidad de hacer las cosas porque me amo, y no porque me odie y quiera cambiar algo malo. Agradezco mucho que estés en este proceso, te valoro mucho.",
    author: "Ximena",
    age: 25
  },
  {
    quote:
      "A partir de las recomendaciones de Monse para apoyar mi tratamiento de síndrome de intestino irritable, me di cuenta de que mi alimentación podía ser mucho más variada, disfrutar mi comida y así sentirme bien.",
    author: "Cointa",
    age: 79
  },
  {
    quote:
      "Agradezco mucho las sesiones que tuve con Monse, fue una gran guía en mi cambio y mejora de hábitos.",
    author: "Elizabeth",
    age: 26
  },
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
    "Proposito",
    "Respetando la diversidad"
  ],
  button: {
    label: "Iniciemos",
    href: appointmentBookingHref
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

export const appointmentPage = {
  title: "Agenda tu consulta en línea",
  description:
    "Elige el horario que mejor se adapte a ti para tu consulta con Monserrat Herrera en Google Calendar.",
  label: "Calendario de citas",
  eyebrow: "Consulta en línea",
  intro:
    "Revisa la disponibilidad y reserva tu espacio directamente en el calendario. Si necesitas apoyo antes de agendar, también puedes escribir por WhatsApp.",
  calendarHeading: "Elige un horario",
  calendarIntro:
    "Después de confirmar tu cita, recibirás un correo con los pasos a seguir para tu consulta en línea.",
  calendarNote:
    "Si no aparece un horario útil para ti, escribe por WhatsApp.",
  calendarTitle: "Calendario para agendar consulta con Monserrat Herrera",
  calendarSrc:
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1124fnuHxCBZnslCj-WCOI4fle_fB9TYGZ83HmDdHXrdOTWFSEUSPKr6JZBRephu0TWjQX2egG?gv=true",
  primaryCta: {
    label: "Volver al inicio",
    href: "/"
  },
  secondaryCta: {
    label: "Escríbeme por WhatsApp",
    href: whatsappConsultationCta.href
  }
};

export const credentialsPage = {
  title: "Credenciales y respaldo profesional",
  description:
    "Bienvenida a un espacio donde puedes conocer el respaldo profesional de Monserrat Herrera y revisar sus credenciales en un solo lugar.",
  label: "Archivo profesional",
  eyebrow: "Bienvenida a este espacio de respaldo profesional",
  intro:
    "Aquí encontrarás una selección clara y ordenada de credenciales, constancias y documentos que respaldan mi formación y práctica profesional. La intención es que puedas recorrer este archivo con tranquilidad, conocer mejor mi trayectoria y revisar cada pieza con mayor detalle cuando lo necesites.",
  archiveHeading: "Lo que encontrarás aquí",
  archiveIntro:
    "Esta galería reúne los documentos que respaldan mi formación y práctica profesional. Puedes abrir cualquier pieza para verla en grande y navegar el archivo completo a tu ritmo.",
  portrait: {
    image: "/images/credentials/portrait.webp",
    alt: "Retrato de Monserrat Herrera para la página de credenciales"
  },
  primaryCta: {
    label: "Volver al inicio",
    href: "/"
  },
  secondaryCta: {
    label: "Escríbeme por WhatsApp",
    href: whatsappConsultationCta.href
  },
  galleryLabels: {
    gridLabel: "Galería de documentos de respaldo profesional",
    openItemPrefix: "Abrir vista ampliada de",
    dialogLabel: "Vista ampliada del documento",
    counterLabel: "Documento",
    closeLabel: "Cerrar vista ampliada",
    previousLabel: "Ver documento anterior",
    nextLabel: "Ver documento siguiente",
    previewHint: "Toca o da clic para ampliar"
  } satisfies CredentialsGalleryLabels
};

export const buildHomeStructuredData = () => {
  const canonicalUrl = toAbsoluteUrl("/");
  const imageUrl = toAbsoluteUrl(siteMeta.image);
  const knowledgeAreas = specialties
    .map((topic) => topic.label)
    .filter((label) => label !== "Otro*");
  const sameAs = socialItems.map((item) => item.href);

  const website = compactObject({
    "@type": "WebSite",
    "@id": canonicalUrl ? `${canonicalUrl}#website` : undefined,
    url: canonicalUrl,
    name: siteMeta.siteName,
    description: siteMeta.description,
    inLanguage: "es-MX"
  });

  const person = compactObject({
    "@type": "Person",
    "@id": canonicalUrl ? `${canonicalUrl}#person` : undefined,
    name: professionalProfile.name,
    jobTitle: professionalProfile.jobTitle,
    description: professionalProfile.description,
    telephone: contactInfo.telephone,
    url: canonicalUrl,
    image: imageUrl,
    sameAs,
    areaServed: contactInfo.areaServed,
    availableLanguage: ["es-MX"],
    knowsAbout: knowledgeAreas
  });

  const webpage = compactObject({
    "@type": "WebPage",
    "@id": canonicalUrl ? `${canonicalUrl}#webpage` : undefined,
    url: canonicalUrl,
    name: siteMeta.title,
    description: siteMeta.description,
    inLanguage: "es-MX",
    isPartOf: canonicalUrl ? { "@id": `${canonicalUrl}#website` } : undefined,
    about: canonicalUrl ? { "@id": `${canonicalUrl}#person` } : undefined,
    primaryImageOfPage: imageUrl ? { "@type": "ImageObject", url: imageUrl } : undefined
  });

  const offerCatalog = compactObject({
    "@type": "OfferCatalog",
    "@id": canonicalUrl ? `${canonicalUrl}#services` : undefined,
    name: "Servicios de nutrición",
    itemListElement: services.map((service) =>
      compactObject({
        "@type": "Offer",
        itemOffered: compactObject({
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: contactInfo.areaServed,
          availableChannel: compactObject({
            "@type": "ServiceChannel",
            serviceUrl: toAbsoluteUrl(service.href),
            availableLanguage: "es-MX"
          })
        })
      })
    )
  });

  return {
    "@context": "https://schema.org",
    "@graph": [website, webpage, person, offerCatalog]
  };
};

export const buildAppointmentStructuredData = () => {
  const canonicalUrl = toAbsoluteUrl(appointmentBookingHref);
  const imageUrl = toAbsoluteUrl(siteMeta.image);
  const homeUrl = toAbsoluteUrl("/");
  const sameAs = socialItems.map((item) => item.href);

  const website = compactObject({
    "@type": "WebSite",
    "@id": homeUrl ? `${homeUrl}#website` : undefined,
    url: homeUrl,
    name: siteMeta.siteName,
    description: siteMeta.description,
    inLanguage: "es-MX"
  });

  const person = compactObject({
    "@type": "Person",
    "@id": homeUrl ? `${homeUrl}#person` : undefined,
    name: professionalProfile.name,
    jobTitle: professionalProfile.jobTitle,
    description: professionalProfile.description,
    telephone: contactInfo.telephone,
    url: homeUrl,
    image: imageUrl,
    sameAs,
    areaServed: contactInfo.areaServed,
    availableLanguage: ["es-MX"]
  });

  const webpage = compactObject({
    "@type": "WebPage",
    "@id": canonicalUrl ? `${canonicalUrl}#webpage` : undefined,
    url: canonicalUrl,
    name: appointmentPage.title,
    description: appointmentPage.description,
    inLanguage: "es-MX",
    isPartOf: homeUrl ? { "@id": `${homeUrl}#website` } : undefined,
    about: homeUrl ? { "@id": `${homeUrl}#person` } : undefined,
    primaryImageOfPage: imageUrl ? { "@type": "ImageObject", url: imageUrl } : undefined
  });

  return {
    "@context": "https://schema.org",
    "@graph": [website, person, webpage]
  };
};

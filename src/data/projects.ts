export const courses = [
  "Triennio — Progettazione grafica e Comunicazione visiva",
  "Biennio — Comunicazione e Design per l’Editoria",
  "Biennio — Fotografia",
  "Biennio — Illustrazione",
] as const;

export type Course = (typeof courses)[number];

export const courseLabels: Record<Course, string> = {
  [courses[0]]: "Grafica e Comunicazione visiva",
  [courses[1]]: "Comunicazione e Design per l’Editoria",
  [courses[2]]: "Fotografia",
  [courses[3]]: "Illustrazione",
};

export type Project = {
  slug: string;
  title: string;
  student: string;
  teacher: string;
  year: number;
  course: Course;
  subject?: string;
  summary?: string;
  description: string;
  image: string;
  imageAlt: string;
  gallery?: string[];
};

const gallery = (slug: string, count: number) =>
  Array.from({ length: count }, (_, index) => `/images/${slug}/${String(index + 1).padStart(2, "0")}.jpg`);

export const projects: Project[] = [
  {
    slug: "tracing-gestures",
    title: "Tracing Gestures",
    student: "Alberto Guglielmi, Irina Ionasc, Teresa Pettini",
    teacher: "Elisa Pasqual",
    year: 2026,
    course: courses[1],
    subject: "Metodologia della progettazione",
    summary:
      "Un’installazione che rende visibile l’inquinamento digitale prodotto dal gesto dello scroll.",
    description:
      "Tracing Gestures è un’installazione che rende visibile questo inquinamento. Per ogni secondo trascorso a scrollare, una macchina rilasciava inchiostro in una vasca d’acqua.\n\nI visitatori hanno attraversato due sale: nella prima, venivano accolti da un manifesto interattivo dove il gesto dello scroll, compiuto davanti ad una webcam che riconosceva il movimento del dito, rendeva il testo progressivamente illeggibile. Nella seconda, ognuno poteva attivare la macchina in prima persona, utilizzando un telefono dedicato con TikTok aperto e stampando così una traccia concreta del proprio impatto. Alla fine, attraverso la tecnica giapponese del suminagashi, veniva realizzata una stampa unica che restituiva una traccia di quell’interazione.",
    image: "/images/tracing-gestures/01.jpg",
    imageAlt: "Installazione Tracing Gestures esposta in una sala bianca",
    gallery: gallery("tracing-gestures", 14),
  },
  {
    slug: "cake-as-book",
    title: "Cake as Book",
    student: "Marta Ricci, Luca Neri",
    teacher: "Silvia Sfligiotti",
    year: 2025,
    course: courses[1],
    subject: "Design per l’editoria",
    description:
      "Una ricerca editoriale che mette in relazione il libro, la materia e il rito della condivisione attraverso una serie di artefatti commestibili.",
    image: "/images/cake-as-book/01.jpg",
    imageAlt: "Libri commestibili disposti su un tavolo",
    gallery: gallery("cake-as-book", 10),
  },
  {
    slug: "leco-del-tempo",
    title: "L’eco del tempo",
    student: "Giulia Bianchi",
    teacher: "Francesco Jodice",
    year: 2025,
    course: courses[2],
    subject: "Fotografia documentaria",
    description:
      "Un progetto fotografico ed editoriale sulle tracce che il paesaggio costruito conserva, cancella e restituisce nel tempo.",
    image: "/images/leco-del-tempo/01.jpg",
    imageAlt: "Libro fotografico aperto su una pagina dedicata al paesaggio",
    gallery: gallery("leco-del-tempo", 14),
  },
  {
    slug: "only-two",
    title: "Only Two",
    student: "Alberto Guglielmi",
    teacher: "Michele Cera",
    year: 2025,
    course: courses[2],
    subject: "Progettazione fotografica",
    description:
      "Un racconto fotografico costruito attraverso coppie di immagini, distanze e ripetizioni che mettono in tensione persone e luoghi.",
    image: "/images/only-two/01.jpg",
    imageAlt: "Libro fotografico aperto su una doppia pagina",
    gallery: gallery("only-two", 11),
  },
  {
    slug: "margini",
    title: "Margini",
    student: "Sofia De Angelis",
    teacher: "Silvia Sfligiotti",
    year: 2024,
    course: courses[1],
    description:
      "Una rivista indipendente sulle culture periferiche, progettata come sequenza di voci, immagini e apparati critici.",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Libro aperto su un tavolo chiaro",
  },
  {
    slug: "luce-residua",
    title: "Luce residua",
    student: "Tommaso Guerra",
    teacher: "Francesco Jodice",
    year: 2025,
    course: courses[2],
    description:
      "Un’indagine notturna sui territori dell’Appennino e sulle tracce luminose lasciate dalle attività umane.",
    image:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Pagine e stampe disposte su un piano di lavoro",
  },
  {
    slug: "erbario-fantastico",
    title: "Erbario fantastico",
    student: "Anna Pagliardini",
    teacher: "Chiara Carrer",
    year: 2023,
    course: courses[3],
    description:
      "Tavole botaniche immaginarie nate dall’incontro tra osservazione scientifica, collage e narrazione breve.",
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Opere incorniciate esposte su una parete",
  },
  {
    slug: "forme-della-voce",
    title: "Forme della voce",
    student: "Lorenzo Vitali",
    teacher: "Daniele Ledda",
    year: 2022,
    course: courses[0],
    description:
      "Un’identità visiva generativa per un archivio orale, dove ritmo, intensità e pause diventano forme tipografiche.",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Mano che scrive su un quaderno aperto",
  },
];

export function getProjectGallery(project: Project) {
  return project.gallery ?? [project.image];
}

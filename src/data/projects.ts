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

export const isVideo = (src: string) => /\.(mp4|webm|ogg|mov|m4v)$/i.test(src);

export const splitNames = (value: string) => value.split(",").map((name) => name.trim()).filter(Boolean);

export const entitySlug = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const uniqueStudents = () => [...new Set(projects.flatMap((project) => splitNames(project.student)))];

export const uniqueTeachers = () => [...new Set(projects.flatMap((project) => splitNames(project.teacher)))];

export const uniqueSubjects = () => [...new Set(projects.flatMap((project) => project.subject ? [project.subject] : []))];

export const uniqueYears = () => [...new Set(projects.map((project) => project.year))].sort((a, b) => b - a);

export const projectsByStudent = (student: string) => projects.filter((project) => splitNames(project.student).includes(student));

export const projectsByTeacher = (teacher: string) => projects.filter((project) => splitNames(project.teacher).includes(teacher));

export const projectsByCourse = (course: Course) => projects.filter((project) => project.course === course);

export const projectsBySubject = (subject: string) => projects.filter((project) => project.subject === subject);

export const projectsByYear = (year: number) => projects.filter((project) => project.year === year);

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
      "48,49 kg di CO₂ all’anno. È quello che produce in media ogni utente di TikTok.\n\nTracing Gestures è un’installazione che rende visibile questo inquinamento. Per ogni secondo trascorso a scrollare, una macchina rilasciava inchiostro in una vasca d’acqua.\n\nI visitatori hanno attraversato due sale: nella prima, venivano accolti da un manifesto interattivo dove il gesto dello scroll, compiuto davanti ad una webcam che riconosceva il movimento del dito, rendeva il testo progressivamente illeggibile. Nella seconda, ognuno poteva attivare la macchina in prima persona, utilizzando un telefono dedicato con TikTok aperto e stampando così una traccia concreta del proprio impatto. Alla fine, attraverso la tecnica giapponese del suminagashi, veniva realizzata una stampa unica che restituiva una traccia di quell’interazione.",
    image: "/images/tracing-gestures/01.jpg",
    imageAlt: "Installazione Tracing Gestures esposta in una sala bianca",
    gallery: gallery("tracing-gestures", 14),
  },
  {
    slug: "cake-as-book",
    title: "Cake as Book as Artwork",
    student: "Lucia Franceschini, Alberto Pio Guglielmi",
    teacher: "Irene Bacchi, Leonardo Sonnoli",
    year: 2025,
    course: courses[1],
    subject: "Progettazione per l’Editoria",
    description:
      "Lunedì 24 febbraio, durante l’evento “Cake as book as artwork”, Lucia Franceschini e Alberto Guglielmi hanno celebrato otto libri d’artista che mostrano l’evoluzione del rapporto tra performance e medium fotografico, che da strumento di documentazione diviene spazio performativo.\n\nI libri d’artista presentati e raccontati da Lucia e Alberto, non sono stati sfogliati o letti, ma tagliati, serviti e mangiati. Una celebrazione in cui il libro d’artista è stato al centro di un’esperienza sensoriale totale, che si è dissolta nel momento stesso del suo consumo.",
    image: "/images/cake-as-book/01.jpg",
    imageAlt: "Libri commestibili disposti su un tavolo",
    gallery: gallery("cake-as-book", 10),
  },
  {
    slug: "leco-del-tempo",
    title: "L’eco del tempo",
    student: "Simone Cerchi, Francesco Fettucciari",
    teacher: "Elisa Pasqual",
    year: 2025,
    course: courses[1],
    subject: "Metodologia della progettazione",
    description:
      "L’eco del tempo è un’installazione e un ambiente sonoro responsivo dedicato alla memoria climatica dell’Osservatorio Serpieri di Urbino, fondato da Padre Alessandro Serpieri e attivo nella raccolta di dati dal 1850. Il progetto parte dall’osservazione di una disunione: ogni luogo conserva una storia fatta di medie, estremi, ricorrenze e anomalie, ma questa memoria resta fuori dal linguaggio quotidiano e dalla percezione condivisa. Attraverso suono, immagine, documenti e materiali editoriali, l’installazione riporta quella memoria nel presente e trasforma serie storiche e annotazioni in esperienza sensibile.\n\nLo spazio si articola in due ambienti. Il primo introduce il contesto attraverso un volume edito in occasione della mostra, materiali d’archivio e una lettera originale del 1850. Il secondo ospita una macchina sonora che traduce i dati dell’Osservatorio in variazioni musicali, eseguite in una performance ciclica. La performance prende la forma di una suite di 100 minuti, basata su una composizione originale e modulata dai dati meteo.\n\nL’attivazione e la performance hanno lo scopo di rendere di nuovo percepibile ciò che resta confinato nei registri e nei grafici: una memoria lunga e continua, che attraversa quasi due secoli e torna a essere qualcosa che si percepisce e ritorna nel discorso.\n\nPrima dell’inizio della performance ha avuto luogo una breve introduzione ai temi della climatologia e al lavoro dell’osservatorio Serpieri a cura del Prof. Umberto Giostra, direttore dell’Osservatorio e Professore associato a Uniurb di Fisica del clima e a cura di Piero Paolucci, osservatore e resposabile dell’Osservatorio dal 1990.",
    image: "/images/leco-del-tempo/01.jpg",
    imageAlt: "Libro fotografico aperto su una pagina dedicata al paesaggio",
    gallery: gallery("leco-del-tempo", 14),
  },
  {
    slug: "only-two",
    title: "(Only Two) Open Windows",
    student: "Alberto Guglielmi",
    teacher: "Paola De Pietri",
    year: 2025,
    course: courses[1],
    subject: "Progettazione grafica dell'immagine 2",
    description:
      "(Only Two) Open Windows osserva tre complessi residenziali sul mare tra Marotta e Senigallia, raccontando il rapporto tra architettura, paesaggio costiero e vita stagionale.\n\nAttraverso finestre aperte, balconi chiusi, superfici consumate e tracce quotidiane, il progetto indaga edifici pensati per abitare un margine instabile: quello tra interno ed esterno, presenza e assenza, privato e pubblico.",
    image: "/images/only-two/01.mp4",
    imageAlt: "Libro fotografico aperto su una doppia pagina",
    gallery: ["/images/only-two/01.mp4", ...gallery("only-two", 12).slice(1)],
  },
  {
    slug: "Back-to-the-real-life",
    title: "Back to the real life",
    student: "Elisa Marchesini",
    teacher: "Armin Linke, Luca Capuano",
    year: 2025,
    course: courses[2],
        subject: "Tesi magistrale in Fotografia",
    description:
      "“Back to the real life” è una ricerca visiva che esplora una nave da crociera come macchina da spettacolo. Attraverso l’analisi di scenografie, storie e spazi dietro le quinte, il progetto mette in luce come la nave crei un mondo parallelo e condiviso, dove la realtà quotidiana lascia spazio a un’esperienza collettiva e teatrale.",
    image:
      "/images/back-to-the-real-life/01.jpg",
    imageAlt: "Libro aperto su un tavolo chiaro",
    gallery: gallery("back-to-the-real-life", 6),

  },
  {
    slug: "prima-o-poi",
    title: "Prima o poi",
    student: "Valeria Cardea",
    teacher: "Pia Valentinis, Federica Alma Iacobelli",
    year: 2025,
    course: courses[3],
            subject: "Tesi magistrale in Illustrazione",
    description:
      "Il concetto di tempo è uno dei temi più affascinanti e complessi affrontati dalla filosofia e dalla scienza. Esso permea ogni aspetto della nostra esistenza, scandendo i ritmi della vita quotidiana e influenzando profondamente la nostra percezione del mondo.\n\nL'obiettivo della ricerca è quello di investigare le implicazioni di un tempo non ordinato, esaminando come ciò influenzerebbe la nostra percezione della realtà e la nostra comprensione dell’universo. L’intento è quello di fornire una comprensione teorica e una visione tangibile di un immaginario dove il prima e il poi si dissolvono in un flusso di eventi interconnessi.",
    image:
      "/images/prima-o-poi/01.jpg",
    imageAlt: "Pagine e stampe disposte su un piano di lavoro",
        gallery: gallery("prima-o-poi", 6),
  },
  {
    slug: "non-binary-society",
    title: "Non-binary society",
    student: "Samuele Cucuietu",
    teacher: "Jonathan Pierini, Matteo Guidi",
    year: 2024,
    course: courses[1],
    subject: "Tesi magistrale in Editoria",
    description:
      "“Non-binary society, Binary barriers” esplora le identità non binarie e le barriere culturali e sociali che le attraversano nella società contemporanea. Attraverso una tavola rotonda con studentesse e studenti della facoltà di Gender Studies dell’Università di Innsbruck, il progetto raccoglie esperienze, prospettive e sfide vissute.\n\nLa ricerca riflette sul linguaggio e sulla rappresentazione, evidenziandone il potenziale trasformativo nella costruzione di spazi più inclusivi, e affronta le intersezioni tra identità, cultura e linguaggio in un’ottica intersezionale.",
    image:
      "/images/non-binary-society/01.jpg",
    imageAlt: "Opere incorniciate esposte su una parete",
            gallery: gallery("non-binary-society", 7),
  },
  {
    slug: "territorio-e-transizione",
    title: "Territorio e transizione",
    student: "Nina Pambianco, Leonardo Metz",
    teacher: "Nicola Chemotti Beutel",
    year: 2026,
    course: courses[0],
    subject: "Grafica editoriale",
    description:
      "Il progetto editoriale mira a sottolineare la trasformazione del territorio dell’Alta Tuscia, attraverso un’immaginario che faccia emergere la frammentazione e la perdita delle origini di questi luoghi.\n\nPaesaggio Residuo è un progetto di ricerca a cura di Leonardo Metz che esplora la decostruzione dell’inquinamento acustico legato alle energie rinnovabili, come la transizione energetica ridisegni non solo l’ambiente, ma anche l’identità sociale della vita provinciale e la memoria dei luoghi.",
    image:
      "/images/territorio-e-transizione/01.mp4",
    imageAlt: "Mano che scrive su un quaderno aperto",
     gallery: ["/images/territorio-e-transizione/01.mp4", ...gallery("territorio-e-transizione", 7).slice(1)],
  },
];

export function getProjectGallery(project: Project) {
  return project.gallery ?? [project.image];
}

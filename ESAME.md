# Traccia per l'esame

## 1. Parte tecnica

### Repository GitHub

Il progetto e sviluppato come sito statico Astro. La struttura separa dati, componenti e pagine:

- i dati dei progetti sono in `src/data/projects.ts`;
- le schede progetto sono generate da `ProjectCard.astro`;
- la homepage gestisce filtri e ricerca;
- le pagine dettaglio sono generate dinamicamente da `src/pages/projects/[slug].astro`;
- lo stile globale e responsive e in `src/styles/global.css`.

Il codice e commentato nei punti meno immediati: ricerca senza accenti, gestione unica della visibilita dei progetti e animazione del titolo lungo il perimetro della pagina.

### Sito funzionante

Il sito puo essere avviato localmente con:

```bash
npm run dev
```

Per il deploy:

```bash
npm run build
```

La cartella da pubblicare e `dist`.

Su Netlify o Vercel:

- Build command: `npm run build`
- Publish directory: `dist`

## 2. Parte teorica

### Spiegazione del progetto

ISIA Urbino Editorial Projects e un archivio digitale pensato per presentare e valorizzare progetti realizzati dagli studenti di ISIA Urbino, con particolare attenzione a editoria, fotografia, illustrazione e progettazione grafica.

L'obiettivo non e creare un portfolio personale, ma una piattaforma consultabile e ordinata, capace di far emergere il lavoro degli studenti attraverso immagini, metadati e percorsi di navigazione. Ogni progetto ha una scheda sintetica nella homepage e una pagina di dettaglio con descrizione, informazioni didattiche e galleria.

Il sito lavora come archivio: deve essere leggibile oggi con pochi progetti, ma anche restare chiaro se i contenuti aumentano nel tempo.

### Target utenti

- Studenti attuali e futuri interessati ai corsi ISIA Urbino.
- Docenti e coordinatori che vogliono mostrare i risultati dei corsi.
- Professionisti della grafica, dell'editoria, della fotografia e dell'illustrazione.
- Curatori, editori e istituzioni culturali che cercano progetti emergenti.
- Visitatori esterni che vogliono capire il tipo di ricerca progettuale prodotto dalla scuola.

### Competitor e riferimenti

Non ci sono solo competitor commerciali diretti: il progetto si confronta soprattutto con piattaforme e archivi di scuole, portfolio e showcase creativi.

- Behance: molto diffuso, ma generico e poco istituzionale.
- Cargo: adatto a portfolio visivi, ma meno orientato ad archivio didattico.
- Are.na: forte come raccolta e ricerca visiva, ma meno adatto a presentare progetti conclusi.
- Siti di scuole come ECAL, RCA, Politecnico di Milano o Rhode Island School of Design: riferimenti per presentare la produzione degli studenti.
- Archivi editoriali e festival di graphic design: riferimenti per il tono visivo e la centralita delle immagini.

La differenza principale e che questo sito non mette al centro l'autore singolo o il social network, ma il progetto come esito didattico, con contesto, corso, docente e anno.

### Scelte visive

La direzione visiva e minimale, editoriale e istituzionale. Il sito usa una palette quasi completamente bianca e nera:

- bianco come fondo, per lasciare spazio ai progetti;
- nero per testo, menu e stati attivi;
- grigi neutri solo per elementi secondari o placeholder.

La tipografia usa Halyard Display, scelta per un carattere contemporaneo, asciutto e vicino al linguaggio della grafica editoriale. La gerarchia non nasce da decorazioni o colori, ma da dimensioni, spaziatura, allineamento e ritmo.

Le immagini sono centrali: le card hanno formato regolare e usano `object-fit: cover`, mentre le pagine dettaglio mostrano una sequenza verticale piu calma e leggibile.

Sono stati evitati effetti decorativi come ombre, gradienti, dark mode, card arrotondate e animazioni eccessive. L'unico gesto animato rilevante e il titolo iniziale, che trasforma il nome del progetto in un elemento grafico perimetrale senza coprire i contenuti.

### Accessibilita e usabilita

Il progetto usa HTML semantico, testi alternativi per le immagini, stati attivi chiari, focus visibile da tastiera e una modalita responsive per mobile. La ricerca normalizza gli accenti, quindi parole come "editoria" possono essere trovate in modo piu naturale.

## Frase di chiusura

Il progetto vuole comportarsi come un archivio editoriale: sobrio, consultabile e scalabile. La parte visiva non compete con i lavori degli studenti, ma costruisce un sistema ordinato per leggerli, filtrarli e presentarli.

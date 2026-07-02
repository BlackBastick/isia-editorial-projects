# ISIA Urbino Editorial Projects

Archivio web per raccogliere e presentare progetti editoriali, fotografici e illustrativi realizzati da studenti ISIA Urbino.

Il sito funziona come showcase indipendente: la navigazione privilegia immagini grandi, metadati chiari e filtri rapidi per corso, anno, docente, studente e tipologia di progetto.

## Tecnologie

- Astro
- TypeScript
- CSS custom properties
- HTML semantico

## Funzionalita

- Homepage con griglia responsive dei progetti.
- Schede progetto con immagine/video, titolo, studenti, docenti, anno, indirizzo e descrizione.
- Ricerca per titolo, tag, corso, materia, docente e descrizione.
- Pagine archivio per corso, insegnamento, docente, studente e anno.
- Pagine dettaglio con metadati e galleria immagini.
- Supporto responsive per desktop, tablet e mobile.

## Struttura principale

- `src/data/projects.ts`: dati dei progetti, corsi, tag di ricerca e funzioni di filtro.
- `src/pages/index.astro`: homepage, filtri principali e ricerca.
- `src/pages/projects/[slug].astro`: pagine dettaglio dei singoli progetti.
- `src/components/ProjectCard.astro`: scheda riutilizzabile del progetto.
- `src/components/SiteHeader.astro`: intestazione, menu e animazione iniziale.
- `src/styles/global.css`: sistema visivo, layout e responsive.

## Comandi

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deploy

Configurazione consigliata per Netlify o Vercel:

- Build command: `npm run build`
- Publish directory: `dist`

Il progetto genera un sito statico, quindi puo essere pubblicato anche su GitHub Pages caricando il contenuto della cartella `dist`.

## Note sul codice

Il codice e organizzato in componenti riutilizzabili e in un file dati centrale. I commenti sono presenti solo nelle parti meno immediate: ricerca normalizzata, visibilita dei progetti e animazione del titolo.

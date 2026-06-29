import {
  courses,
  entitySlug,
  projects,
  uniqueStudents,
  uniqueSubjects,
  uniqueTeachers,
  uniqueYears,
} from "../data/projects";

const siteUrl = "https://isiaueditorialprojects.netlify.app";

const staticPaths = ["/", "/tesi-triennale/", "/tesi-magistrale/", "/workshop/"];
const paths = [
  ...staticPaths,
  ...projects.map((project) => `/projects/${project.slug}/`),
  ...courses.map((course) => `/corsi/${entitySlug(course)}/`),
  ...uniqueYears().map((year) => `/anni/${year}/`),
  ...uniqueStudents().map((student) => `/studenti/${entitySlug(student)}/`),
  ...uniqueTeachers().map((teacher) => `/docenti/${entitySlug(teacher)}/`),
  ...uniqueSubjects().map((subject) => `/insegnamenti/${entitySlug(subject)}/`),
];

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => `  <url>
    <loc>${escapeXml(new URL(path, siteUrl).href)}</loc>
  </url>`)
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

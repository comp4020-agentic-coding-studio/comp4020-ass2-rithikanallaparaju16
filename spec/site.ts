/**
 * Shared readers for the spec suite.
 *
 * The checks assert against the built site rather than the source, because
 * what a student meets is the rendered page. A rule that holds in the
 * markdown but gets dropped by a template is not a rule that holds.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { resolve } from "node:path";

export interface ApiNode {
  id: string;
  type: string;
  title: string;
  description?: string;
  spec?: string[];
  meta?: Record<string, unknown>;
}

export interface CourseApi {
  course: { startDate: string; endDate: string; code: string };
  nodes: ApiNode[];
}

export const api = JSON.parse(
  readFileSync(resolve("dist/api/index.json"), "utf8"),
) as CourseApi;

export const nodesOfType = (type: string): ApiNode[] =>
  api.nodes.filter((n) => n.type === type);

const ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&nbsp;": " ",
  "&rsquo;": "’",
  "&lsquo;": "‘",
  "&mdash;": "—",
  "&ndash;": "–",
};

/**
 * The visible text of a built page's <main>, with tags and entities resolved.
 * Scripts and styles are dropped first so their contents can't satisfy a
 * text assertion by accident.
 */
export function pageText(route: string): string {
  const file = resolve("dist", route.replace(/^\/|\/$/g, ""), "index.html");
  const html = readFileSync(file, "utf8");
  const main = /<main\b[^>]*>([\s\S]*?)<\/main>/.exec(html);
  const body = main ? main[1] : html;
  return body
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&[a-z]+;/gi, (e) => ENTITIES[e.toLowerCase()] ?? e)
    .replace(/\s+/g, " ")
    .trim();
}

/** Built routes for a collection, e.g. "sessions" -> ["sessions/01-..."]. */
export function builtRoutes(collection: string): string[] {
  const dir = resolve("dist", collection);
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && existsSync(resolve(dir, e.name, "index.html")))
    .map((e) => `${collection}/${e.name}`)
    .sort();
}

/** Every content page a student can read, listing pages included. */
export function allContentRoutes(): string[] {
  return [
    "",
    "lectures",
    "sessions",
    "assessments",
    "people",
    "topics",
    "policies",
    ...builtRoutes("lectures"),
    ...builtRoutes("sessions"),
    ...builtRoutes("assessments"),
    ...builtRoutes("people"),
  ];
}

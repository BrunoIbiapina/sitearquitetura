import { client } from "./contentful";

export async function getProjectBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: "projetoArquitetura",
    "fields.slug": slug,
    limit: 1,
  });
  return entries.items[0] || null;
}

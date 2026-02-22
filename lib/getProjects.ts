// lib/getProjects.ts
import { client } from "./contentful";

export async function getProjects() {
  const entries = await client.getEntries({
    content_type: "projetoArquitetura",
  }); // use o ID do seu modelo
  return entries.items;
}

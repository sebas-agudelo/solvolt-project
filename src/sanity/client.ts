import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "d4g4oz53",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
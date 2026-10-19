import { client } from "./client";

export async function ContactQuery() {
    const CONTACT_QUERY = `
    *[_type == "contact"][0]
  `;
    const contact = await client.fetch(CONTACT_QUERY);
    return contact;
}
import { defineQuery, SanityDocument } from "next-sanity";
import { client } from "./client";

const SERVICES_QUERY = defineQuery(`*[_type == "services"]`);
const services = async () => {
    return await client.fetch(SERVICES_QUERY)
}

async function servicePage(slug: string) {
    const SERVICE_PAGE_QUERY = `
    *[_type == "services" && slug.current == $slug][0]
    `;
    const service = await client.fetch(SERVICE_PAGE_QUERY, { slug });
    return service
}

const SERVICEPAGE_QUERY = defineQuery(` *[_type == "servicesPage"][0]{hero, services}`)
const servicesPage = async () => {
    return await client.fetch(SERVICEPAGE_QUERY)
}

export default { services, servicePage, servicesPage };

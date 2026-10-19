import { SanityDocument } from "next-sanity";
import { client } from "./client";

async function services() {
  const SERVICES_QUERY = `
    *[_type == "services"]{
      _id,
      heading,
      image,
      description,
      button,
      slug
    }
  `;
  const services = await client.fetch<SanityDocument[]>(SERVICES_QUERY);
  return services;
}

async function servicePage (slug: string){
    const SERVICE_PAGE_QUERY = `
    *[_type == "services" && slug.current == $slug][0]
    `;
    const service = await client.fetch(SERVICE_PAGE_QUERY, {slug});
    return service
}

async function servicesPage (){
    const SERVICES_PAGE_QUERY = `
    *[_type == "services_page"][0] {
    hero,
    process
    }
    `;
    const services = await client.fetch<SanityDocument[]>(SERVICES_PAGE_QUERY);
    return services
}

const contact = async () => {
    const CONTACT_QUERY = `
        *[_type == "contact"][0]{
            phone
        }`;
        const contact = await client.fetch(CONTACT_QUERY);

        return contact
}


export default {services, servicePage, servicesPage, contact};

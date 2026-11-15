import { defineQuery } from "next-sanity";
import { client } from "./client";

const FOOTER_QUERY = defineQuery(` *[_type == "footer"][0]{
      ...,
      column1{
        ...,
        links[]->{ _id, service_title, "slug": slug.current }
      },
    "contact": *[_type == "contact"][0]{
      _key, phone, email, city, address, zip
    }   
    }
  `
)

export const getFooterData = async () => {
  return await client.fetch(FOOTER_QUERY)
}



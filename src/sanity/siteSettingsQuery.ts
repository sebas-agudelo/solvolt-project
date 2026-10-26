import { defineQuery } from "next-sanity";
import { client } from "./client";


const SITESETTIGS_QUERY = defineQuery(` *[_type == "siteSettings"][0]`);
export const getSiteSettings = async () => {
  return await client.fetch(SITESETTIGS_QUERY)
}

const FAQ_QURY = defineQuery(`*[_type == "faq"][0]`);
export const getFaqData = async () => {
  return await client.fetch(FAQ_QURY)
}

export async function getAboutData() {
  const ABOUT_QUERY = `
        *[_type == "about"][0]{
    ...,
    employees[]->{
        _id,
        Fullname,
        Role,
        image
}
    }`;
  const about = await client.fetch(ABOUT_QUERY);
  return about
}
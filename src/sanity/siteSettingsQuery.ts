import { client } from "./client";

export default async function getSiteSettings() {
  const SITESETTIGS_QUERY = `
    *[_type == "siteSettings"][0]
  `;
  const siteSettigs = await client.fetch(SITESETTIGS_QUERY);
  return siteSettigs;
}

export async function getFaqData() {
  const FAQ_QUERY = `
    *[_type == "faq"][0]{
      heading,
      paragraht,
      faqFields
    }
  `;
  const faq = await client.fetch(FAQ_QUERY);
  return faq;
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
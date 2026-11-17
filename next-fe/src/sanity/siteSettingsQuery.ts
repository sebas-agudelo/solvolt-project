import { defineQuery } from "next-sanity";
import { client } from "./client";

const SITESETTIGS_QUERY = defineQuery(` *[_type == "siteSettings"][0]`);
export const getSiteSettings = async () => {
  return await client.fetch(SITESETTIGS_QUERY, {}, { next: { revalidate: 10 } })
}

const FAQ_QURY = defineQuery(`*[_type == "faq"][0]`);
export const getFaqData = async () => {
  return await client.fetch(FAQ_QURY, {}, { next: { revalidate: 10 } })
}

const ABOUT_QUERY = defineQuery(`*[_type == "about_page"][0]`);
export const getAboutData = async () => {
  return await client.fetch(ABOUT_QUERY, {}, { next: { revalidate: 10 } })
}

const EMPLOYEES_QUERY = defineQuery(`*[_type == "employees"]`)
export const getEmployeesData = async () => {
  return await client.fetch(EMPLOYEES_QUERY, {}, { next: { revalidate: 10 } })
}


import { defineQuery } from "next-sanity";
import { client } from "./client";

const HOME_DATA = defineQuery(`
  *[_type == "home_page"][0]{
    ...,
    homeProject{..., projects->},
    homeServices{..., services[]->}
  }
`);
export default async function getHomeData() {
  return await client.fetch(HOME_DATA, {}, { next: { revalidate: 60 } });
}



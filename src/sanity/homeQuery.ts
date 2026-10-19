import { client } from "./client";

export default async function getHomeData() {
  const HOME_QUERY = `*[_type == "home_page"][0] {
  hero,
  homeServices{
    ...,
    services[]->
  },
  homeProject{
    ...,
    projects[]->
  },
}`;

  const homeQuery = await client.fetch(HOME_QUERY);
  return homeQuery
}



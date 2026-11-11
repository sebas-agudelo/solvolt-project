import { Benefits } from "@/components/sections/Benefits/Benefits";
import { ReferensProjects } from "@/app/_home/ReferensProjects";
import { FAQ } from "../components/sections/FAQ/FAQ";
import getHomeData from "@/sanity/homeQuery";
import { HomeServices } from "./_home/HomeServices";
import { getSiteSettings } from "@/sanity/siteSettingsQuery";
import { Contact } from "@/components/sections/Contact/Contact";
import { Hero } from "@/components/sections/Hero/Hero";


export default async function Home() {
  const home = await getHomeData()
  const siteSettings = await getSiteSettings()

  console.log("home", home)

  return (
    <div className="relative">
      <Hero
        data={home?.hero}
        h={100}
        telephone={siteSettings?.contact?.phone}
      />

      <HomeServices
        homeServices={home?.homeServices}
      />

      <Benefits />

      {
        home?.homeProject && home?.homeProject?.projects && (
          <ReferensProjects
            homeProject={home.homeProject}
          />
        )
      }

      <FAQ />

      <Contact
        contact={siteSettings?.contact}
        openHours={siteSettings?.company?.openHours}
      />

    </div>
  );
}




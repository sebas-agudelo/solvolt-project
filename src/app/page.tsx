import { Benefits } from "@/components/sections/Benefits/Benefits";
import { ReferensProjects } from "@/app/_home/ReferensProjects";
import { FAQ } from "../components/sections/FAQ/FAQ";
import { Hero } from "@/components/sections/Hero";
import getHomeData from "@/sanity/homeQuery";
import { Services } from "./_home/Services";
import { getSiteSettings } from "@/sanity/siteSettingsQuery";
import { Contact } from "@/components/sections/Contact/Contact";


export default async function Home() {
  const home = await getHomeData()
  const siteSettings = await getSiteSettings()

  return (
    <div className="relative">
      <Hero
        data={home?.hero}
        h={100}
        telephone={siteSettings?.contact?.phone}
      />

      <Services
        homeServices={home?.homeServices}
      />

      {
        siteSettings?.benefits?.benefits_array && siteSettings?.benefits?.benefits_array?.length > 0 && (
          <Benefits />
        )
      }

      {
        home?.homeProject?.projects && (
          <ReferensProjects
            homeProject={home?.homeProject}
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




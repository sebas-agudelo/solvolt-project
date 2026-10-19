
import { Index } from "./components/ContactComponents/Index";
import { Benefits } from "@/components/sections/Benefits/Benefits";
import { ReferensProjects } from "@/app/_home/ReferensProjects";
import { FAQ } from "../components/sections/FAQ/FAQ";
import { Hero } from "@/components/sections/Hero";
import { ContactQuery } from "@/sanity/ContactQuery";
import getHomeData from "@/sanity/homeQuery";
import getSiteSettings from "@/sanity/siteSettingsQuery";
import { Services } from "./_home/Services";
import { ReviewsSection } from "@/components/sections/ReviewsSection";

export default async function Home() {
  const home = await getHomeData()
  const siteSettings = await getSiteSettings()
  const contactContent = await ContactQuery()

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

      <Benefits />

      <ReferensProjects
        referensProject={home?.homeProject}
      />

      <ReviewsSection />
      
      <FAQ />


      <Index
        content={contactContent}
        siteSettings={siteSettings}

      />
    </div>
  );
}




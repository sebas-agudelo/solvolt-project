import { urlFor } from "@/lib/urlFor";
import { Benefits } from "@/components/sections/Benefits/Benefits";
import { Story } from "./components/Story";
import { Employees } from "./components/Employees";
import { getAboutData } from "@/sanity/siteSettingsQuery";
import { CtaSection } from "@/components/sections/CtaSection";
import { Hero } from "@/components/sections/Hero";

export default async function About() {
    const about = await getAboutData();

    return (
        <div>
            <Hero data={about} h={80} />
        
            <Story story={about?.the_company} />

            <Benefits />

            <Employees employees={about?.employees} />

            <CtaSection />
        </div>
    )
}
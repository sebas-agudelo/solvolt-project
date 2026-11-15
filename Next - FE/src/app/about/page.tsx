import { Benefits } from "@/components/sections/Benefits/Benefits";
import { Story } from "./components/Story";
import { getAboutData } from "@/sanity/siteSettingsQuery";
import { CtaSection } from "@/components/sections/CtaSection";

import { Employess } from "@/app/about/components/Employees";
import { Hero } from "@/components/sections/Hero/Hero";

export default async function About() {
    const about = await getAboutData();
    return (
        <div>
            <Hero data={about?.about_hero}
                h={80}
            />

            <Story about={about?.aboutSection} />

            <Benefits />

            <Employess content={about?.employeesSection} />

            <CtaSection />
        </div>
    )
}
import { Benefits } from "@/components/sections/Benefits/Benefits";
import { Story } from "./components/Story";
import { getAboutData } from "@/sanity/siteSettingsQuery";
import { CtaSection } from "@/components/sections/CtaSection";
import { Hero } from "@/components/sections/Hero";
import { Employess } from "@/components/sections/Employees/Employees";

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
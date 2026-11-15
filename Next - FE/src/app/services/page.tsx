import servicesQuery from "@/sanity/servicesQuery";
import { Servicess } from "@/app/services/components/Services";
import { CtaSection } from "@/components/sections/CtaSection";
import { getSiteSettings } from "@/sanity/siteSettingsQuery";
import { Hero } from "@/components/sections/Hero/Hero";

export default async function Services() {
    const servicesPage = await servicesQuery.servicesPage();
    const services = await servicesQuery.services();
    const siteSettings = await getSiteSettings();
    return (
        <div>
            <Hero
                h={80}
                data={servicesPage?.hero}
                telephone={siteSettings?.contact?.phone}
            />
            <Servicess
                services={services}
                servicesSection={servicesPage?.services}
            />

            <CtaSection />
        </div>
    )
}
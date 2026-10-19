import servicesQuery from "@/sanity/servicesQuery";
import { Servicess } from "@/app/services/Services";
import { Hero } from "@/components/sections/Hero";
import siteSettingsQuery from "@/sanity/siteSettingsQuery";
import { CtaSection } from "@/components/sections/CtaSection";

export default async function Services() {
    const services_page = await servicesQuery.servicesPage();
    const services = await servicesQuery.services();
    const contact = await servicesQuery.contact();
    const siteSettings = await siteSettingsQuery();

    return (
        <div>
            <Hero
                h={80}
                data={services_page?.hero}
                telephone={siteSettings?.contact?.phone}
            />
            <Servicess data={services} />

            <CtaSection />
        </div>
    )
}
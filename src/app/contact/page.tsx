import { Hero } from "@/components/sections/Hero";
import { getSiteSettings } from "@/sanity/siteSettingsQuery";
import { Contact } from "@/components/sections/Contact/Contact";


export default async function Contacts() {
    const contact = await getSiteSettings();

    return (
        <div className="">
            <Hero h={80} />

            <Contact contact={contact?.contact} />
        </div>
    )
}
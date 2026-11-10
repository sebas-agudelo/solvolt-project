
import { getSiteSettings } from "@/sanity/siteSettingsQuery";
import { Contact } from "@/components/sections/Contact/Contact";
import { Hero } from "@/components/sections/Hero/Hero";


export default async function Contacts() {
    const contact = await getSiteSettings();

    return (
        <div className="">
            <Hero h={10} />

            <Contact contact={contact?.contact} />
        </div>
    )
}
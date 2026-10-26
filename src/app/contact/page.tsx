import { Index } from "../components/ContactComponents/Index";
import Footer from "../../components/sections/Footer/Footer";
import { SanityDocument } from "next-sanity";
import { client } from "../../sanity/client";
import { Hero } from "@/components/sections/Hero";

export default async function Contact() {
    const CONTACT_QUERY = `
    *[_type == "contact"][0]`;
    const contact = await client.fetch(CONTACT_QUERY);
    console.log("COntact: ", contact);

    return (
        <div className="max-w-[1440px] m-auto">
            {/* <h1>Kontakta oss</h1> */}
            <Hero h={80}/>

            {/* <Index contact={contact}/> */}
            <Footer />
        </div>
    )
}
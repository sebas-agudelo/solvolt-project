import { getSiteSettings } from "@/sanity/siteSettingsQuery"
import { PrimaryButton, SecondaryButton } from "../UI/Buttons"
import { SectionWrapper } from "./SectionWrapper"

export const CtaSection = async () => {
    const siteSettings = await getSiteSettings();
    const cta = siteSettings?.cta;
    const contact = siteSettings?.contact;


    return (
        <SectionWrapper wrapperClass="bg-neutral-100" sectionClass="pt-15 lg:pt-18">
            <div className="w-full max-w-[530px] mx-auto flex flex-col items-center gap-15">
                <div className="flex flex-col gap-2">
                    <h2 className="heading-md md:text-center">{cta?.title}</h2>
                    <p className="paragraph md:text-center md:px-10">{cta?.text}</p>
                </div>

                <div className="w-full flex flex-col items-start md:flex-row md:items-center md:justify-center gap-6">
                    <PrimaryButton href={`tel:${contact?.phone}`} text={cta?.actionBtn1} />
                    <SecondaryButton href="/contact" text={cta?.actionBtn2} />
                </div>
            </div>
        </SectionWrapper>
    )
}
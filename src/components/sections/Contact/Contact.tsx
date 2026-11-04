import { Company, Contacts } from "@/sanity/types"
import { ContactDetails } from "./ContactDetails"
import { ContactForm } from "./ContactForm";
import { SectionWrapper } from "../SectionWrapper";
import { DownCurveShape } from "@/components/UI/Shapes/Shapes";
import { Links } from "@/components/UI/Link";

type ContactProps = {
    contact?: Contacts
    openHours?: Company["openHours"]
}

export const Contact = ({ contact, openHours }: ContactProps) => {
    return (
        <SectionWrapper
            wrapperClass="bg-neutral-50"
            sectionClass="pt-15 lg:pt-18"
            label="Kontakta oss">
            <div className="flex flex-col md:flex-row gap-8 md:gap-0">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <h2 className="heading-lg">{contact?.contact_title}</h2>
                        <p>{contact?.contact_text}</p>
                    </div>
                    <ContactDetails contact={contact} openHours={openHours} />

                    <div className='flex flex-col items-start gap-2 border-l-[3px] border-amber-300 text-balance px-4'>
                        <div>
                            <h3 className='font-semibold text-lg'>{contact?.emergency_title}</h3>
                            <p className=''>{contact?.emergency_text}</p>
                        </div>

                        <Links href={`tel:${contact?.emergencyNumber}`} text=" Ring oss direkt" />

                    </div>
                </div>

                <div className="px-4 md:px-8 py-8 shadow-lg rounded-2xl bg-white">
                    <ContactForm />
                </div>

            </div>
        </SectionWrapper>
    )
}
import { useForm, ValidationError } from '@formspree/react';
import { ContactForm } from './ContactForm';
import { DownCurveShape, Shape5 } from '../../../components/UI/Shapes/Shapes';
import { HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineEnvelope } from "react-icons/hi2";
import Link from 'next/link';
import { Section } from '@/components/sections/Section';
import { ContactDetails } from './ContactDetails';
import siteSettingsQuery from '@/sanity/siteSettingsQuery';
import { IoArrowForwardOutline } from "react-icons/io5"



export const Index = async ({ content }: any) => {

    const siteSettings = await siteSettingsQuery()


    return (
        <Section className="bg-neutral-100 pt-15 lg:pt-20">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 ">
                <div className="md:w-1/2 flex flex-col gap-10">
                    <div className='flex flex-col gap-2'>
                        <h2 className='header-container'>
                            {content?.heading}
                        </h2>
                        <p className='text-neutral-600'>{content?.text}</p>
                    </div>

                    <ContactDetails siteSettings={siteSettings} />

                    <div className='border-l-[3px] border-amber-300 text-balance px-4'>
                        <h2 className='text-black/70 font-bold text-lg '>Behöver du jourhjälp?</h2>
                        <p className='text-balance text-black/80 mb-4'>Jour dygnet runt, alla dagar. Ring oss vid strömavbrott, jordfel eller brandlukt.</p>

                        <Link href={`tel:${siteSettings?.contact?.emergencyNumber}`} className="group
                    relative inline-flex items-center border-current pb-1 font-semibold
                    transition-colors duration-150 lg:hover:text-cyan-950
                    after:absolute after:left-0 after:-bottom-px after:h-px after:w-full
                    after:bg-amber-300 after:origin-left after:scale-x-0
                    after:transition-transform after:duration-300
                    lg:hover:after:scale-x-100
                ">
                            Ring oss direkt
                            <span
                                className="
                        flex overflow-hidden max-w-0 opacity-0
                        transition-all duration-300 ease-out
                        lg:group-hover:max-w-6 lg:group-hover:opacity-100 lg:group-hover:ml-2
                    "
                            >
                                <IoArrowForwardOutline className="shrink-0" />
                            </span>
                        </Link>

                    </div>
                </div>

                <div className="md:w-1/2 md:px-8 py-8 md:py-12 shadow-sm rounded-xl bg-white px-4">
                    <ContactForm />
                </div>
            </div>

            <DownCurveShape color="#083344" />

        </Section>
    )
}
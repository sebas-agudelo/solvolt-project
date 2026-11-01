"use client"

import { ServicesList } from "@/components/Services/ServicesList"
import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { Services } from "@/sanity/types"

export const Servicess = ({ services, servicesSection }: { services?: Services[] | null; servicesSection: any }) => {
    return (
        <SectionWrapper sectionClass="pt-15 lg:pt-18 pb-15 lg:pb-23" label={servicesSection?.label}>

            {servicesSection?.title && (
                <h2 className="header-container text-[28px] lg:text-[32px] mb-6 md:mb-10 max-w-2/3">{servicesSection?.title}</h2>
            )}

            <ServicesList
                servives={services}
                columns={4}
            />

        </SectionWrapper>
    )
}

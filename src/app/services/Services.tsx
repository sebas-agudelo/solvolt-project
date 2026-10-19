"use client"

import { ServicesList } from "@/components/Services/ServicesList"
import { SectionLabel } from "@/components/UI/SectionLabel"
import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { SanityDocument } from "next-sanity"

export const Servicess = ({ data }: any) => {
    return (
        <SectionWrapper sectionClass="pb-15 lg:pb-20">
            <SectionLabel label="Hoppas vi kan hjälpa dig" />

            <h2 className="header-container text-[28px] lg:text-[32px] mb-6 md:mb-10 max-w-2/3">Allt från mindre servicejobb till större entreprenader</h2>

            <ServicesList data={data} columns={4} />

        </SectionWrapper>
    )
}

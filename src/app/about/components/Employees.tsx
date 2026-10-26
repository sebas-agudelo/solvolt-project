import { Section } from "@/components/sections/Section"
import { EmployeeList } from "./EmployeeList"
import { SectionLabel } from "@/components/UI/SectionLabel"
import { SectionWrapper } from "@/components/sections/SectionWrapper"

export const Employees = ({ employees }: any) => {
    return (
        <SectionWrapper wrapperClass="bg-neutral-200" sectionClass="pb-15 lg:pb-20">

            <SectionLabel label="Kontakta oss idag" />
            <h2 className="heading-lg mb-6 md:mb-10">Möt vårt team</h2>



            <div className="flex w-full flex-wrap gap-8 lg:gap-6">
                {employees?.map((employee: any, i: number) => (
                    <EmployeeList key={employee?._id} employee={employee} index={i} />
                ))}
            </div>
        </SectionWrapper>
    )
}
import { urlFor } from "@/lib/urlFor";
import { getEmployeesData } from "@/sanity/siteSettingsQuery";
import { SectionWrapper } from "../../../components/sections/SectionWrapper";
import { DownCurveShape } from "@/components/UI/Shapes/Shapes";
import { EmployeesSection } from "@/sanity/types";


export const Employess = async ({ content }: { content?: EmployeesSection }) => {
    const employees = await getEmployeesData();
    return (
        <>
            {
                employees?.length > 0 && (
                    <SectionWrapper label={content?.employees_label} sectionClass="pb-15 lg:pb-23">
                        <DownCurveShape color="#fff" />

                        {
                            content?.employees_title && (
                                <h2 className="heading-lg text-balance mb-6 md:mb-10">
                                    {content.employees_title}
                                </h2>
                            )
                        }

                        <div className="flex w-full flex-wrap gap-8 lg:gap-6">
                            {
                                employees.map((employee) => (
                                    <div
                                        key={employee._id}
                                        className="group w-full md:w-[calc(50%-18px)] lg:w-[calc(25%-18px)] hover:bg-white border border-slate-200/60 hover:border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer">
                                        {
                                            employee?.image && (
                                                <div className="h-[260px] w-full overflow-hidden relative bg-slate-200">
                                                    <img
                                                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                                                        src={urlFor(employee.image).url()}
                                                        alt={employee.Fullname || "Medarbetare"}
                                                    />
                                                </div>
                                            )
                                        }
                                        <div className="p-6 flex flex-col gap-1.5">
                                            <h3 className="text-lg font-semibold text-cyan-950 group-hover:text-cyan-700 transition-colors">
                                                {employee.Fullname}
                                            </h3>
                                            <p className="text-sm font-medium text-slate-600 group-hover:text-cyan-800 transition-colors">
                                                {employee.Role}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </SectionWrapper>
                )
            }
        </>
    )
}
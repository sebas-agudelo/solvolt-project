
import { urlFor } from "@/lib/urlFor";
import { SecondaryButton } from "@/components/UI/Buttons";
import { IHomeReferensProject } from "@/models/IHome";
import { DownCurveShape } from "@/components/UI/Shapes/Shapes";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";


const projectsDates = [
    { label: "Kund", value: "BRF" },
    { label: "Ort", value: "Stockholm" }
]

export const ReferensProjects = ({ referensProject }: IHomeReferensProject) => {
    const project = referensProject?.projects[0];

    return (
        <SectionWrapper wrapperClass="bg-neutral-200">
            <SectionLabel label="Referensprojekt" />

                <h2 className="heading-lg text-balance mb-6 md:mb-10">
                    {referensProject?.heading}
                </h2>

            <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-stretch">
                <div className="w-full md:w-[58%] h-[235px] md:h-[465px] overflow-hidden bg-black rounded-lg">
                    <img className="w-full h-full object-cover  rounded-lg"
                        src={urlFor(project?.image).url()}
                        alt={project?.header}
                    />
                </div>

                <div className="w-full md:w-[42%] shadow-md rounded-lg px-4 lg:px-8 py-8 lg:py-0 bg-white flex flex-col justify-center items-start gap-5 lg:gap-10">
                    <span className="font-semibold text-sm border border-amber-300 py-1 px-6 rounded-4xl">Installation</span>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">{project?.header}</h3>

                        {
                            project?.short_description &&
                            <p className="paragraph">{project?.short_description}</p>
                        }
                    </div>

                    <div className="w-full flex gap-8">
                        {projectsDates.map((p) => (
                            <div className="w-[50%] first:border-r first:border-amber-300">
                                <div>
                                    <p className="font-semibold">{p.value}</p>
                                    <p>{p.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {
                        referensProject?.primaryButton &&
                        <SecondaryButton color="bg-cyan-950 text-white" href="/projects" text={referensProject?.primaryButton} />
                    }

                </div>
            </div>

            <DownCurveShape color="#083344" />
        </SectionWrapper>
    )
}
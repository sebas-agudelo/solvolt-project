
import { urlFor } from "@/lib/urlFor";
import { DownCurveShape } from "@/components/UI/Shapes/Shapes";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { HOME_DATA_RESULT } from "@/sanity/types";
import { SecondaryButton } from "@/components/UI/Buttons";

type referensProjectProps = {
    homeProject?: NonNullable<HOME_DATA_RESULT>["homeProject"] | null;
}

export const ReferensProjects = ({ homeProject }: referensProjectProps) => {
    return (
        <SectionWrapper wrapperClass="bg-cyan-950/90" label={homeProject?.label} labelColor="text-white">
            <DownCurveShape color="#1e475a" />
            <h2 className="heading-lg text-balance mb-6 md:mb-10 text-white">
                {homeProject?.title}
            </h2>

            <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-stretch">
                {homeProject?.projects?.project_image &&
                    <div className="w-full md:w-[58%] h-[235px] md:h-[465px] overflow-hidden bg-black rounded-2xl">
                        <img className="w-full h-full object-cover  rounded-2xl"
                            src={urlFor(homeProject.projects.project_image)?.url()}
                            alt={homeProject.projects.project_title}
                        />
                    </div>
                }

                <div className="w-full md:w-[42%] shadow-md rounded-2xl px-4 lg:px-8 py-8 lg:py-0 bg-white flex flex-col justify-center items-start gap-5 lg:gap-10">
                    <span className="font-semibold text-sm border border-amber-300 py-1 px-6 rounded-4xl">{homeProject?.projects?.label}</span>

                    <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold">{homeProject?.projects?.project_title}</h3>
                        <p className="paragraph">{homeProject?.projects?.project_intro}</p>
                    </div>

                    <div className="w-full flex gap-8">
                        {
                            homeProject?.projects?.customer && (
                                <div className="w-[50%] border-r-2 border-amber-300">
                                    <p className="font-semibold">{homeProject?.projects?.customer}</p>
                                    <p>Kund</p>
                                </div>
                            )
                        }

                        {
                            homeProject?.projects?.city && (
                                <div className="w-[50%]">
                                    <p className="font-semibold">{homeProject?.projects?.city}</p>
                                    <p>Ort</p>
                                </div>
                            )}
                    </div>

            
                        <SecondaryButton color="bg-cyan-950 text-white" href="/projects" text={"Läs mer"} />
                </div>
            </div>

        </SectionWrapper>
    )
}
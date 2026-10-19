import { DownCurveShape } from "@/components/UI/Shapes/Shapes"
import { Links } from "@/components/UI/Link"
import { urlFor } from "@/lib/urlFor"
import { SectionWrapper } from "@/components/sections/SectionWrapper"

export const Story = ({ story }: any) => {
    const stories = story[0]

    return (
        <SectionWrapper>
            <div className="w-full flex flex-col md:flex-row gap-5 md:gap-8">
                <div className="w-full h-[220px] md:w-[48%] h-[235px] md:h-[465px] rounded-xl bg-black">
                    <img className="w-full h-full object-cover rounded-2xl opacity-90" src={urlFor(stories?.story_img).url()} alt="" />
                </div>

                <div className="flex flex-col md:justify-center items-start w-full md:w-[52%] gap-5">
                    <div className="flex flex-col gap-2">
                        <h2 className="heading-md">{stories?.story_heading}</h2>
                        <p className="paragraph">{stories?.story}</p>
                    </div>

                    <div className="mt-8">
                        <Links href="/contact" text="Kontakta oss" />
                    </div>
                </div>
            </div>
            <DownCurveShape color="#053345" />
        </SectionWrapper>
    )
}
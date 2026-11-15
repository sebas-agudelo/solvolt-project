import { Links } from "@/components/UI/Link"
import { urlFor } from "@/lib/urlFor"
import { SectionWrapper } from "@/components/sections/SectionWrapper"
import { AboutContent } from "@/sanity/types"

export const Story = ({ about }: { about?: AboutContent }) => {
    return (
        <>
            {
                about && (
                    <SectionWrapper
                        sectionClass="pt-15 lg:pt-18"
                        wrapperClass=""
                    >
                        <div className="w-full flex flex-col md:flex-row gap-5 md:gap-8">
                            {about?.about_image && (
                                <div className="w-full md:w-[48%] h-[235px] md:h-[465px] rounded-xl bg-black">
                                    <img className="w-full h-full object-cover rounded-2xl opacity-90" src={urlFor(about.about_image).url()} alt={about.about_title} />
                                </div>
                            )}

                            <div className="flex flex-col md:justify-center items-start w-full md:w-[52%] gap-5">
                                <div className="flex flex-col gap-2">
                                    <h2 className="heading-md">{about.about_title}</h2>
                                    <p className="paragraph">{about.about_text}</p>
                                </div>

                                {about?.about_link && (
                                    <div className="mt-8">
                                        <Links href="/contact" text={about?.about_link} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </SectionWrapper>
                )}
        </>
    )
}
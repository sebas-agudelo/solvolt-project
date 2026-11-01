import { DownCurveShape } from "@/components/UI/Shapes/Shapes"
import { SectionWrapper } from "../SectionWrapper"
import { getSiteSettings } from "@/sanity/siteSettingsQuery"

export const Benefits = async () => {
    const settings = await getSiteSettings();
    return (
        <SectionWrapper wrapperClass="bg-cyan-950">
            <DownCurveShape color="#053345" />
            <div className="flex flex-col gap-10 md:items-center text-white">
                <h2 className="heading-lg text-white">
                    {settings?.benefits?.title}
                </h2>

                <ul className="flex flex-col md:flex-row gap-12 lg:gap-24">
                    {
                        settings?.benefits?.benefits_array?.map((benefit) => (
                            <li
                                key={benefit?.benefit_title}
                                className="flex flex-col gap-2 md:w-1/3">
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-xl text-white">{benefit.benefit_title}</h3>
                                </div>
                                <p className="paragraph text-white/90">{benefit?.benefit_description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}
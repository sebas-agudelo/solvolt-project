import { DownCurveShape, UpCurveShape } from "@/components/UI/Shapes/Shapes"
import siteSettingsQuery from "@/sanity/siteSettingsQuery"
import { Section } from "../Section"
import { BenefitList } from "./BenefitList"
import { SectionWrapper } from "../SectionWrapper"

export const Benefits = async () => {
    const settings = await siteSettingsQuery()
    // bg-cyan-950
    return (
        <SectionWrapper wrapperClass="bg-cyan-950">
            <div className="flex flex-col gap-10 md:items-center text-white">
                <h2 className="heading-lg text-white">
                    {settings?.benefits?.heading}
                </h2>

                <BenefitList settings={settings} />
            </div>

            <DownCurveShape color="#E5E5E5" />
        </SectionWrapper>
    )
}
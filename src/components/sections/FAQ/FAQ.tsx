import { Faqitem } from "./Faqitem";
import { Links } from "@/components/UI/Link";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { getFaqData } from "@/sanity/siteSettingsQuery";
import { SectionWrapper } from "../SectionWrapper";

export const FAQ = async () => {
    const faq = await getFaqData()
    return (
        <SectionWrapper sectionClass="pb-15 lg:pb-20">
            <SectionLabel label="FAQ" />

            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                <div className="w-full md:w-[42%] flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <h2 className="heading-md">
                            {faq?.heading}
                        </h2>
                        <p className="paragraph max-w-[450px]">{faq?.paragraht}</p>
                    </div>

                    <div className="hidden md:block mt-8">
                        <Links href="/about" text="Vi hjälper här" />
                    </div>
                </div>

                <div className="w-full md:w-[58%]">
                    <Faqitem faq={faq?.faqFields} />
                </div>
            </div>
        </SectionWrapper>
    )
}
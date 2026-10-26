import { FaqList } from "./FaqList";
import { Links } from "@/components/UI/Link";
import { getFaqData } from "@/sanity/siteSettingsQuery";
import { SectionWrapper } from "../SectionWrapper";

export const FAQ = async () => {
    const faq = await getFaqData()
    return (
        <>
            {faq?.faqFields && faq?.faqFields?.length > 0 && (
                <SectionWrapper sectionClass="pb-15 lg:pb-18" label="FAQ">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                        <div className="w-full md:w-[42%] flex flex-col gap-5">
                            <div className="flex flex-col gap-2">
                                <h2 className="heading-md">
                                    {faq?.faq_title}
                                </h2>
                                <p className="paragraph max-w-[450px]">{faq?.description}</p>
                            </div>

                            <div className="hidden md:block mt-8">
                                <Links href="/contact" text={faq.faq_button_text} />
                            </div>
                        </div>

                        <div className="w-full md:w-[58%]">
                            <FaqList faqFields={faq?.faqFields} />
                        </div>
                    </div>
                </SectionWrapper>
            )}
        </>
    )
}
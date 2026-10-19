import { Links } from "@/components/UI/Link";
import { DownCurveShape } from "@/components/UI/Shapes/Shapes";
import { IHomeServices } from "@/models/IHome";
import { ServicesList } from "@/components/Services/ServicesList";
import { SectionLabel } from "@/components/UI/SectionLabel";
import { SectionWrapper } from "@/components/sections/SectionWrapper";

export const Services = ({ homeServices }: IHomeServices) => {
    return (
        <SectionWrapper>
            <SectionLabel label="Favorittjänster" />

            <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-8">
                <div className="w-full lg:w-[50%] flex flex-col justify-between gap-5">
                    <div className="flex flex-col gap-2">
                        <h2 className="heading-md">
                            {homeServices?.heading}
                        </h2>

                        {homeServices?.text && (
                            <p className="paragraph max-w-[450px]">
                                {homeServices?.text}
                            </p>
                        )}
                    </div>

                    <ul className="flex flex-col gap-5 pl-4 text-sm">
                        {
                            homeServices?.usps?.map((adv) => (
                                <li className="text-cyan-950 font-medium list-disc">{adv}</li>
                            ))
                        }
                    </ul>


                    {homeServices?.primaryButton && (
                        <div className="hidden md:block mt-8">
                            <Links
                                href="/services"
                                text={homeServices?.primaryButton}
                            />
                        </div>
                    )}
                </div>


                <div className="w-full lg:w-[50%] flex flex-col justify-start">
                    <ServicesList data={homeServices?.services} columns={2} />
                </div>

            </div>
            {homeServices?.primaryButton && (
                <div className="md:hidden mt-8">
                    <Links
                        href="/services"
                        text={homeServices?.primaryButton}
                    />
                </div>
            )}
            <DownCurveShape color="#053345" />
        </SectionWrapper>


    )
}
import { Links } from "@/components/UI/Link";
import { DownCurveShape } from "@/components/UI/Shapes/Shapes";
import { ServicesList } from "@/components/Services/ServicesList";
import { SectionWrapper } from "@/components/sections/SectionWrapper";
import { HOME_DATA_RESULT } from "@/sanity/types";

type homeServicesProps = {
    homeServices?: NonNullable<HOME_DATA_RESULT>["homeServices"]
}

export const Services = ({ homeServices }: homeServicesProps) => {
    return (
        <SectionWrapper label="Favorittjänster">
            <DownCurveShape color="#fff" />
            <div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-8">
                <div className="w-full lg:w-[50%] flex flex-col justify-between gap-8">
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

                    <ul className="flex flex-col gap-6 pl-4 text-sm">
                        {
                            homeServices?.usps?.map((adv, index) => (
                                <li
                                    key={index}
                                    className="text-cyan-950 font-medium list-disc">{adv}</li>
                            ))
                        }
                    </ul>

                    <div className="hidden md:block mt-4">
                        <Links
                            href="/services"
                            text={"Våra tjänster"}
                        />
                    </div>

                </div>


                <div className="w-full lg:w-[50%] flex flex-col justify-start">
                    <ServicesList servives={homeServices?.services} columns={2} />
                </div>

            </div>
            <div className="md:hidden mt-8">
                <Links
                    href="/services"
                    text={"Våra tjänster"}
                />
            </div>

        </SectionWrapper>


    )
}
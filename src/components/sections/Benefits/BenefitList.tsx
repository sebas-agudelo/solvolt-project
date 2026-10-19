interface IBenefit {
    icon?: any
    heading: string
    benefit: string
}

interface IBenefitsSettingProps {
    settings: {
        benefits: {
            heading: string
            bene: IBenefit[]
        }
    }
}

export const BenefitList = ({ settings }: IBenefitsSettingProps) => {
    return (
        <ul className="flex flex-col md:flex-row gap-12 lg:gap-24">
            {
                settings?.benefits?.bene?.map((benefit: IBenefit) => (
                    <li
                        key={benefit?.heading}
                        className="flex flex-col gap-2 md:w-1/3">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl text-white">{benefit.heading}</h3>
                        </div>
                        <p className="paragraph text-white/90">{benefit?.benefit}</p>
                    </li>
                ))
            }
        </ul>
    )
}
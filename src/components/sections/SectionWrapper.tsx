import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"
import { SectionLabel } from "../UI/SectionLabel"

interface SectionWrapperProps {
    children: ReactNode
    sectionClass?: string
    wrapperClass?: string
    label?: string
    labelColor?: string 
}

export const SectionWrapper = ({ children, sectionClass = "", wrapperClass = "", label = "", labelColor="" }: SectionWrapperProps) => {
    console.log("wrapper: ",wrapperClass)
    return (
        <div className={twMerge("relative z-40", wrapperClass)}>
            <div className={twMerge(
                "w-full max-w-[1440px] mx-auto px-4 lg:px-12 pt-10 pb-20 lg:pb-30",
                sectionClass
            )}>
                {label && <SectionLabel label={label} labelColor={labelColor} />}
                {children}
            </div>
        </div>
    )
}
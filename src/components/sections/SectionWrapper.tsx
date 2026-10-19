import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface SectionWrapperProps {
    children: ReactNode
    sectionClass?: string
    wrapperClass?: string
}

export const SectionWrapper = ({ children, sectionClass = "", wrapperClass = "" }: SectionWrapperProps) => {
    return (
        <div className={`relative z-40 ${wrapperClass}`}>
            <div className={twMerge(
                "w-full max-w-[1440px] mx-auto px-4 lg:px-12 pt-10 pb-20 lg:pt-14 lg:pb-30",
                sectionClass
            )}>
                {children}
            </div>
        </div>
    )
}
import { twMerge } from 'tailwind-merge';
import type { ReactNode } from 'react';

interface ISection {
    children: ReactNode,
    className?: string
}

export const Section = ({ children, className = "" }: ISection) => {
    return (
        <div className={twMerge(
            "w-full max-w-[1440px] mx-auto px-4 lg:px-12 pt-10 pb-20 lg:pt-14 lg:pb-30",
            className
        )}>
            {children}
        </div>
    )
}
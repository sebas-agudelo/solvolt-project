import Link from "next/link"
import { JSX } from "react"

interface ContactDetailItemProps {
    href?: string
    title: string
    text: string | JSX.Element
    icon: string | JSX.Element
}

export const ContactDetailItem = ({ href, title, text, icon }: ContactDetailItemProps) => {
    return (
        <div className="flex flex-col gap-2 mb-8 last:mb-0">
            <h3 className='text-neutral-800 font-[600] flex items-center gap-2'>{icon} {title}</h3>
            {href && href ?
                <Link href={href} className='flex items-center gap-2 lg:hover:text-amber-300 lg:hover:underline transition-all duration-150'>{text}</Link> :
                <p>{text}</p>}
        </div>
    )
}
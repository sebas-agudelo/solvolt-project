import Link from "next/link"
import { JSX } from "react"

interface ContactDetailItemsProps {
    href?: string
    title: string
    text: string | JSX.Element
    icon: string | JSX.Element
}

export const ContactDetailItem = ({ href, title, text, icon }: ContactDetailItemsProps) => {
    return (
        <div className="flex flex-col gap-2 ">
            <h3 className='text-neutral-800 font-[600] flex items-center gap-2'>{icon} {title}</h3>
            {href ?
                <Link href={href} className='flex items-center gap-2 lg:hover:text-amber-300 lg:hover:underline transition-all duration-150'>{text}</Link> :
                <p>{text}</p>}
        </div>
    )
}
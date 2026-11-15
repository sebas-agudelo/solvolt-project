import Link from "next/link"
import { IoArrowForwardOutline } from "react-icons/io5"

export const Links = ({ href, text }: any) => {
    return (
            <Link
                href={href}
                className="
                    group relative z-40 inline-flex items-center border-b border-current pb-1 font-medium
                    transition-colors duration-150 lg:hover:text-cyan-950
                    after:absolute after:left-0 after:-bottom-px after:h-px after:w-full
                    after:bg-amber-400 after:origin-left after:scale-x-0
                    after:transition-transform after:duration-300
                    lg:hover:after:scale-x-100
                "
            >
                {text}
                <span
                    className="
                        flex overflow-hidden max-w-0 opacity-0
                        transition-all duration-300 ease-out
                        lg:group-hover:max-w-6 lg:group-hover:opacity-100 lg:group-hover:ml-2
                    "
                >
                    <IoArrowForwardOutline className="shrink-0" />
                </span>
            </Link>
    )
}
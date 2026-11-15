import Link from "next/link"
import { IoArrowForwardOutline } from "react-icons/io5"
import {
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";

interface IButtonProps {
    href?: string,
    text?: string,
    color?: string
}

const base =
    "group inline-flex items-center justify-center min-w-auto h-[42px] text-neutral-700 px-6 rounded-3xl shadow-md transition-all duration-150 font-[500]";

const HoverArrow = () => (
    <span
        className="
            flex overflow-hidden max-w-0 opacity-0
            transition-all duration-300 ease-out
            lg:group-hover:max-w-6 lg:group-hover:opacity-100 lg:group-hover:ml-2
        "
    >
        <IoArrowForwardOutline className="shrink-0" />
    </span>
)

export const PrimaryButton = ({ href = "", text }: IButtonProps) => {
    const className = `${base} bg-amber-300 lg:hover:bg-amber-400 lg:hover:text-cyan-950`
    return (
        <>
            {href ?

                <Link
                    href={href}
                    className={`${className}`}
                >
                    <span>{text}</span>
                </Link> :

                <button className={`${className}`}>{text}</button>}

        </>
    )
}

export const SecondaryButton = ({
    href = "",
    text,
    color = "",
}: IButtonProps) => {
    return (
        <Link
            href={href}
            className={`${base} ${color || "bg-white"}  lg:hover:bg-cyan-950 lg:hover:text-white`}
        >
            <span>{text}</span>
            {/* <FaArrowUpRightFromSquare className="group-hover:hidden transition-all duration-150 text-xs"/> */}

            <HoverArrow />
        </Link>
    );
};
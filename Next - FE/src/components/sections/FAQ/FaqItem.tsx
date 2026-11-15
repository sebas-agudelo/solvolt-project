import { FaqItem } from "@/sanity/types"
import { IoIosArrowDown } from "react-icons/io"

type FaqItemProps = {
    item: FaqItem
    isOpen: boolean
    onToggle: () => void
}

export const FaqItems = ({ item, isOpen, onToggle }: FaqItemProps) => {
    return (
        <li
            onClick={onToggle}
            className="group w-full pb-10 last:pb-0 flex flex-col select-none cursor-pointer font-semibold"
        >
            <div className="flex justify-between items-center">
                <h3 className="group-hover:text-amber-300 w-[90%]">{item?.faq_item}</h3>
                <div className="w-[10%] flex justify-end">
                    <IoIosArrowDown
                        className={`h-[28px] w-[28px] bg-amber-300 rounded-full text-black p-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                </div>
            </div>

            <div
                className={`grid w-[85%] text-black/70 transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="font-normal border-l border-amber-300 pl-3 select-none">
                        {item?.faq_answer}
                    </p>
                </div>
            </div>
        </li>
    )
}
"use client";

import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Faqitem = ({ faq }: any) => {
    const [isOpen, setIsOpen] = useState<string | null>(null);

    return (
  
            <ul className="w-full font-semibold">
                {faq?.map((f: any) => {
                    const k = isOpen === f._key;
                    return (
                        <li
                            key={f._key}
                            onClick={() => setIsOpen(k ? null : f._key)}
                            className="group w-full pb-10 last:pb-0 flex flex-col select-none cursor-pointer"
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="group-hover:text-amber-300 w-[90%]">{f?.title}</h3>
                                <div className="w-[10%] flex justify-end">
                                    <IoIosArrowDown
                                        className={`h-[32px] w-[32px] bg-amber-300 rounded-full text-black p-2 transition-transform duration-300 ${k ? "rotate-180" : ""}`}
                                    />
                                </div>
                            </div>

                            <div
                                className={`grid w-[85%] text-black/70 transition-all duration-300 ease-out ${
                                    k ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <p className="font-normal border-l border-amber-300 pl-3 select-none">
                                        {f?.text}
                                    </p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
   
    )
}
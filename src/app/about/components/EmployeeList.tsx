"use client"

import { motion } from "framer-motion"
import { urlFor } from "@/lib/urlFor"
import { IEmployee } from "@/models/IEmployee"

type Props = {
    employee: IEmployee
    index: number
}

export const EmployeeList = ({ employee, index }: Props) => {
    return (
        <div
         
            className="group w-full md:w-[calc(50%-18px)] lg:w-[calc(25%-18px)] bg-slate-100/80 hover:bg-white border border-slate-200/60 hover:border-slate-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
        >
            {/* Bildcontainer */}
            <div className="h-[260px] w-full overflow-hidden relative bg-slate-200">
                <img
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    src={urlFor(employee?.image)?.url()}
                    alt={employee?.Fullname || "Medarbetare"}
                />
            </div>

            {/* Textinnehåll */}
            <div className="p-6 flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-cyan-950 transition-colors">
                    {employee?.Fullname}
                </h3>
                <p className="text-sm font-medium text-slate-600 group-hover:text-cyan-800 transition-colors">
                    {employee?.Role}
                </p>
            </div>
        </div>
    )
}
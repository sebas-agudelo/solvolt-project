"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { CgMenuLeft } from "react-icons/cg"
import { IoClose } from "react-icons/io5"
import { MdWifiCalling3 } from "react-icons/md"
import { IoMailOutline } from "react-icons/io5"

const desktopLinkClass =
    "relative cursor-pointer pb-1 after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-full after:bg-amber-300 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"

export const NavBarLayout = () => {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10)
        onScroll()
        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <div
            className={`px-3 md:px-6 flex justify-between items-center fixed left-1/2 -translate-x-1/2 z-10 transition-all duration-300 ${scrolled
                ? "w-[88%] h-[56px] top-3 md:w-[95%] md:h-[60px] md:top-4 max-w-[950px] rounded-3xl bg-white text-cyan-950 shadow-xl"
                : "w-[95%] h-[70px] top-5 max-w-[1440px] rounded-xl bg-transparent text-white"
                }`}
        >
            <div>
                <Link href={"/"} className="font-extrabold">SolVolt</Link>
            </div>

            <div>
                <button
                    type="button"
                    className="md:hidden relative w-8 h-8 flex items-center justify-center"
                    aria-label={open ? "Stäng meny" : "Öppna meny"}
                    aria-expanded={open}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <CgMenuLeft
                        className={`absolute text-3xl transition-all duration-500 ease-in-out ${open
                            ? "opacity-0 rotate-90 scale-50"
                            : "opacity-100 rotate-0 scale-100"
                            }`}
                    />
                    <IoClose
                        className={`absolute text-3xl transition-all duration-500 ease-in-out ${open
                            ? "opacity-100 rotate-0 scale-100"
                            : "opacity-0 -rotate-90 scale-50"
                            }`}
                    />
                </button>

                <ul
                    className={`hidden md:flex gap-8 transition-all duration-300 ${scrolled ? "font-[500]" : "font-normal"
                        }`}
                >
                    <li className={desktopLinkClass}>
                        <Link href="/services">Tjänster</Link>
                    </li>
                    <li className={desktopLinkClass}>
                        <Link href="/about">Om oss</Link>
                    </li>
                    <li className={desktopLinkClass}>
                        <Link href="/contact">Kundservice</Link>
                    </li>
                   
                </ul>
            </div>

            {/* Ikoner på desktop */}
            <div className="hidden md:flex gap-10">
                <MdWifiCalling3 className="text-xl" />
                <IoMailOutline className="text-xl" />
            </div>

            {/* Mobilmeny */}
            <div
                aria-hidden={!open}
                className={`md:hidden absolute top-full left-0 right-0 mt-3 rounded-3xl bg-white text-cyan-950 shadow-xl p-8 flex flex-col gap-8 transition-all duration-500 ease-in-out ${open
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 -translate-y-4 invisible pointer-events-none"
                    }`}
            >
                <ul className="flex flex-col gap-6 font-[500]">
                    <li>
                        <Link href="/services" onClick={() => setOpen(false)}>
                            Tjänster
                        </Link>
                    </li>
                    <li>Om oss</li>
                    <li>Kundservice</li>
                    <li>Nyheter</li>
                </ul>

                <div className="flex gap-8 border-t border-cyan-950/10 pt-6">
                    <MdWifiCalling3 className="text-2xl" />
                    <IoMailOutline className="text-2xl" />
                </div>
            </div>
        </div>
    )
}
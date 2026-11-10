"use client"

import { DownCurveShape } from "@/components/UI/Shapes/Shapes"
import { urlFor } from "@/lib/urlFor"
import { usePathname } from "next/navigation"
import { Hero as HeroTypes } from "@/sanity/types"
import { PrimaryButton, SecondaryButton } from "@/components/UI/Buttons"

export const Hero = ({ data, h, telephone }: { data?: HeroTypes | null; h: number; telephone?: string }) => {
    const path = usePathname();

    return (
        <div
            style={{ minHeight: `${h}vh` }}
            className="bg-cyan-950 overflow-hidden relative flex flex-col justify-center py-20 lg:py-28"
        >
            <div className="h-full w-full absolute inset-0 z-0">
                {data?.image && (
                    <img
                        className=" h-full w-full object-cover object-left opacity-25 scale-105 transition-transform duration-1000 ease-out"
                        src={urlFor(data?.image).url()}
                        alt={data?.heading || "Hero bakgrund"}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 via-cyan-950/80 to-transparent" />
            </div>

            <div className="container mx-auto px-4 lg:px-12 z-10">
                <div className="flex flex-col justify-between w-full max-w-[850px] gap-8">
                    <div className="flex flex-col gap-4">

                        <div className="flex flex-col gap-4">
                            <h1 className="text-[42px] sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight text-balance">
                                {data?.heading}
                            </h1>
                            <p className="text-slate-200 text-base sm:text-lg max-w-[560px] leading-relaxed font-normal">
                                {data?.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                        {data?.primaryButton && (
                            <PrimaryButton
                                href={`tel:${telephone}`}
                                text={`${data?.primaryButton} ${telephone || ""}`}
                            />
                        )}
                        {data?.secondaryButton && (
                            <SecondaryButton
                                href="/contact"
                                text={data?.secondaryButton}
                            />
                        )}
                    </div>
                </div>
            </div>

            {path === "/" && (
                <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                    <DownCurveShape color="#fff" />
                </div>
            )}
        </div>
    )
}
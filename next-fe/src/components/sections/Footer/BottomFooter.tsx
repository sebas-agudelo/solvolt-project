import { FOOTER_QUERY_RESULT } from "@/sanity/types"
import Link from "next/link"

export const BottomFooter = ({ footer }: {footer: FOOTER_QUERY_RESULT}) => {
    return (
        <>
            {/* Trust section */}
            <div className="mt-12 border-t border-white/15 py-6">
                <p className="text-sm leading-6 text-white">
                    {footer?.trustText}
                </p>
            </div>

            {/* Bottom footer */}
            <div className="flex flex-col gap-4 border-t border-white/15 pt-6
                text-xs text-white sm:flex-row sm:items-center
                sm:justify-between">

                <p className="text-white/80">
                    © {new Date().getFullYear()} SOLVOLT.
                    Alla rättigheter förbehållna.
                </p>

                <div className="flex flex-wrap gap-x-5 gap-y-2 text-cyan-100/70">
                    <Link
                        href=""
                        className="transition hover:text-white"
                    >
                        Integritetspolicy
                    </Link>

                    <Link
                        href=""
                        className="transition hover:text-white"
                    >
                        Cookies
                    </Link>
                </div>

                <p className="text-white/80">
                    Webbplats skapad av Sebastian Agudelo
                </p>
            </div>
        </>
    )
}
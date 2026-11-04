import Link from "next/link";
import { DownCurveShape } from "@/components/UI/Shapes/Shapes";
import { getFooterData } from "@/sanity/footerQuery";
import { FooterColumns } from "./FooterColumns";
import { BottomFooter } from "./BottomFooter";
import { urlFor } from "@/lib/urlFor";

export default async function Footer() {
    const footer = await getFooterData();

    return (
        <div className="relative z-40 bg-cyan-950">
            <DownCurveShape color="#053345" />
            <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-12 py-10">

                {/* Main footer */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

                    {/* Company */}
                    <div>
                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold tracking-wide"
                        >
                            <img 
                                src={urlFor(footer?.image)?.url()}
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-white">
                            {footer?.footer_text}
                        </p>

                    </div>

                    <FooterColumns footer={footer} />

                </div>

                <BottomFooter footer={footer} />
            </div>
        </div>
    );
}
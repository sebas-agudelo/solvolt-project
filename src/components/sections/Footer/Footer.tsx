import Link from "next/link";
import {
    FaLinkedinIn,
    FaFacebookF,
    FaInstagram,
    FaPhone,
    FaEnvelope,
    FaLocationDot,
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const services = [
    { label: "Elinstallationer", href: "/services/elinstallationer" },
    { label: "Felsökning", href: "/services/felsokning" },
    { label: "Belysning", href: "/services/belysning" },
    { label: "Elbilsladdning", href: "/services/elbilsladdning" },
    { label: "Solceller", href: "/services/solceller" },
];

const companyLinks = [
    { label: "Om oss", href: "/about" },
    { label: "Nyheter", href: "/news" },
    { label: "Jobba hos oss", href: "/careers" },
    { label: "Kontakta oss", href: "/contact" },
];

export default function Footer() {
    return (
        <footer className="bg-cyan-950 text-white">
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12 lg:py-16">

                {/* Main footer */}
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

                    {/* Company */}
                    <div>
                        <Link
                            href="/"
                            className="inline-block text-2xl font-bold tracking-wide"
                        >
                            SOLVOLT
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-6 text-white">
                            Vi hjälper privatpersoner, företag och BRF
                            med elinstallationer, solceller och laddlösningar.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-5 inline-flex items-center gap-2 rounded-md
                            bg-white px-4 py-3 text-sm font-semibold text-cyan-950
                            transition hover:bg-cyan-100"
                        >
                            Begär offert
                            <FaArrowUpRightFromSquare size={12} />
                        </Link>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
                            Våra tjänster
                        </h3>

                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-sm text-white transition
                                        hover:text-white"
                                    >
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
                            Kontakta oss
                        </h3>

                        <ul className="space-y-4 text-sm text-white">
                            <li className="flex items-start gap-3">
                                <FaPhone className="mt-1 shrink-0" />
                                <a
                                    href="tel:+46123456789"
                                    className="transition hover:text-white"
                                >
                                    012-345 67 89
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaEnvelope className="mt-1 shrink-0" />
                                <a
                                    href="mailto:info@solvolt.se"
                                    className="transition hover:text-white"
                                >
                                    info@solvolt.se
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <FaLocationDot className="mt-1 shrink-0" />
                                <div>
                                    <p>Solgatan 30</p>
                                    <p>POSTNUMMER ORT</p>
                                </div>
                            </li>
                        </ul>

                        <p className="mt-5 text-sm text-white">
                            Mån–fre: 06.00–19.00
                        </p>
                    </div>

                    {/* Company info */}
                    <div>
                        <h3 className="mb-5 text-sm font-bold uppercase tracking-wider">
                            Företaget
                        </h3>

                        <ul className="space-y-3">
                            {companyLinks.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-white
                                        transition hover:text-white"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6">
                            <p className="text-sm font-semibold">
                                Följ oss
                            </p>

                            <div className="mt-3 flex gap-3">
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="rounded-md border border-white/20 p-3
                                    transition hover:bg-white hover:text-cyan-950"
                                >
                                    <FaLinkedinIn size={16} />
                                </a>

                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="rounded-md border border-white/20 p-3
                                    transition hover:bg-white hover:text-cyan-950"
                                >
                                    <FaFacebookF size={16} />
                                </a>

                                <a
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="rounded-md border border-white/20 p-3
                                    transition hover:bg-white hover:text-cyan-950"
                                >
                                    <FaInstagram size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust section */}
                <div className="mt-12 border-t border-white/15 py-6">
                    <p className="text-sm leading-6 text-white">
                        Elinstallationer, service och energilösningar
                        för hem, företag och bostadsrättsföreningar.
                    </p>
                </div>

                {/* Bottom footer */}
                <div className="flex flex-col gap-4 border-t border-white/15 pt-6
                text-xs text-cyan-100/70 sm:flex-row sm:items-center
                sm:justify-between">

                    <p>
                        © {new Date().getFullYear()} SOLVOLT.
                        Alla rättigheter förbehållna.
                    </p>

                    <div className="flex flex-wrap gap-x-5 gap-y-2">
                        <Link
                            href="/privacy"
                            className="transition hover:text-white"
                        >
                            Integritetspolicy
                        </Link>

                        <Link
                            href="/cookies"
                            className="transition hover:text-white"
                        >
                            Cookies
                        </Link>
                    </div>

                    <p>
                        Webbplats skapad av Sebastian Agudelo
                    </p>
                </div>
            </div>
        </footer>
    );
}
import { getHref } from "@/lib/getHref";
import { ROUTES } from "@/lib/routes";
import { FOOTER_QUERY_RESULT } from "@/sanity/types";
import Link from "next/link";

export const FooterColumns = ({ footer }: { footer: FOOTER_QUERY_RESULT }) => {
    const services = footer?.column1?.links;

    const contacts = footer?.column2?.links?.map((key) => {
        const keys = key?.label
        const contact = keys ? footer?.contact?.[keys] : undefined

        return {
            key: keys,
            value: contact,
        }
    })

    const navLinks = footer?.column3?.links?.map((link) => {
        const keys = link?.label
        const route = keys ? ROUTES?.[keys] : undefined;
        if (!route) return null;

        return route
    }).filter(Boolean);

    return (
        <>
            {/* Services */}
            {services && services.length > 0 && (
                <div>
                    <h3 className="text-white mb-5 text-sm font-bold uppercase tracking-wider">
                        {footer?.column1?.columnTitle}
                    </h3>
                    <ul className="space-y-3">
                        {services.map((service) => (
                            <li key={service?.slug}>
                                {
                                    service?.slug ? (
                                        <Link
                                            href={service.slug}
                                            className="text-sm text-white transition"
                                        >
                                            {service.service_title}
                                        </Link>
                                    ) : (
                                        <span>{service.service_title}</span>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Contact */}
            {contacts && contacts.length > 0 && (
                <div>
                    <h3 className="text-white mb-5 text-sm font-bold uppercase tracking-wider">
                        {footer?.column2?.columnTitle}
                    </h3>
                    <ul className="space-y-3">
                        {contacts.map((item) => {
                            const href = item.key && item.value ? getHref(item.key, item.value) : undefined;

                            return (
                                <li key={item.key ?? "footer-contact"}
                                    className="text-sm text-white"
                                >
                                    {href ? (
                                        <Link href={href}>{item.value}</Link>
                                    ) : (
                                        <span>{item.value}</span>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

            {/* Company info */}
            {navLinks && navLinks.length > 0 && (
                <div>
                    <h3 className="text-white mb-5 text-sm font-bold uppercase tracking-wider">
                        {footer?.column3?.columnTitle}
                    </h3>
                    <ul className="space-y-3">
                        {navLinks.map((link) => (
                            <li key={link?.slug}
                            className="text-sm text-white"
                            >
                                {
                                    link?.slug ? (
                                        <Link
                                            href={link.slug}
                                        >
                                            {link?.title}
                                        </Link>
                                    ) : (
                                        <span>{link?.title}</span>
                                    )
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    )
}
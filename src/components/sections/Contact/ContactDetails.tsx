"use client";

import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2"

import { usePathname } from "next/navigation";
import { ContactDetailItem } from "./ContactDetailItem";
import { Company, Contacts } from "@/sanity/types";

type contactProps = {
    contact?: Contacts
    openHours?: Company["openHours"]
}

export const ContactDetails = ({ contact, openHours }: contactProps) => {
    const iconsStyle = "text-2xl text-cyan-950";

    const pathname = usePathname();
    const isContactPage = pathname === "/contact";

    return (
        <div className="flex flex-col items-start gap-8">
            {contact?.phone && (
                <ContactDetailItem
                    href={`tel:${contact?.phone}`}
                    title="Ring oss"
                    text={contact?.phone}
                    icon={<HiOutlinePhone className={iconsStyle} />}
                />
            )}

            {contact?.email && (
                <ContactDetailItem
                    href={`mailto:${contact?.email}`}
                    title="E-post"
                    text={contact?.email}
                    icon={<HiOutlineEnvelope className={iconsStyle} />}
                />
            )}

            {
                isContactPage && (
                    <>
                        {contact?.address && (
                            <ContactDetailItem
                                title="Adress"
                                text={
                                    <>
                                        {contact?.address},
                                        <br />
                                        {contact?.zip} {contact?.city}
                                    </>
                                }
                                icon={<HiOutlineMapPin className={iconsStyle} />}
                            />
                        )}

                        {openHours && openHours?.length > 0 && (
                            <ContactDetailItem
                                title="Öppettider"
                                text={<>
                                    {openHours?.map((hour, index) => (
                                        <span key={index}>
                                            {hour}
                                            <br />
                                        </span>
                                    ))}
                                </>}
                                icon={<HiOutlineClock className={iconsStyle} />}
                            />
                        )}
                    </>
                )
            }
        </div>
    )
}
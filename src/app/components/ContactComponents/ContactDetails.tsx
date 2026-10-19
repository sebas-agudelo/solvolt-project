"use client";

import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineClock, HiOutlineMapPin } from "react-icons/hi2"
import { ContactDetailItem } from "./ContactDetailItem"
import { usePathname } from "next/navigation";

export const ContactDetails = ({ siteSettings }: any) => {
    const iconsStyle = "text-2xl text-cyan-950";

    const pathname = usePathname();
    const isContactPage = pathname === "/contact";

    return (
        <div>
            <ContactDetailItem
                href={`tel:${siteSettings?.contact?.phone}`}
                title="Ring oss"
                text={siteSettings?.contact?.phone}
                icon={<HiOutlinePhone className={iconsStyle} />}
            />

            <ContactDetailItem
                href={`mailto:${siteSettings?.contact?.email}`}
                title="E-post"
                text={siteSettings?.contact?.email}
                icon={<HiOutlineEnvelope className={iconsStyle} />}
            />

            {
                isContactPage && (
                    <>
                        <ContactDetailItem
                            title="Adress"
                            text={
                                <>
                                    {siteSettings?.contact?.address},
                                    <br />
                                    {siteSettings?.contact?.zip} {siteSettings?.contact?.city}
                                </>
                            }
                            icon={<HiOutlineMapPin className={iconsStyle} />}
                        />

                        <ContactDetailItem
                            title="Öppettider"
                            text={siteSettings?.company?.openHours}
                            icon={<HiOutlineClock className={iconsStyle} />}
                        />
                    </>
                )
            }
        </div>
    )
}
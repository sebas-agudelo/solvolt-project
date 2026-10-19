import Link from "next/link"

import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

export const ContactIcons = () => {
    return (
        <div className="mb-16 md:mb-0">
            <p>Fyll i formuläret här bredvid och beskriv ditt ärende så tydligt som möjligt. Vi försöker alltid att svara på våra inkomna ärenden inom 24h.</p>
            <p
                className="text-cyan-950 mb-2">
                    Ring oss
                    
                <Link
                    className="flex items-center text-lg"
                    href="tel:070-000-00-00">
                    <MdOutlinePhoneInTalk
                        className="mr-2" />
                    070-000-00-00
                </Link>
                Vardagar 07:00 – 17:00
            </p>

            <p
                className="text-cyan-950">
                <Link
                    className="flex items-center text-lg"
                    href="mailto:coriente@info.se">
                    <MdOutlineMailOutline
                        className="mr-2" />
                    coriente@info.se
                </Link>
            </p>
        </div>
    )
}
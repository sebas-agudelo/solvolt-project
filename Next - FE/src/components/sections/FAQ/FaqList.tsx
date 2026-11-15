"use client";

import { Faq } from "@/sanity/types";
import { useState } from "react";
import { FaqItems } from "./FaqItem";

export const FaqList = ({ faqFields }: { faqFields: Faq["faqFields"] }) => {
    const [isOpen, setIsOpen] = useState<string | null>(null);

    return (

        <ul className="w-full">
            {faqFields?.map((f) => (
                <FaqItems
                    key={f._key}
                    item={f}
                    isOpen={isOpen === f._key}
                    onToggle={() => setIsOpen(isOpen === f._key ? null : f._key)}
                />
            ))}
        </ul>

    )
}
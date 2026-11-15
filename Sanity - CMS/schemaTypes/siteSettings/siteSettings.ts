import { defineField } from "sanity";

export default {
    name: "siteSettings",
    title: "Site settings",
    type: "document",
    groups: [
        { name: "companyTab", title: "Company" },
        { name: "contactTab", title: "Contact" },
        { name: "benefitsTab", title: "Benefits" },
        { name: "ctaTab", title: "Cta" }

    ],
    fields: [
        defineField({
            name: "company",
            title: "Company",
            type: "company",
            group: "companyTab",
        }),
        defineField({
            name: "contact",
            title: "Contact",
            type: "contacts",
            group: "contactTab",
        }),
        defineField({
            name: "benefits",
            title: "Benefits",
            type: "benefits",
            group: "benefitsTab",
        }),
         defineField({
            name: "cta",
            title: "Ctra",
            type: "ctaSection",
            group: "ctaTab",
        })
    ],
    preview: {
        prepare() {
            return {
                title: "Site settings",
            };
        },
    }
};
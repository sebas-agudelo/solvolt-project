import { defineField } from "sanity";
import { preview } from "sanity-plugin-icon-picker";

export default {
    name: "servicesPage",
    title: "Services page",
    type: "document",

    groups: [
        { name: "heroTab", title: "Hero" },
        { name: "servicesTab", title: "Services" },
    ],

    fields: [
        defineField({
            name: "hero",
            title: "Hero section",
            type: "hero",
            group: "heroTab"
        }),
        defineField({
            name: "services",
            title: "Services section",
            type: "servicesContent",
            group: "servicesTab"
        })
    ],
    preview: {
        prepare() {
            return {
                title: "Services page",
            };
        },
    }
}
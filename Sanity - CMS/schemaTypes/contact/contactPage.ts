import { defineField, defineType } from "sanity";
export default defineType({
    name: "contactPage",
    title: "Contact Page",
    type: "document",
    groups: [
        {
            name: "heroTab", title: "Hero",
        }
    ],
    fields: [
        defineField({
            name: "hero",
            title: "Hero Section",
            type: "hero",
            group: "heroTab"
        })
    ],
    preview: {
        prepare() {
            return {
                title: "Contact Page",
            };
        },
    }
});

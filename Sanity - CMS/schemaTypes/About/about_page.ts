import { defineField, defineType } from "sanity";

export const about_page = defineType({
    name: "about_page",
    title: "About page",
    type: "document",
    groups: [
        {
            name: "heroTab", title: "Hero"
        },
        {
            name: "aboutTab", title: "About"
        },
        {
            name: "employeesTab", title: "Employees"
        }
    ],

    fields: [
        defineField({
            name: "about_hero",
            title: "Hero section",
            type: "hero",
            group: "heroTab"
        }),
        defineField({
            name: "aboutSection",
            title: "About section",
            type: "aboutContent",
            group: "aboutTab"
        }),
        defineField({
            name: "employeesSection",
            title: "Employees section",
            type: "employeesSection",
            group: "employeesTab"
        })
    ],
    preview: {
        prepare() {
            return {
                title: "About section",
            };
        },
    }
});
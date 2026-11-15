import { defineField } from "sanity";

export default {
    name: "ctaSection",
    title: "Cta",
    type: "object",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "* This field is required. The main title displayed above the cta.",
            validation: rule => rule.required().error("Section title is required.")
        }),
        defineField({
            name: "text",
            title: "text",
            type: "text",
            description: "Optional. Add supporting text to encourage visitors to take action.",
        }),
        defineField({
            name: "actionBtn1",
            title: "Primary button text",
            type: "string",
            description: "Optional. Set the text displayed on the primary call-to-action button."
        }),
        defineField({
            name: "actionBtn2",
            title: "Secondary button text",
            type: "string",
            description: "Optional. Set the text displayed on the secondary call-to-action button."
        })
    ]
};
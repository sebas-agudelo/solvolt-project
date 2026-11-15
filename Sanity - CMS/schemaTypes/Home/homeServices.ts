import { defineField } from "sanity";

export default defineField({
    name: "homeServices",
    title: "Home services",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
            description: "* This field is required.",
            validation: rule => rule.required().error("Heading is required.")
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "text",
            description: "Optional. "
        }),
        defineField({
            name: "usps",
            title: "Usps",
            type: 'array',
            description: "Optional. Add up to 4 key benefits or unique selling points that highlight the company's strengths.",
            of: [{ type: "string" }],
            validation: rule => rule.max(4).error("You can add a maximum of 4 USPs.")
        }),
        defineField({
            name: "services",
            title: "Services Section",
            type: "array",
            description: "* This field is required. Select up to 4 services to feature in this section.",
            validation: rule => [
                rule.required().min(1).max(4).error("Please select between 1 and 4 services.")
            ],
            of: [
                {
                    type: "reference",
                    to: [{ type: "services" }],
                },
            ],
        }),
    ]
})
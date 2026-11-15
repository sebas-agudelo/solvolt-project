import { max } from "date-fns";
import { defineField } from "sanity";

export default {
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: "faq_title",
            title: "Title",
            type: "string",
            description: "* This field is required.",
            validation: rule => rule.required().error("Faq title is required.")
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "Optional. Provide an overview to introduce the FAQ section and its purpose.",
            validation: rule => rule.max(1500).error("Max 1500 characters.")
        }),
        defineField({
            name: "faqFields",
            title: "FAQ items",
            type: "array",
            description: "Add the questions and answers you want to display. Least one and max 15 FAQ questions.",
            of: [{ type: "faqItem" }],
            validation: rule => [rule.required().min(1).max(15).error("Please add at least one and max 15 FAQ item.")]
        })
    ]
}
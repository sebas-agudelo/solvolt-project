import { defineType } from "sanity";

export default defineType({
    name: "faqItem",
    title: "FaqItem",
    type: "object",
    fields: [
        {
            name: "faq_item",
            title: "Question",
            type: "string",
            validation: rule => rule.required().error("Question is required.")
        },
        {
            name: "faq_answer",
            title: "Answer",
            type: "text",
            validation: rule => rule.required().error("Answer is required.")

        },
    ]
})
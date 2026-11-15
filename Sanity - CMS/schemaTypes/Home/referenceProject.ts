import { defineField } from "sanity";

export default defineField({
    name: "referenceProject",
    title: "reference project",
    type: "object",
    fields: [
        defineField({
            name: "label",
            title: "Label",
            type: "string",
            description: "Optional. A short introductory label displayed above the section title."
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "* This field is required.",
            validation: rule => rule.required().error("Project title is required.")
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "Optional. An introductory text highlighting the company's work, expertise, and selected projects.",
            validation: rule => rule.max(1500).error("Max 1500 characters.")
        }),
        defineField({
            name: "projects",
            title: "Referensproject section",
            type: "reference",
            description: "Select the project you want to feature on the homepage.",
            to: [{ type: "projects" }]
        }),
    ]
})
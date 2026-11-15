import { defineField, defineType } from "sanity";

export const aboutContent = defineType({
    name: "aboutContent",
    title: "About",
    type: "object",

    fields: [
        defineField({
            name: "about_image",
            type: "image",
            description: "Optional. We recommend adding an image to enhance the visual appeal of this section and create a more engaging experience for visitors.",
            options: {
                accept: "image/*"
            }
        }),
        defineField({
            name: "about_title",
            title: "About title",
            type: "string",
            description: "* This field is required.",
            validation: rule => rule
                .required().error("About title is required.")
        }),
        defineField({
            name: "about_text",
            title: "About text",
            type: "text",
            description: "* This field is required.",
            validation: rule => [
                rule.required().error("About text is required."),
                rule.max(1500).error("Max 1500 characters.")
            ]
        }),
        defineField({
            name: "about_link",
            title: "About link",
            type: "string",
            description: "Optional. Add a link to direct visitors to another page with more information about your company or this section."
        })
    ],
});
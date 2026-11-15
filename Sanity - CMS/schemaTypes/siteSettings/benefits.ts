import { defineField } from "sanity";

export default {
    name: "benefits",
    title: "Benefits",
    type: "object",

    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            description: "This field is required. The main title displayed above the benefits.",
            validation: rule => rule.required().error("Section heading is required.")
        }),
        defineField({
            name: "benefits_array",
            title: "Benefit items",
            type: "array",
            description: "Add the benefits you want to highlight. Each benefit can have a title, an icon, and a description.",
            of: [
                defineField({
                    name: "benefit",
                    title: "Benefit",
                    type: "object",
                    fields: [
                        defineField({
                            name: "benefit_title",
                            title: "Benefit title",
                            type: "string",
                            validation: rule => rule.required().error("Benefit title is required.")
                        }),
                        defineField({
                            name: "benefit_icon",
                            title: "Benefit icon",
                            type: "iconPicker",
                            description: "Optional. We recommend adding an icon to help visitors identify each benefit.",
                            options: {
                                storeSvg: true,
                            },
                        }),
                        defineField({
                            name: "benefit_description",
                            title: "Benefit description",
                            type: "text",
                            validation: rule => [
                                rule.required().error("Benefit description is required."),
                                rule.max(500).error("Max 500 chacractes.")
                            ]
                        })
                    ]
                })
            ]
        })
    ]
};
import { defineField } from "sanity";

export default {
    name: "services",
    title: "Services",
    type: "document",

    fields: [
        defineField(
            {
                name: "service_title",
                title: "Title",
                type: "string",
                description: "* This field is required.",
                validation: rule => rule.required().error("Title is required.")
            }
        ),
        defineField({
            name: "slug",
            type: "slug",
            description: "Click 'Generate' to create a URL-friendly slug from the service title.",
            options: { source: "service_title" },
        }),
        defineField(
            {
                name: "service_description",
                title: "Description",
                type: "text",
                description: "* This field is required.",
                validation: rule => [
                    rule.required().error("Description is required."),
                    rule.max(1500).error("Max 1500 characters.")
                ]
            }
        ),
        defineField(
            {
                name: 'image',
                type: 'image',
                description: "Optional. We recommend adding an image to make the service more visually appealing and help visitors better understand what the service involves.",
                options: { accept: 'image/*' },
                validation: rule => rule.required().warning("We recommend adding an image to make the service more visually appealing and help visitors better understand what the service involves.")
            }
        )
    ]

}
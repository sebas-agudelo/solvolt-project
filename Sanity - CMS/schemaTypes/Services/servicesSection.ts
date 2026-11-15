import { defineField } from "sanity";

export default {
    name: "servicesContent",
    title: "Services content",
    type: "object",

    fields: [
        defineField(
            {
                name: "label",
                title: "Label",
                type: "string",
                description: "Optional. Provides a short introductory label for the services section."
            }
        ),
        defineField(
            {
                name: "title",
                title: "Title",
                type: "string",
                description: "Optional. Defines the main heading that introduces the services offered by the company."
            }
        )
    ]

}
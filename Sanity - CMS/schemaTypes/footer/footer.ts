import { defineField } from "sanity";

export default {
    name: "footer",
    title: "Footer",
    type: "document",

    fields: [
        defineField({
            name: "column1",
            title: "Services column",
            type: "object",
            description: "Optional. Select the services you want to display in this column. We recommend adding up to 5 services to keep the footer clean and easy to navigate.",
            fields: [
                defineField({
                    name: "columnTitle",
                    title: "Title",
                    type: "string"
                }),
                defineField({
                    name: "links",
                    title: "Links",
                    type: "array",
                    of: [{
                        type: "reference",
                        to: [{ type: "services" }]
                    }],
                    validation: rule => rule.max(5).error("You can select a maximum of 5 services.")
                })
            ]
        }),
        defineField({
            name: "column2",
            title: "Contact column",
            type: "object",
            description: "	Optional. Select which contact details you want to display in the footer.",
            fields: [
                defineField({
                    name: "columnTitle",
                    title: "Column title",
                    type: "string"
                }),
                defineField({
                    name: "links",
                    title: "Links",
                    type: "array",
                    of: [
                        defineField({
                            name: "link",
                            title: "Link",
                            type: "object",
                            fields: [
                                defineField({
                                    name: "label",
                                    title: "Page",
                                    type: "string",
                                    options: {
                                        list: [
                                            { title: "Phone", value: "phone" },
                                            { title: "Email", value: "email" },
                                            { title: "City", value: "city" },
                                            { title: "Address", value: "address" },
                                            { title: "Zip code", value: "zip" },
                                        ]
                                    },
                                })
                            ]
                        })
                    ],
                    validation: rule => rule.max(5).error("You can select a maximum of 5 contact details.")
                })
            ]
        }),
        defineField({
            name: "column3",
            title: "Navigation column",
            type: "object",
            description: "Optional. Add the pages you want to display. Drag and drop the items to change their order.",
            fields: [
                defineField({
                    name: "columnTitle",
                    title: "Column title",
                    type: "string"
                }),
                defineField({
                    name: "links",
                    title: "Links",
                    type: "array",
                    of: [
                        defineField({
                            name: "link",
                            title: "Link",
                            type: "object",
                            fields: [
                                defineField({
                                    name: "label",
                                    title: "Page",
                                    type: "string",
                                    options: {
                                        list: [
                                            { title: "Om oss", value: "about" },
                                            { title: "Kundtjänst", value: "contact" },
                                            { title: "Tjänster", value: "services" },
                                        ]
                                    }
                                })
                            ]
                        })
                    ],
                    validation: rule => rule.max(5).error("You can select a maximum of 5 navigation links.")
                })
            ]
        }),
        defineField({
            name: 'image',
            title: "Logo",
            type: 'image',
            description: "Optional. We recommend adding your logo to make this section more engaging and help visitors connect with your company.",
            options: { accept: 'image/*' }
        }),
        defineField({
            name: "footer_text",
            title: "Text",
            type: "text",
            description: "Optional. Add a short description of your company or a message you would like visitors to see in the footer. Maximum 250 characters.",
            validation: rule => rule.max(250).error("Max 250 charectars.")
        }),
        defineField({
            name: "trustText",
            title: "Trust text",
            type: "text",
            description: "Optional. Add a short message that builds trust and reassures visitors about your company, services or commitment to quality. We recommend keeping it concise."
        })
    ],
    preview: {
        prepare() {
            return {
                title: "Footer",
            };
        },
    }
};  
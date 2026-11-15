import { defineField } from "sanity";
export default {
    name: "employees",
    title: "Employees",
    type: "document",
    fields: [
        defineField({
            name: "Fullname",
            title: "Full name",
            type: "string",
            description: "* This field is required.",
            validation: rule => rule.required().error("Fullname is required.")
        }),
        defineField({
            name: "Role",
            title: "Role",
            type: "string",
            description: "* This field is required.",
            validation: rule => rule.required().error("Role is required.")
        }),
        defineField({
            name: 'image',
            type: 'image',
            description: "Optional. We recommend adding an image to make this section more engaging and help visitors connect with your company.",
            options: { accept: 'image/*' }
        })
    ]
}
import { defineField } from "sanity";

export default {
    name: "contacts",
    title: "Contact",
    type: "object",

    fields: [
        defineField({
            name: "contact_title",
            title: "Contact title",
            type: "string",
            description: "Optional. The main heading displayed at the top of the contact section on the website."
        }),
        defineField({
            name: "contact_text",
            title: "Contact text",
            type: "text",
            description: "Optional. A short text displayed below the contact title to introduce the contact information."
        }),
        defineField({
            name: "phone",
            title: "Phone",
            type: "string",
        }),

        defineField({
            name: "email",
            title: "Email",
            type: "email"
        }),
        defineField({
            name: "city",
            title: "City",
            type: "string"
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "string",
        }),
        defineField({
            name: "zip",
            title: "Zip",
            type: "string"
        }),
        defineField({
            name: "emergency_title",
            title: "Emergency title",
            type: "string",
            description: "The heading displayed above the emergency phone number to highlight urgent contact information."
        }),
        defineField({
            name: "emergency_text",
            title: "Emergency text",
            type: "text",
            description: "A short message displayed below the emergency title explaining when to call the emergency number.",
            validation: rule => rule.max(500).error("Max 500 characters.")
        }),
        defineField({
            name: "emergencyNumber",
            title: "Emergency number",
            type: "string",
            description: "The phone number visitors should call for urgent assistance."
        }),
    ],
}
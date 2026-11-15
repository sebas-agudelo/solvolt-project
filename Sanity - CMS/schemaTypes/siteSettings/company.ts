import { defineField } from "sanity";

export default {
    name: "company",
    title: "Company",
    type: "object",

    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: rule => rule
                .required()
                .error("Företagsnamnet är obligatoriskt.")
                .max(50)
                .error("Företagsnamn får endast innehålla 50 tecken")
        }),
        defineField({
            name: "industry",
            title: "Industry",
            type: "string"
        }),
        defineField({
            name: "registrationNumber",
            title: "Registration number",
            type: "string",
            validation: rule => rule
            .required()
            .error("Organisationsnummer är obligatoriskt.")
            .max(11)
            .error("Organisationsnummer får endast innehålla 11 tecken.")
        }),
        defineField({
            name: "openHours",
            title: "Open hours",
            type: "array",
            of: [
                defineField({
                    name: "hour",
                    title: "hour",
                    type: "string"
                })
            ]
        }),
        defineField({
            name: "image",
            title: "Logo",
            type: "image",
            options: { accept: "image/*" },
        }),
    ],
}
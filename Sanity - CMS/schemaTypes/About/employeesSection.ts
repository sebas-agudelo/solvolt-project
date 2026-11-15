import { defineField } from "sanity";
export default {
    name: "employeesSection",
    title: "Employees section",
    type: "object",
    fields: [
        defineField({
            name: "employees_label",
            title: "Label",
            type: "string",
            description: "Optional. A short label displayed above the section title."
        }),
          defineField({
            name: "employees_title",
            title: "Title",
            type: "string",
            description: "The main heading displayed above the employees list."
        })
    ]
}
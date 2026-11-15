import { defineField, defineType } from "sanity";

export const Projects = defineType({
    name: 'projects',
    title: 'Projekter',
    type: 'document',
    fields: [
        defineField({
            name: 'project_title',
            title: "Project Title",
            type: 'string',
            validation: rule => rule
                .required().error("Title is required.")
        }),
        defineField({
            name: 'project_intro',
            title: "Project intro",
            type: 'text',
            validation: rule => [
                rule.required().error("Project intro is required."),
                rule.max(200).error("Max 200 characters.")
            ]

        }),
        defineField({
            name: 'project_description',
            title: "Project Description",
            type: 'text',
            validation: rule => [
                rule.required().error("Project description is required."),
                rule.max(1500).error("Max 1500 characters.")
            ]

        }),
        defineField({
            name: "label",
            title: "Category",
            type: "string",
            description: "Add a category to help visitors understand what this project is about."

        }),
        defineField({
            name: "customer",
            title: "Customer",
            type: "string"
        }),
        defineField({
            name: "city",
            title: "City",
            type: "string"
        }),
        defineField({
            name: "startDatae",
            title: "Start date",
            type: "date",
        }),
        defineField({
            name: "endDate",
            title: "End date",
            type: "date",
        }),
        defineField({
            name: 'project_image',
            title: "Project image",
            type: 'image',
            validation: rule => rule.required().warning("Adding a project image is recommended."),
            description: "Optional. You can publish the project without an image. But adding a project image is recommended.",
            options: {
                accept: 'image/*'
            }
        }),

    ]
})
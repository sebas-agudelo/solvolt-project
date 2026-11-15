import { defineField, defineType } from "sanity";
import { defineVideoField } from "sanity/media-library";

export const hero = defineType({
  name: "hero",
  title: "Hero",
  type: "object",

  fields: [
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        accept: "image/*"
      }
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),

    defineField({
      name: "secondaryText",
      title: "Secondary Text",
      type: "string",
    }),

    defineField({
      name: "primaryButton",
      title: "Primary Button",
      type: "string",
    }),
    defineField({
      name: "secondaryButton",
      title: "Secondary Button",
      type: "string",
    }),
  ],
});
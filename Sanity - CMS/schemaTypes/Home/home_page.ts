import { defineField, defineType } from "sanity";
export default defineType({
  name: "home_page",
  title: "Home Page",
  type: "document",
  groups: [
    {
      name: "heroTab", title: "Hero",
    },
    {
      name: "servicesTab", title: "Services"
    },
    {
      name: "projectsTab", title: "Reference project"
    }
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "hero",
      group: "heroTab"
    }),

    defineField({
      name: "homeServices",
      title: "Services section",
      type: "homeServices",
      group: "servicesTab",
    }),

    defineField({
      name: "homeProject",
      title: "Reference project",
      type: "referenceProject",
      group: "projectsTab",
    }),

  ],
   preview: {
    prepare() {
      return {
        title: "Home Page",
      };
    },
  }
});

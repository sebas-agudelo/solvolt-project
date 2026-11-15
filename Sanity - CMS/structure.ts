// structure.ts
import type { StructureResolver } from "sanity/structure";

export const SINGLETON_TYPES = ["home_page", "servicesPage", "about_page", "faq", "footer"];

export const structure: StructureResolver = (S) =>
    S.list()
        .title("Content")
        .items([
            S.listItem()
                .title("Home Page")
                .id("home_page")
                .child(
                    S.document()
                        .schemaType("home_page")
                        .documentId("home_page")
                ),

            S.listItem()
                .title("Services Page")
                .id("servicesPage")
                .child(
                    S.document()
                        .schemaType("servicesPage")
                        .documentId("servicesPage")
                ),

            S.listItem()
                .title("About Page")
                .id("about_page")
                .child(
                    S.document()
                        .schemaType("about_page")
                        .documentId("about_page")
                ),

            S.listItem()
                .title("FAQ")
                .id("faq")
                .child(
                    S.document()
                        .schemaType("faq")
                        .documentId("faq")
                ),


            S.listItem()
                .title("Footer")
                .id("footer")
                .child(
                    S.document()
                        .schemaType("footer")
                        .documentId("footer")
                ),

            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) => !SINGLETON_TYPES.includes(item.getId() ?? "")
            ),
        ]);
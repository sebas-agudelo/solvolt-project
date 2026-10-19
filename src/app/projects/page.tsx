import { urlFor } from "@/lib/urlFor";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";

export default async function Projects() {
    const PROJECTS_QUERY = `
    *[
        _type == "projects"
    ]`;
    const projects = await client.fetch<SanityDocument[]>(PROJECTS_QUERY)

    return (
        <div>
            <h1>Våra projekt</h1>
            {projects.map((p: any) => (
                <div key={p._id}>
                    <div>
                        <img src={urlFor(p.image).url()} alt="" />
                    </div>
                    <h2>{p.header}</h2>
                    <p>{p.description}</p>
                    <p>{p.status}</p>

                </div>
            ))}
        </div>
    )
}
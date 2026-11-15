import servicesQuery from "@/sanity/servicesQuery"

export default async function ServicePage({params}: {params: Promise<{slug: string}>}){
    const {slug} = await params
    const service = await servicesQuery.servicePage(slug);
    
    return(
        <div>
            <p>Service {slug}</p>
        </div>
    )
}
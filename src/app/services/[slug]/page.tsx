import servicesQuery from "@/sanity/servicesQuery"

export default async function ServicePage({params}: {params: Promise<{slug: string}>}){
    const {slug} = await params
    const service = await servicesQuery.servicePage(slug);
    console.log("One service: ",service);
    
    return(
        <div>
            <p>Service {slug}</p>
        </div>
    )
}
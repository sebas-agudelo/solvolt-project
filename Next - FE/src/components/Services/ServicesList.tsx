import { Services } from "@/sanity/types";
import { ServiceCard } from "./ServiceCard"

type servicesListProps = {
    servives?: Services[] | null
    columns: number
}

export const ServicesList = ({ servives, columns }: servicesListProps) => {
    const columnsClasses: Record<number, string> = {
        2: "w-full lg:w-[calc(50%-10px)]",
        4: "w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-15px)]",
    }

    return (
        <div className="flex flex-wrap gap-5">
            {
                servives?.map((service) => (
                    <div
                        key={service._id}
                        className={columnsClasses[columns]}>
                        <ServiceCard service={service} />
                    </div>
                ))
            }
        </div>
    )
}
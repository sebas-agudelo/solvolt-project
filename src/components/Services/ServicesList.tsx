import { Home_services, Services } from "@/sanity/types";
import { ServiceCard } from "./ServiceCard"

type servicesListProps = {
    data?: Services[] | null
    columns: number
}

export const ServicesList = ({ data, columns }: servicesListProps) => {
    const ii: any = {
        2: "w-full lg:w-[calc(50%-10px)]",
        4: "w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-15px)]",
    }

    console.log("Services list: ", data);

    return (
        <div className="flex flex-wrap gap-5">
            {
                data?.map((service) => (
                    <div
                        key={service?._id}
                        className={ii[columns]}>
                        <ServiceCard service={service} />
                    </div>
                ))
            }
        </div>
    )
}
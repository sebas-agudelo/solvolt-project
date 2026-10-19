import { ServiceCard } from "./ServiceCard"

export const ServicesList = ({ data, columns }: any) => {
    const ii: any = {
          2: "w-full lg:w-[calc(50%-10px)]",
          4: "w-full md:w-[calc(50%-15px)] lg:w-[calc(25%-15px)]",
    }
    return (
        <div className="flex flex-wrap gap-5">
            {
                data?.map((service: any) => (
                    <div className={ii[columns]}>
                        <ServiceCard service={service} column={columns} />
                    </div>
                ))
            }
        </div>
    )
}
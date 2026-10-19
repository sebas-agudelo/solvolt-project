import { IoArrowForwardOutline } from "react-icons/io5";

export const ServiceCard = ({ service }: any) => {
    return (
        <div className="group flex items-center justify-between gap-2 rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md md:flex-col md:items-start md:justify-start cursor-pointer">
            <h3 className="text-base font-semibold text-cyan-950 transition-colors group-hover:text-cyan-700">
                {service?.heading}
            </h3>

            <div className="flex items-center gap-2 text-cyan-950 transition-colors group-hover:text-cyan-700">
                <span className="hidden text-sm md:inline">
                    {service?.button}
                </span>
                <IoArrowForwardOutline className="transition-transform group-hover:translate-x-1" />
            </div>
        </div>
    );
};
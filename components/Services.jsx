import ServiceCard from "components/ServiceCard";
import servicesDetails from "@/data/services-details";
export default function Services() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] md:grid-cols-[repeat(auto-fill,_minmax(360px,_1fr))]  gap-2 py-8'>
            {servicesDetails.map((service, index) => {
                return <ServiceCard key={index} service={service} />;
            })}
        </div>
    );
}

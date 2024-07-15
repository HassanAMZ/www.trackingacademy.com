import ServiceCard from "@/components/global/ServiceCard";
import servicesDetails from "@/data/services-details";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function Page() {
  return (
    <section>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4">
        {servicesDetails.map((service, index) => {
          return (
            <div key={index} className="flex flex-col gap-1">
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

import ServiceCard from "@/components/global/ServiceCard";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import servicesDetails from "@/data/services-details";
export default function Hero() {
  return (
    <div className="rounded-lg">
      <ContainerLayout>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {servicesDetails.slice(0, 4).map((service, index) => {
            return (
              <div key={index} className="flex flex-col gap-1">
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </ContainerLayout>
    </div>
  );
}

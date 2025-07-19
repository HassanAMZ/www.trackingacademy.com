import { services } from "@/data/services";

const getServicesByKeys = (keys: string[]) => {
  return services.filter((service) => keys.includes(service.id) || keys.includes(service.name));
};

export default getServicesByKeys;

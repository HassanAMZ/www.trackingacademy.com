import ContainerLayout from "@/components/layouts/ContainerLayout";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
 return <ContainerLayout>{children}</ContainerLayout>;
}

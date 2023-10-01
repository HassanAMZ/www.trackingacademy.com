import ContainerLayout from "@/components/layouts/ContainerLayout";
import { ReactNode } from "react";

export const metadata = {
 title: "Client's Portfolio - ShahzadaAliHassan",
 description: `Become a part of the clientele and master your data`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};

export default function Layout({ children }: { children: ReactNode }) {
 return <ContainerLayout>{children}</ContainerLayout>;
}

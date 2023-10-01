import ContainerLayout from "@/components/layouts/ContainerLayout";
import { ReactNode } from "react";

export const metadata = {
 title: "Services we Offer - ShahzadaAliHassan",
 description: `helping businesses improve their data using better tracking practices`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};
export default function Layout({ children }: { children: ReactNode }) {
 return <ContainerLayout>{children}</ContainerLayout>;
}

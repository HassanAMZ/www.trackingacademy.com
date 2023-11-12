import { ReactNode } from "react";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export const metadata = {
 title: "Tools - ShahzadaAliHassan",
 description: `Tools Build for Analysts to make the life easier.`,
};

export default function Layout({ children }: { children: ReactNode }) {
 return <ContainerLayout>{children}</ContainerLayout>;
}

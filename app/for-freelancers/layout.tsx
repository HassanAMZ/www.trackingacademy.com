import React from "react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
 return <React.Fragment>{children}</React.Fragment>;
}

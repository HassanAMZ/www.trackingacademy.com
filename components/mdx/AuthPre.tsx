"use client";
import { PreProps } from "@/types/index";
import { Suspense, useRef, useState } from "react";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Pre from "./Pre";

const AuthPre: React.FC<PreProps> = ({ language, children }) => {
 const textInput = useRef<HTMLDivElement>(null);
 const [copied, setCopied] = useState(false);

 const onCopy = () => {
  setCopied(true);
  navigator.clipboard.writeText(textInput.current!.textContent!);
  setTimeout(() => {
   setCopied(false);
  }, 2000);
 };

 return (
  <AuthenticatedLayout>
   <Pre language={language} children={children} />
  </AuthenticatedLayout>
 );
};

export default AuthPre;

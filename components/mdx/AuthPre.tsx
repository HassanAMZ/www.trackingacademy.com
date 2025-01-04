"use client";
import { PreProps } from "@/types/index";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Pre from "./Pre";

const AuthPre: React.FC<PreProps> = ({ language, children }) => {
  return (
    <AuthenticatedLayout>
      <Pre language={language}>{children}</Pre>
    </AuthenticatedLayout>
  );
};

export default AuthPre;

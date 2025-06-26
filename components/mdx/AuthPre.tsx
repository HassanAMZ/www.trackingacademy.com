"use client";

import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import Pre from "./Pre";

type PreProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLPreElement>, HTMLPreElement> & {
  language?: string;
};

const AuthPre: React.FC<PreProps> = ({ language, children }) => {
  return (
    <AuthenticatedLayout>
      <Pre language={language}>{children}</Pre>
    </AuthenticatedLayout>
  );
};

export default AuthPre;

import React from "react";
import datalayerCode from "@/data/datalayer-code";
import AuthPre from "../mdx/AuthPre";

interface DataLayerCodeProps {
 type: keyof typeof datalayerCode;
 subType: keyof (typeof datalayerCode)[keyof typeof datalayerCode];
}

const DataLayerCode: React.FC<DataLayerCodeProps> = ({ type, subType }) => {
 const codeSnippet = datalayerCode[type][subType] || "";
 return (
  <AuthPre>
   <code>{codeSnippet}</code>
  </AuthPre>
 );
};

export default DataLayerCode;

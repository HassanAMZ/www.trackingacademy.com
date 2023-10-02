import { ExpertInfoProps } from "@/types/index";
import Divider from "@/components/home/Divider";
import CustomHeader from "@/components/home/CustomHeader";
import React from "react";

const ExpertInfo: React.FC<ExpertInfoProps> = ({ title, description }) => {
 return (
  <React.Fragment>
   <CustomHeader text={title} />
   <div className='pt-2'>
    <Divider />
    <Divider />
   </div>
   <div className='text-left py-2'>{description}</div>
  </React.Fragment>
 );
};

export default ExpertInfo;

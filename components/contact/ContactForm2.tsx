"use client";
import React, { useState } from "react";

interface ContactFormProps {
 isOpen: boolean;
 closeForm: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, closeForm }) => {
 const [projectType, setProjectType] = useState("");
 const [otherProjectType, setOtherProjectType] = useState("");

 const handleProjectTypeChange = (type: React.SetStateAction<string>) => {
  setProjectType(type);
  if (type !== "other") {
   setOtherProjectType("");
  }
 };

 return (
  <form
   className={`flex flex-col  gap-5 z-10 contactForm fixed top-0 right-0 w-4/5 h-full bg-black pt-[15vh] p-10 transition-transform ${
    isOpen ? "translate-x-0" : "translate-x-full"
   }`}>
   <input type='text' placeholder='Your Name' />
   <input type='email' placeholder='Your Email' />
   <input type='text' placeholder='Company Name' />

   <div>
    {["Brand", "Website", "Art Direction", "Campaign", "Other"].map((type) => (
     <button
      key={type}
      type='button'
      onClick={() => handleProjectTypeChange(type)}
      className={projectType === type ? "selected" : ""}>
      {type}
     </button>
    ))}
   </div>

   {projectType === "other" && (
    <input
     type='text'
     placeholder='Other Project Type'
     value={otherProjectType}
     onChange={(e) => setOtherProjectType(e.target.value)}
    />
   )}

   <textarea placeholder='Project Description'></textarea>

   <select>
    <option>Expected Budget</option>
    {/* Budget options */}
   </select>

   <select>
    <option>Expected Timeline</option>
    {/* Timeline options */}
   </select>

   <input type='text' placeholder='How did you find us?' />
   <input type='text' placeholder='Favorite Movie or Album' />

   <button type='submit'>Submit</button>
  </form>
 );
};

export default ContactForm;

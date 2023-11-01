"use client";
import React, { useState, useRef } from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import baseColors from "@/data/base-colors";
import {
 IsWebsiteURLValid,
 GenerateUTM,
 CanGenerateUTM,
 CopyToClipboard,
 GetErrorMessages,
} from "@/types/index";
import InputField from "@/components/tools/InputField";
import { ButtonData, ButtonProps } from "@/types/index";
import SelectionButton from "@/components/global/SelectionButton";
import { Paragraphlg } from "@/components/typography/Heading";
const Page: React.FC = () => {
 const [websiteURL, setWebsiteURL] = useState<string>("");
 const [campaignID, setCampaignID] = useState<string>("");
 const [campaignSource, setCampaignSource] = useState<string>("");
 const [campaignMedium, setCampaignMedium] = useState<string>("");
 const [campaignName, setCampaignName] = useState<string>("");
 const [campaignTerm, setCampaignTerm] = useState<string>("");
 const [campaignContent, setCampaignContent] = useState<string>("");
 const [copied, setCopied] = React.useState(false);
 const [selectedMode, setSelectedMode] = useState<
  "manual" | "facebook" | "pinterest" | "google" | "tiktok"
 >("manual");
 const [selectedButton, setSelectedButton] = useState<number>(1);

 const buttonsData: ButtonData[] = [
  { id: 1, text: "Manual" },
  { id: 2, text: "Facebook" },
  { id: 3, text: "Pinterest" },
  { id: 4, text: "Google" },
  { id: 5, text: "TikTok" },
 ];

 const textareaRef = useRef<HTMLTextAreaElement | null>(null);

 const handleCopy = () => {
  copyToClipboard();

  setCopied(true);

  setTimeout(() => {
   setCopied(false);
  }, 2000); // Reset after 2 seconds
 };
 const isWebsiteURLValid: IsWebsiteURLValid = (url) => {
  try {
   new URL(url);
   return true;
  } catch (_) {
   return false;
  }
 };

 const generateUTM: GenerateUTM = () => {
  const params = [];
  if (campaignSource) params.push(`utm_source=${campaignSource}`);
  if (campaignMedium) params.push(`utm_medium=${campaignMedium}`);
  if (campaignName) params.push(`utm_campaign=${campaignName}`);
  if (campaignID) params.push(`utm_id=${campaignID}`);
  if (campaignTerm) params.push(`utm_term=${campaignTerm}`);
  if (campaignContent) params.push(`utm_content=${campaignContent}`);

  return `${websiteURL}?${params.join("&")}`;
 };

 const canGenerateUTM: CanGenerateUTM = () => {
  return isWebsiteURLValid(websiteURL) && !!campaignSource && !!campaignMedium;
 };

 const copyToClipboard: CopyToClipboard = async () => {
  if (textareaRef.current) {
   try {
    await navigator.clipboard.writeText(textareaRef.current.value);
    // Successfully copied to clipboard
   } catch (err) {
    // Handle error if needed (e.g., show a message to the user)
   }
  }
 };

 const getErrorMessages: GetErrorMessages = () => {
  const errors: string[] = [];

  // Check if all required fields are empty
  const allFieldsEmpty = !websiteURL && !campaignSource && !campaignMedium;
  if (allFieldsEmpty) return errors;

  if (!isWebsiteURLValid(websiteURL) && websiteURL)
   errors.push("Invalid Website URL.");
  if (!campaignSource) errors.push("Campaign Source is required.");
  if (!campaignMedium) errors.push("Campaign Medium is required.");

  return errors;
 };

 // This handler will populate fields based on the selected mode
 const handleModeChange = (
  mode: "manual" | "facebook" | "pinterest" | "google" | "tiktok"
 ) => {
  setSelectedMode(mode);
  switch (mode) {
   case "facebook":
    setCampaignID("{{ad.id}}");
    setCampaignSource("facebook");
    setCampaignMedium("paidsocial");
    setCampaignName("{{campaign.name}}");
    setCampaignContent("{{adset.name}}");
    setCampaignTerm("{{ad.name}}");
    break;
   case "pinterest":
    setCampaignSource("pinterest");
    setCampaignMedium("paidsocial");
    setCampaignName("{campaignname}");
    setCampaignID("{campaignid}");
    setCampaignTerm("{adgroupname}");
    setCampaignContent("{adid}");
    break;
   case "google":
    setCampaignID("{campaignid}");
    setCampaignSource("google");
    setCampaignMedium("cpc");
    setCampaignTerm("{adgroupid}");
    setCampaignContent("{creative}");
    break;
   case "tiktok":
    setCampaignSource("tiktok");
    setCampaignMedium("paidsocial");
    setCampaignName("__CAMPAIGN_NAME__");
    setCampaignID("__AID__");
    setCampaignTerm("__AID_NAME__");
    setCampaignContent("__CID_NAME__");
    break;
   default:
    resetUTMFields(); // This will reset all the UTM fields
    break;
  }
 };
 const resetUTMFields = () => {
  setCampaignID("");
  setCampaignSource("");
  setCampaignMedium("");
  setCampaignName("");
  setCampaignTerm("");
  setCampaignContent("");
 };

 return (
  <ContainerLayout className='flex flex-col shadow-md rounded-lg'>
   {/* Manual button */}
   {buttonsData.map(
    (button, index) =>
     button.text.toLowerCase() === "manual" && (
      <div key={index} className='w-full mb-2'>
       <SelectionButton
        isSelected={selectedButton === button.id}
        color={baseColors.tools.primary}
        onClick={() => {
         setSelectedButton(button.id);
         handleModeChange(button.text.toLowerCase() as any);
        }}>
        {button.text}
       </SelectionButton>
      </div>
     )
   )}

   {/* Other buttons */}
   <div className='flex flex-col md:flex-row md:space-x-2 gap-2 md:gap-0'>
    {buttonsData.map(
     (button, index) =>
      button.text.toLowerCase() !== "manual" && (
       <div key={index} className='flex-1'>
        <SelectionButton
         isSelected={selectedButton === button.id}
         color={baseColors.tools.primary}
         onClick={() => {
          setSelectedButton(button.id);
          handleModeChange(button.text.toLowerCase() as any);
         }}>
         {button.text}
        </SelectionButton>
       </div>
      )
    )}
   </div>

   <div className='space-y-4 py-4'>
    <InputField
     required
     label='Website URL *'
     value={websiteURL}
     onChange={setWebsiteURL}
     type='url'
    />
    <InputField
     label='Campaign ID'
     value={campaignID}
     onChange={setCampaignID}
    />
    <InputField
     required
     label='Campaign Source *'
     value={campaignSource}
     onChange={setCampaignSource}
    />
    <InputField
     required
     label='Campaign Medium *'
     value={campaignMedium}
     onChange={setCampaignMedium}
    />
    <InputField
     label='Campaign Name'
     value={campaignName}
     onChange={setCampaignName}
    />
    <InputField
     label='Campaign Term'
     value={campaignTerm}
     onChange={setCampaignTerm}
    />
    <InputField
     label='Campaign Content'
     value={campaignContent}
     onChange={setCampaignContent}
    />
   </div>
   <div className='rounded-lg space-y-2'>
    <span>Generated UTM Link:</span>
    <textarea
     ref={textareaRef}
     readOnly
     value={generateUTM()}
     rows={4}
     className={`p-1 border-2 border-gray-500 rounded-md bg-transparent peer h-full w-full outline-none text-sm pr-2 ${
      !canGenerateUTM() ? "opacity-50" : ""
     }`}
    />
    {!canGenerateUTM() && (
     <div className='text-red-500'>
      {getErrorMessages().map((error, index) => (
       <p key={index}>{error}</p>
      ))}
     </div>
    )}
    <button
     disabled={!canGenerateUTM()}
     onClick={handleCopy}
     style={{
      backgroundColor: canGenerateUTM() ? baseColors.tools.primary : undefined,
     }}
     className={`p-2 w-full rounded-md dark:text-white transition ${
      canGenerateUTM()
       ? "hover:animate-pulse dark:hover:bg-blue-800"
       : "bg-gray-300 cursor-not-allowed dark:bg-gray-700"
     } ${copied ? "animate-shake" : ""} dark:text-gray-200`}>
     <Paragraphlg className='!font-bold'>
      {copied ? "Copied!" : "Copy to Clipboard"}
     </Paragraphlg>
    </button>
   </div>
  </ContainerLayout>
 );
};

export default Page;
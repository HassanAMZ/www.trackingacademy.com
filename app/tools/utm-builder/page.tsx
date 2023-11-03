"use client";
import React, { useState, useRef } from "react";

import baseColors from "@/data/base-colors";
import {
 IsWebsiteURLValid,
 CanGenerateUTM,
 CopyToClipboard,
 GetErrorMessages,
} from "@/types/index";
import InputField from "@/components/tools/InputField";
import { ButtonData } from "@/types/index";
import {
 Heading4xl,
 Paragraphlg,
 Paragraphmd,
} from "@/components/typography/Heading";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";

import Link from "next/link";

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

 const generateUTM = (): string => {
  const encodeParam = (param: string) => {
   if (selectedMode === "manual") {
    return encodeURIComponent(param);
   } else {
    return param
     .split("")
     .map((char) =>
      ["{", "}", "_"].includes(char) ? char : encodeURIComponent(char)
     )
     .join("");
   }
  };

  const params = [];
  if (campaignSource) params.push(`utm_source=${encodeParam(campaignSource)}`);
  if (campaignMedium) params.push(`utm_medium=${encodeParam(campaignMedium)}`);
  if (campaignName) params.push(`utm_campaign=${encodeParam(campaignName)}`);
  if (campaignID) params.push(`utm_id=${encodeParam(campaignID)}`);
  if (campaignTerm) params.push(`utm_term=${encodeParam(campaignTerm)}`);
  if (campaignContent)
   params.push(`utm_content=${encodeParam(campaignContent)}`);
  if (selectedMode === "google") params.push(`gclid={gclid}`);

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
    resetUTMFields();
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
  <section className='flex flex-col shadow-md rounded-lg'>
   <div className='pt-12 pb-2 flex flex-col text-center justify-center items-center space-y-6'>
    <div className='pt-4 pb-2 space-y-4'>
     <Heading4xl className=''>Master UTM Parameters in Minutes!</Heading4xl>
     <Paragraphmd className=''>
      Wave goodbye to marketing mysteries! Discover the secrets of tracking your
      digital campaigns with precision. Let's decode UTM parameters together.
     </Paragraphmd>

     <div className='flex gap-x-4 justify-center'>
      <Link
       href='#utm-builder'
       className='font-bold rounded-md py-4 px-6 dark:text-white text-gray-800'
       style={{ backgroundColor: baseColors.tools.primary }}>
       Start Creating UTMs
      </Link>
      <Link
       href='/tags/utm-parameters/'
       className='font-bold border-2 hidden md:block rounded-md py-4 px-6 dark:text-white text-gray-800'
       style={{ borderColor: baseColors.tools.primary }}>
       Read the Blog
      </Link>
     </div>
    </div>

    {/* <Paragraphxs className='text-gray-500 '>
     Got questions? Our step-by-step guide and UTM builder are here to help you
     sail smoothly through the seas of campaign tracking!
    </Paragraphxs> */}

    <div className='w-full'>
     <YoutubeEmbed embedId='RmB2mSfkdEo' />
    </div>
   </div>

   <div className='flex flex-col md:flex-row gap-2' id='utm-builder'>
    {buttonsData.map((button) => (
     <div key={button.text} className='w-full'>
      <button
       className={`
       border-2 border-gray-600 dark:border-gray-300 p-2 w-full transition font-semibold duration-300 ease-in-out rounded-md 
        ${
         selectedButton === button.id
          ? ` text-gray-50 darktext-gray-800  dark:text-gray-800 bg-gray-50`
          : ` text-gray-600  dark:text-gray-300 hover:bg-gray-500 hover:text-gray-50 `
        }
      `}
       //  style={{ backgroundColor: baseColors.tools.primary }}
       onClick={() => {
        setSelectedButton(button.id);
        handleModeChange(button.text.toLowerCase() as any);
       }}>
       {button.text}
      </button>
     </div>
    ))}
   </div>

   <div className='space-y-2 py-4'>
    <InputField
     required
     label='Website URL '
     value={websiteURL}
     onChange={setWebsiteURL}
     type='url'
     id='website-url'
     helperText='The full website URL (e.g., https://www.example.com)'
    />
    <InputField
     label='Campaign ID'
     value={campaignID}
     onChange={setCampaignID}
     id='campaign-id'
     helperText='The unique ads campaign ID (e.g., V7FHcp8weDA)'
    />
    <InputField
     required
     label='Campaign Source '
     value={campaignSource}
     onChange={setCampaignSource}
     id='campaign-source'
     helperText='The referrer (e.g., google, newsletter)'
    />
    <InputField
     required
     label='Campaign Medium '
     value={campaignMedium}
     onChange={setCampaignMedium}
     id='campaign-medium'
     helperText='Marketing medium (e.g., cpc, banner, email)'
    />
    <InputField
     required
     label='Campaign Name '
     value={campaignName}
     onChange={setCampaignName}
     id='campaign-name'
     helperText='Product, promo code, or slogan (e.g., spring_sale). One of campaign name or campaign id is required.'
    />
    <InputField
     label='Campaign Term'
     value={campaignTerm}
     onChange={setCampaignTerm}
     id='campaign-term'
     helperText='Identify the paid keywords (e.g., V7FHcp8weDA)'
    />
    <InputField
     label='Campaign Content'
     value={campaignContent}
     onChange={setCampaignContent}
     id='campaign-content'
     helperText='Use to differentiate ads (e.g., Use to differentiate between similar ads in the same campaign)'
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
  </section>
 );
};

export default Page;

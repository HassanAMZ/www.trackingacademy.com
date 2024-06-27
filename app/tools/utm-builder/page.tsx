'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  IsWebsiteURLValid,
  CanGenerateUTM,
  CopyToClipboard,
  GetErrorMessages,
} from '@/types/index';
import InputField from '@/components/tools/InputField';
import { ButtonData } from '@/types/index';
import ToolsHeroSection from '@/components/tools/ToolsHeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TypographyH1 from '@/components/ui/typography-h1';
import TypographyP from '@/components/ui/typography-p';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/components/ui/textarea';

const Page: React.FC = () => {
  const [websiteURL, setWebsiteURL] = useState<string>('');
  const [campaignID, setCampaignID] = useState<string>('');
  const [campaignSource, setCampaignSource] = useState<string>('');
  const [campaignMedium, setCampaignMedium] = useState<string>('');
  const [campaignName, setCampaignName] = useState<string>('');
  const [campaignTerm, setCampaignTerm] = useState<string>('');
  const [campaignContent, setCampaignContent] = useState<string>('');
  const [copied, setCopied] = React.useState(false);
  const [selectedMode, setSelectedMode] = useState<
    'manual' | 'facebook' | 'pinterest' | 'google' | 'tiktok'
  >('manual');
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const buttonsData: ButtonData[] = [
    { id: 1, text: 'Manual' },
    { id: 2, text: 'Facebook' },
    { id: 3, text: 'Pinterest' },
    { id: 4, text: 'Google' },
    { id: 5, text: 'TikTok' },
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
      if (selectedMode === 'manual') {
        return encodeURIComponent(param);
      } else {
        return param
          .split('')
          .map((char) =>
            ['{', '}', '_'].includes(char) ? char : encodeURIComponent(char)
          )
          .join('');
      }
    };

    const params = [];
    if (campaignSource)
      params.push(`utm_source=${encodeParam(campaignSource)}`);
    if (campaignMedium)
      params.push(`utm_medium=${encodeParam(campaignMedium)}`);
    if (campaignName) params.push(`utm_campaign=${encodeParam(campaignName)}`);
    if (campaignID) params.push(`utm_id=${encodeParam(campaignID)}`);
    if (campaignTerm) params.push(`utm_term=${encodeParam(campaignTerm)}`);
    if (campaignContent)
      params.push(`utm_content=${encodeParam(campaignContent)}`);
    if (selectedMode === 'google') params.push(`gclid={gclid}`);

    return `${websiteURL}?${params.join('&')}`;
  };

  const canGenerateUTM: CanGenerateUTM = () => {
    return (
      isWebsiteURLValid(websiteURL) && !!campaignSource && !!campaignMedium
    );
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
    const allFieldsEmpty = !websiteURL && !campaignSource && !campaignMedium;
    if (allFieldsEmpty) return errors;
    if (!isWebsiteURLValid(websiteURL) && websiteURL)
      errors.push('Invalid Website URL.');
    if (!campaignSource) errors.push('Campaign Source is required.');
    if (!campaignMedium) errors.push('Campaign Medium is required.');
    return errors;
  };

  const handleModeChange = (
    mode: 'manual' | 'facebook' | 'pinterest' | 'google' | 'tiktok'
  ) => {
    setSelectedMode(mode);
    switch (mode) {
      case 'facebook':
        setCampaignID('{{ad.id}}');
        setCampaignSource('facebook');
        setCampaignMedium('paidsocial');
        setCampaignName('{{campaign.name}}');
        setCampaignContent('{{adset.name}}');
        setCampaignTerm('{{ad.name}}');
        break;
      case 'pinterest':
        setCampaignID('{campaignid}');
        setCampaignSource('pinterest');
        setCampaignMedium('paidsocial');
        setCampaignName('{campaignname}');
        setCampaignTerm('{adgroupname}');
        setCampaignContent('{adid}');
        break;
      case 'google':
        setCampaignID('{campaignid}');
        setCampaignSource('google');
        setCampaignMedium('cpc');
        setCampaignName('{campaignid}');
        setCampaignTerm('{adgroupid}');
        setCampaignContent('{creative}');
        break;
      case 'tiktok':
        setCampaignSource('tiktok');
        setCampaignMedium('paidsocial');
        setCampaignName('__CAMPAIGN_NAME__');
        setCampaignID('__AID__');
        setCampaignTerm('__AID_NAME__');
        setCampaignContent('__CID_NAME__');
        break;
      default:
        resetUTMFields();
        break;
    }
  };

  const resetUTMFields = () => {
    setCampaignID('');
    setCampaignSource('');
    setCampaignMedium('');
    setCampaignName('');
    setCampaignTerm('');
    setCampaignContent('');
  };

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem('websiteURL', websiteURL);
      localStorage.setItem('campaignID', campaignID);
      localStorage.setItem('campaignSource', campaignSource);
      localStorage.setItem('campaignMedium', campaignMedium);
      localStorage.setItem('campaignName', campaignName);
      localStorage.setItem('campaignTerm', campaignTerm);
      localStorage.setItem('campaignContent', campaignContent);
      localStorage.setItem('selectedMode', selectedMode);
      localStorage.setItem('selectedButton', selectedButton.toString());
    }
  }, [
    websiteURL,
    campaignID,
    campaignSource,
    campaignMedium,
    campaignName,
    campaignTerm,
    campaignContent,
    selectedMode,
    selectedButton,
  ]);

  useEffect(() => {
    const savedWebsiteURL = localStorage.getItem('websiteURL') || '';
    const savedCampaignID = localStorage.getItem('campaignID') || '';
    const savedCampaignSource = localStorage.getItem('campaignSource') || '';
    const savedCampaignMedium = localStorage.getItem('campaignMedium') || '';
    const savedCampaignName = localStorage.getItem('campaignName') || '';
    const savedCampaignTerm = localStorage.getItem('campaignTerm') || '';
    const savedCampaignContent = localStorage.getItem('campaignContent') || '';
    const savedSelectedMode = localStorage.getItem('selectedMode') || 'manual';
    const savedSelectedButton = localStorage.getItem('selectedButton') || '1';

    setWebsiteURL(savedWebsiteURL);
    setCampaignID(savedCampaignID);
    setCampaignSource(savedCampaignSource);
    setCampaignMedium(savedCampaignMedium);
    setCampaignName(savedCampaignName);
    setCampaignTerm(savedCampaignTerm);
    setCampaignContent(savedCampaignContent);
    setSelectedMode(
      savedSelectedMode as
        | 'manual'
        | 'facebook'
        | 'pinterest'
        | 'google'
        | 'tiktok'
    );
    setSelectedButton(parseInt(savedSelectedButton, 10));
    setIsInitialLoad(false);
  }, []);

  return (
    <section className='grid gap-2 grid-cols-1 lg:grid-cols-2 rounded-lg pb-8 place-content-center'>
      <div className='col-start-1 row-start-1'>
        <ToolsHeroSection />
      </div>

      <div className=' lg:col-start-2 lg:row-start-1 lg:row-span-3'>
        <div className='flex flex-row flex-wrap gap-4 pt-4' id='utm-builder'>
          {buttonsData.map((button) => (
            <Button
              key={button.text}
              variant={selectedButton === button.id ? 'default' : 'outline'}
              onClick={() => {
                setSelectedButton(button.id);
                handleModeChange(button.text.toLowerCase() as any);
              }}>
              {button.text}
            </Button>
          ))}
        </div>
        <div className='space-y-4 py-4'>
          <InputField
            required
            label='Website URL'
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
            label='Campaign Source'
            value={campaignSource}
            onChange={setCampaignSource}
            id='campaign-source'
            helperText='The referrer (e.g., google, newsletter)'
          />
          <InputField
            required
            label='Campaign Medium'
            value={campaignMedium}
            onChange={setCampaignMedium}
            id='campaign-medium'
            helperText='Marketing medium (e.g., cpc, banner, email)'
          />
          <InputField
            required
            label='Campaign Name'
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
        <Separator className='my-6' />
      </div>
      <div className=' lg:col-start-1 lg:row-start-2'>
        <Card className='rounded-t-lg py-4'>
          <CardContent className='space-y-4'>
            <TypographyH1>Generated UTM Link</TypographyH1>
            <Textarea
              ref={textareaRef}
              readOnly
              value={generateUTM()}
              rows={4}
              className={cn(
                'p-3 rounded-md border',
                !canGenerateUTM() && 'opacity-50'
              )}
            />
            {!canGenerateUTM() && (
              <div className='text-red-500 font-medium'>
                {getErrorMessages().map((error, index) => (
                  <TypographyP key={index}>{error}</TypographyP>
                ))}
              </div>
            )}
            <Button
              disabled={!canGenerateUTM()}
              onClick={handleCopy}
              className={cn(copied ? 'animate-shake' : '')}>
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Page;

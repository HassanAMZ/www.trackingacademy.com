'use client';

import Navbar from '@/components/global/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import {
  Check,
  Copy,
  Facebook,
  Globe,
  Instagram,
  MessageSquare,
  MousePointerClick,
} from 'lucide-react';
import React, { useState } from 'react';

interface Template {
  name: string;
  icon: React.ElementType;
  fields: {
    campaignID?: string;
    source?: string;
    medium?: string;
    name?: string;
    content?: string;
    term?: string;
  };
}

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const UTMBuilder = () => {
  const [websiteURL, setWebsiteURL] = useState('');
  const [campaignID, setCampaignID] = useState('');
  const [campaignSource, setCampaignSource] = useState('');
  const [campaignMedium, setCampaignMedium] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [campaignTerm, setCampaignTerm] = useState('');
  const [campaignContent, setCampaignContent] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedMode, setSelectedMode] = useState('manual');

  const templates: Record<string, Template> = {
    manual: {
      name: 'Manual',
      icon: Globe,
      fields: {},
    },
    facebook: {
      name: 'Facebook',
      icon: Facebook,
      fields: {
        campaignID: '{{ad.id}}',
        source: 'facebook',
        medium: 'paidsocial',
        name: '{{campaign.name}}',
        content: '{{adset.name}}',
        term: '{{ad.name}}',
      },
    },
    instagram: {
      name: 'Instagram',
      icon: Instagram,
      fields: {
        campaignID: '{{ad.id}}',
        source: 'instagram',
        medium: 'paidsocial',
        name: '{{campaign.name}}',
        content: '{{adset.name}}',
        term: '{{ad.name}}',
      },
    },
    google: {
      name: 'Google Ads',
      icon: MousePointerClick,
      fields: {
        campaignID: '{campaignid}',
        source: 'google',
        medium: 'cpc',
        name: '{campaignname}',
        term: '{keyword}',
        content: '{creative}',
      },
    },
    messenger: {
      name: 'Messenger',
      icon: MessageSquare,
      fields: {
        source: 'messenger',
        medium: 'social',
        name: 'messenger_campaign',
      },
    },
  };

  const isValidURL = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const generateUTM = () => {
    if (!websiteURL) return '';

    const params = new URLSearchParams();
    if (campaignSource) params.append('utm_source', campaignSource);
    if (campaignMedium) params.append('utm_medium', campaignMedium);
    if (campaignName) params.append('utm_campaign', campaignName);
    if (campaignID) params.append('utm_id', campaignID);
    if (campaignTerm) params.append('utm_term', campaignTerm);
    if (campaignContent) params.append('utm_content', campaignContent);

    return `${websiteURL}${params.toString() ? '?' + params.toString() : ''}`;
  };

  const handleCopy = async () => {
    const utmLink = generateUTM();
    if (!utmLink) return;

    try {
      await navigator.clipboard.writeText(utmLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleTemplateChange = (mode: string) => {
    setSelectedMode(mode);
    const template = templates[mode].fields;

    setCampaignID(template.campaignID || '');
    setCampaignSource(template.source || '');
    setCampaignMedium(template.medium || '');
    setCampaignName(template.name || '');
    setCampaignTerm(template.term || '');
    setCampaignContent(template.content || '');
  };

  const InputField: React.FC<InputFieldProps> = ({
    label,
    value,
    onChange,
    placeholder = '',
    required = false,
  }) => (
    <div className="space-y-2">
      <Label className="text-sm font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-[220px_1fr] border-t-2">
      <aside className="border-r  pb-12">
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold">UTM Templates</h2>
          <p className="text-sm ">Choose a preset or create custom</p>
        </div>
        <Separator />
        <div className="px-2 py-2">
          {Object.entries(templates).map(([key, template]) => {
            const Icon = template.icon;
            return (
              <Button
                key={key}
                variant={selectedMode === key ? 'default' : 'ghost'}
                className="w-full justify-start gap-2 mb-1"
                onClick={() => handleTemplateChange(key)}
              >
                <Icon className="h-4 w-4" />
                {template.name}
              </Button>
            );
          })}
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto">
        <Navbar className="!mx-0" />
        <div className="h-full px-8 py-6">
          <div className="max-w-2xl space-y-6">
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">UTM Builder</h1>
              <p className="">Create and manage your campaign tracking URLs</p>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <InputField
                  label="Website URL"
                  value={websiteURL}
                  onChange={setWebsiteURL}
                  placeholder="https://example.com"
                  required
                />

                <div className="grid gap-6 md:grid-cols-2">
                  <InputField
                    label="Campaign Source"
                    value={campaignSource}
                    onChange={setCampaignSource}
                    placeholder="facebook, google, newsletter"
                    required
                  />
                  <InputField
                    label="Campaign Medium"
                    value={campaignMedium}
                    onChange={setCampaignMedium}
                    placeholder="cpc, banner, email"
                    required
                  />
                  <InputField
                    label="Campaign Name"
                    value={campaignName}
                    onChange={setCampaignName}
                    placeholder="summer_sale"
                  />
                  <InputField
                    label="Campaign ID"
                    value={campaignID}
                    onChange={setCampaignID}
                    placeholder="uniqueid123"
                  />
                  <InputField
                    label="Campaign Term"
                    value={campaignTerm}
                    onChange={setCampaignTerm}
                    placeholder="running+shoes"
                  />
                  <InputField
                    label="Campaign Content"
                    value={campaignContent}
                    onChange={setCampaignContent}
                    placeholder="toplink"
                  />
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label className="text-sm font-medium">Generated UTM URL</Label>
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn('gap-2', !generateUTM() && 'opacity-50 cursor-not-allowed')}
                      onClick={handleCopy}
                      disabled={!generateUTM()}
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy URL
                        </>
                      )}
                    </Button>
                  </div>
                  <Textarea
                    readOnly
                    value={generateUTM()}
                    className="min-h-[100px] font-mono text-sm"
                    placeholder="Your UTM URL will appear here..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UTMBuilder;

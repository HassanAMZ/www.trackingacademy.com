'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Download, Plus, X } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import React, { useEffect, useState } from 'react';
interface UTMParams {
  campaignID: string;
  source: string;
  medium: string;
  name: string;
  content: string;
  term: string;
}

interface CustomField {
  name: string;
  value: string;
}

interface PlatformConfig {
  name: string;
  defaults: UTMParams;
}

interface PlatformConfigs {
  [key: string]: PlatformConfig;
}

const platformConfigs: PlatformConfigs = {
  google: {
    name: 'Google Ads',
    defaults: {
      campaignID: '{campaignid}',
      source: 'google',
      medium: 'cpc',
      name: '{campaignname}',
      term: '{keyword}',
      content: '{creative}',
    },
  },
  facebook: {
    name: 'Facebook Ads',
    defaults: {
      campaignID: '{{ad.id}}',
      source: 'facebook',
      medium: 'paidsocial',
      name: '{{campaign.name}}',
      content: '{{adset.name}}',
      term: '{{ad.name}}',
    },
  },
  tiktok: {
    name: 'TikTok Ads',
    defaults: {
      campaignID: '{{campaign_id}}',
      source: 'tiktok',
      medium: 'paidsocial',
      name: '{{campaign_name}}',
      content: '{{ad_group_name}}',
      term: '{{ad_name}}',
    },
  },
  instagram: {
    name: 'Instagram Ads',
    defaults: {
      campaignID: '{{ad.id}}',
      source: 'instagram',
      medium: 'paidsocial',
      name: '{{campaign.name}}',
      content: '{{adset.name}}',
      term: '{{ad.name}}',
    },
  },
  email: {
    name: 'Email Campaign',
    defaults: {
      campaignID: '',
      source: 'email',
      medium: 'email',
      name: '',
      content: '',
      term: '',
    },
  },
  affiliate: {
    name: 'Affiliate',
    defaults: {
      campaignID: '',
      source: 'affiliate',
      medium: 'referral',
      name: '',
      content: '',
      term: '',
    },
  },
};

interface DownloadData {
  websiteUrl: string;
  utmParams: UTMParams;
  customFields: CustomField[];
  finalUrl: string;
}

const UTMBuilder: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  const [utmParams, setUtmParams] = useState<UTMParams>({
    campaignID: '',
    source: '',
    medium: '',
    name: '',
    content: '',
    term: '',
  });
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [finalUrl, setFinalUrl] = useState<string>('');

  const handlePlatformChange = (platform: string): void => {
    setSelectedPlatform(platform);
    if (platformConfigs[platform]) {
      setUtmParams(platformConfigs[platform].defaults);
    }
  };

  const handleCustomFieldAdd = (): void => {
    setCustomFields([...customFields, { name: '', value: '' }]);
  };

  const handleCustomFieldRemove = (index: number): void => {
    const newFields = customFields.filter((_, i) => i !== index);
    setCustomFields(newFields);
  };

  const handleCustomFieldChange = (
    index: number,
    field: keyof CustomField,
    value: string,
  ): void => {
    const newFields = [...customFields];
    newFields[index][field] = value;
    setCustomFields(newFields);
  };

  const buildFinalUrl = (): string => {
    if (!websiteUrl) return '';

    const params = new URLSearchParams();
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) params.append(`utm_${key.toLowerCase()}`, value);
    });

    customFields.forEach((field) => {
      if (field.name && field.value) {
        params.append(field.name, field.value);
      }
    });

    return `${websiteUrl}${params.toString() ? '?' + params.toString() : ''}`;
  };

  useEffect(() => {
    const url = buildFinalUrl();
    setFinalUrl(url);
  }, [websiteUrl, utmParams, customFields]);

  const handleDownload = (): void => {
    const data: DownloadData = {
      websiteUrl,
      utmParams,
      customFields,
      finalUrl,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'utm-configuration.json';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handleUtmParamChange = (key: keyof UTMParams, value: string): void => {
    setUtmParams((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex h-screen w-screen ">
      {/* Sidebar */}
      <div className="hidden md:flex w-64  border-r p-4 flex-col">
        <h2 className="text-xl font-bold mb-4">Platforms</h2>
        <div className="space-y-2">
          {Object.entries(platformConfigs).map(([key, config]) => (
            <button
              key={key}
              onClick={() => handlePlatformChange(key)}
              className={`w-full text-left px-4 py-2 rounded ${
                selectedPlatform === key ? ' ' : ''
              }`}
            >
              {config.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          {/* Top Actions */}
          <div className="flex justify-end gap-4 mb-6">
            <Button onClick={handleDownload} variant="outline" className="flex items-center gap-2">
              <Download size={16} /> Download Configuration
            </Button>
          </div>

          {/* Main Form and Preview Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Form */}
            <Card>
              <CardContent className="pt-6">
                {/* Platform selector for mobile */}
                <div className="md:hidden mb-6">
                  <Label>Platform</Label>
                  <Select value={selectedPlatform} onValueChange={handlePlatformChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(platformConfigs).map(([key, config]) => (
                        <SelectItem key={key} value={key}>
                          {config.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* URL Input */}
                <div className="space-y-4">
                  <div>
                    <Label>Website URL</Label>
                    <Input
                      placeholder="https://example.com"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                    />
                  </div>

                  {/* UTM Parameters */}
                  {(Object.keys(utmParams) as Array<keyof UTMParams>).map((key) => (
                    <div key={key}>
                      <Label>UTM {key}</Label>
                      <Input
                        placeholder={`Enter UTM ${key}`}
                        value={utmParams[key]}
                        onChange={(e) => handleUtmParamChange(key, e.target.value)}
                      />
                    </div>
                  ))}

                  {/* Custom Fields */}
                  {customFields.map((field, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="flex-1">
                        <Input
                          placeholder="Parameter name"
                          value={field.name}
                          onChange={(e) => handleCustomFieldChange(index, 'name', e.target.value)}
                        />
                      </div>
                      <div className="flex-1">
                        <Input
                          placeholder="Parameter value"
                          value={field.value}
                          onChange={(e) => handleCustomFieldChange(index, 'value', e.target.value)}
                        />
                      </div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleCustomFieldRemove(index)}
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}

                  <Button onClick={handleCustomFieldAdd} variant="outline" className="w-full">
                    <Plus size={16} className="mr-2" /> Add Custom Parameter
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Generated URL</h3>
                  <div className="p-4  rounded-lg break-all">
                    {finalUrl || 'Enter a website URL to generate'}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">QR Code</h3>
                  <div className="flex justify-center p-4">
                    {finalUrl ? <QRCodeSVG value={finalUrl} /> : <p>fill the form</p>}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UTMBuilder;

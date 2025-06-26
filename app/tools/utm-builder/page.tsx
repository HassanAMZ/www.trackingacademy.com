"use client";

import ContactUs from "@/components/blog/call-to-action-message-us";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookMarked,
  Chrome,
  Copy,
  Download,
  Facebook,
  Instagram,
  Mail,
  Plus,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useState } from "react";
import { z } from "zod";

interface UTMParams {
  id: string;
  source: string;
  medium: string;
  campaign: string;
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

const platformIcons = {
  manual: BookMarked,
  google: Chrome,
  facebook: Facebook,
  instagram: Instagram,
  tiktok: TrendingUp,
  email: Mail,
  affiliate: Users,
};

const platformConfigs: PlatformConfigs = {
  manual: {
    name: "Manual Configuration",
    defaults: {
      id: "",
      source: "",
      medium: "",
      campaign: "",
      content: "",
      term: "",
    },
  },
  google: {
    name: "Google Ads",
    defaults: {
      id: "{campaignid}",
      source: "google",
      medium: "cpc",
      campaign: "{campaign}",
      term: "{keyword}",
      content: "{creative}",
    },
  },
  facebook: {
    name: "Facebook Ads",
    defaults: {
      id: "{{ad.id}}",
      source: "facebook",
      medium: "paidsocial",
      campaign: "{{campaign.name}}",
      content: "{{adset.name}}",
      term: "{{ad.name}}",
    },
  },
  tiktok: {
    name: "TikTok Ads",
    defaults: {
      id: "__AID__",
      source: "tiktok",
      medium: "paidsocial",
      campaign: "__CAMPAIGN_NAME__",
      content: "__CID_NAME__",
      term: "__AID_NAME__",
    },
  },
  instagram: {
    name: "Instagram Ads",
    defaults: {
      id: "{{ad.id}}",
      source: "instagram",
      medium: "paidsocial",
      campaign: "{{campaign.name}}",
      content: "{{adset.name}}",
      term: "{{ad.name}}",
    },
  },
  email: {
    name: "Email Campaign",
    defaults: {
      id: "",
      source: "email",
      medium: "email",
      campaign: "",
      content: "",
      term: "",
    },
  },
  affiliate: {
    name: "Affiliate",
    defaults: {
      id: "",
      source: "affiliate",
      medium: "referral",
      campaign: "",
      content: "",
      term: "",
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
  const [selectedPlatform, setSelectedPlatform] = useState<string>("manual");
  const [websiteUrl, setWebsiteUrl] = useState<string>("");
  const [utmParams, setUtmParams] = useState<UTMParams>(platformConfigs["manual"].defaults);
  const [customFields, setCustomFields] = useState<CustomField[]>([]);
  const [finalUrl, setFinalUrl] = useState<string>("");
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [errors, setErrors] = useState({
    url: "",
    source: "",
    medium: "",
  });

  const urlSchema = z.string().url();
  const handleWebsiteUrlChange = (value: string): void => {
    setWebsiteUrl(value);
    if (!value) {
      setErrors((prev) => ({ ...prev, url: "Website URL is required" }));
      setIsValidUrl(false);
    } else if (!validateUrl(value)) {
      setErrors((prev) => ({ ...prev, url: "Invalid URL format" }));
      setIsValidUrl(false);
    } else {
      setErrors((prev) => ({ ...prev, url: "" }));
      setIsValidUrl(true);
    }
  };

  const handlePlatformChange = (platform: string): void => {
    setSelectedPlatform(platform);
    if (platformConfigs[platform]) {
      setUtmParams(platformConfigs[platform].defaults);
    }
  };

  const handleCustomFieldAdd = (): void => {
    setCustomFields([...customFields, { name: "", value: "" }]);
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
  // Helper to check if value matches a specific template syntax in platformConfigs
  const isTemplate = (value: string): boolean => {
    // Extract all unique placeholders from platformConfigs
    const allTemplates = new Set<string>();
    Object.values(platformConfigs).forEach((config) => {
      Object.values(config.defaults).forEach((defaultValue) => {
        if (defaultValue) allTemplates.add(defaultValue);
      });
    });
    return allTemplates.has(value);
  };

  const buildFinalUrl = (): string => {
    if (!websiteUrl) return "";
    const params = new URLSearchParams(); // Process UTM parameters
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) {
        const paramKey = `utm_${key.toLowerCase()}`;
        if (isTemplate(value)) {
          // For recognized template values, append without encoding
          params.append(paramKey, value);
        } else {
          // For regular values, use normal encoding
          params.append(paramKey, encodeURIComponent(value));
        }
      }
    }); // Process custom fields
    customFields.forEach((field) => {
      if (field.name && field.value) {
        if (isTemplate(field.value)) {
          // For recognized template values, append without encoding
          params.append(field.name, field.value);
        } else {
          params.append(field.name, encodeURIComponent(field.value));
        }
      }
    });
    const decodeDynamicPlaceholders = (
      params: URLSearchParams,
      platformDefaults: UTMParams,
    ): string => {
      // Build a map of encoded -> decoded placeholders
      const placeholderMap: { [key: string]: string } = {};
      Object.values(platformDefaults).forEach((value) => {
        if (value) {
          const encodedValue = encodeURIComponent(value);
          placeholderMap[encodedValue] = value;
        }
      }); // Convert params to a query string
      let queryString = params.toString(); // Replace only placeholders found in the map
      Object.entries(placeholderMap).forEach(([encoded, decoded]) => {
        queryString = queryString.replace(new RegExp(encoded, "g"), decoded);
      });
      return queryString;
    };
    const queryString = decodeDynamicPlaceholders(
      params,
      platformConfigs[selectedPlatform].defaults,
    );
    return `${websiteUrl}${queryString ? "?" + queryString : ""}`;
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
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "utm-configuration.json";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const validateUrl = (url: string): boolean => {
    try {
      urlSchema.parse(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      url: !websiteUrl
        ? "Website URL is required"
        : !validateUrl(websiteUrl)
          ? "Invalid URL format"
          : "",
      source: !utmParams.source ? "Source is required" : "",
      medium: !utmParams.medium ? "Medium is required" : "",
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleUtmParamChange = (key: keyof UTMParams, value: string): void => {
    const newValue =
      selectedPlatform === "manual"
        ? value.replace(/[{}]/g, "") // Remove template syntax for manual mode
        : value;
    validateForm();
    setUtmParams((prev) => ({
      ...prev,
      [key]: newValue,
    }));
  };

  const copyToClipboard = async (): Promise<void> => {
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields correctly",
        variant: "destructive",
      });
      return;
    }
    try {
      await navigator.clipboard.writeText(finalUrl);
      toast({
        title: "URL Copied",
        description: "The UTM URL has been copied to your clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy URL to clipboard",
        variant: "destructive",
      });
    }
  };

  // Helper functions
  const getPlaceholderForField = (key: string): string => {
    const placeholders = {
      id: "summer-sale-2024",
      source: "facebook",
      medium: "cpc",
      campaign: "spring-collection",
      content: "banner-ad",
      term: "summer-fashion",
    };
    return placeholders[key as keyof typeof placeholders] || "";
  };

  const getHelperTextForField = (key: string): string => {
    const helperText = {
      id: "Unique identifier for your campaign",
      source: "The referrer (e.g., google, newsletter)",
      medium: "Marketing medium (e.g., cpc, banner, email)",
      campaign: "Product, promo code, or slogan",
      content: "Use to differentiate ads",
      term: "Identify paid search keywords",
    };
    return helperText[key as keyof typeof helperText] || "";
  };

  return (
    <main className="flex">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="grid gap-3 lg:grid-cols-[2fr_1fr]">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>UTM Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Mobile Platform Selector */}
              <div className="mb-6">
                <Label>Platform</Label>
                <Select value={selectedPlatform} onValueChange={handlePlatformChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Platform" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(platformConfigs).map(([key, config]) => (
                      <SelectItem key={key} value={key}>
                        <div className="flex items-center gap-2">{config.name}</div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>{" "}
              {/* URL Input */}
              <div>
                <Label>Website URL</Label>
                <Input
                  placeholder="https://example.com/page"
                  value={websiteUrl}
                  onChange={(e) => handleWebsiteUrlChange(e.target.value)}
                  className={errors.url ? "border-destructive" : ""}
                />
                {errors.url && <p className="text-destructive mt-1 text-sm">{errors.url}</p>}
                <p className="text-muted-foreground mt-1 text-sm">
                  Enter the full URL of the page you want to track
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* UTM Parameters */}
                {(Object.keys(utmParams) as Array<keyof UTMParams>).map((key) => (
                  <div key={key}>
                    <Label>UTM {key}</Label>
                    <Input
                      placeholder={`e.g., ${getPlaceholderForField(key)}`}
                      value={utmParams[key]}
                      onChange={(e) => handleUtmParamChange(key, e.target.value)}
                      className={errors[key as keyof typeof errors] ? "border-destructive" : ""}
                    />
                    {errors[key as keyof typeof errors] && (
                      <p className="text-destructive mt-1 text-sm">
                        {errors[key as keyof typeof errors]}
                      </p>
                    )}
                    <p className="text-muted-foreground mt-1 text-sm">
                      {getHelperTextForField(key)}
                    </p>
                  </div>
                ))}
                {/* Custom Parameters */}
                <div className="col-span-2 space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Custom Parameters</Label>
                    <Button onClick={handleCustomFieldAdd} variant="outline" size="sm">
                      <Plus size={16} className="mr-2" /> Add Parameter
                    </Button>
                  </div>
                  {customFields.map((field, index) => (
                    <div key={index} className="flex gap-2">
                      <div className="flex-1">
                        <Input
                          placeholder="Parameter name"
                          value={field.name}
                          onChange={(e) => handleCustomFieldChange(index, "name", e.target.value)}
                        />
                      </div>
                      <div className="flex-1">
                        <Input
                          placeholder="Parameter value"
                          value={field.value}
                          onChange={(e) => handleCustomFieldChange(index, "value", e.target.value)}
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
                </div>
              </div>
            </CardContent>
          </Card>{" "}
          {/* Preview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Generated URL</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted relative rounded-lg p-4 text-sm break-all">
                  {finalUrl || "Enter a website URL to generate"}
                  {finalUrl && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={copyToClipboard}
                    >
                      <Copy size={16} />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>{" "}
            {finalUrl && validateUrl(websiteUrl) && (
              <Card>
                <CardHeader>
                  <CardTitle>QR Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center p-4">
                    <QRCodeSVG value={finalUrl} level="H" size={200} includeMargin={true} />
                  </div>
                </CardContent>
              </Card>
            )}{" "}
            <div className="flex justify-end gap-4">
              <Button
                onClick={handleDownload}
                variant="outline"
                className="flex w-full items-center gap-2"
              >
                <Download size={16} /> Download Configuration
              </Button>
            </div>{" "}
            <ContactUs />
          </div>
        </div>
      </div>
    </main>
  );
};

export default UTMBuilder;

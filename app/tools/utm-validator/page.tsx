"use client";

import ContactUs from "@/components/blog/contact-us";
import Navbar from "@/components/global/navbar";
import YoutubeEmbed from "@/components/global/youtube-embed";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertCircle,
  BookMarked,
  CheckCircle2,
  Chrome,
  Facebook,
  Instagram,
  Mail,
  TrendingUp,
  Users,
  XCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

const REQUIRED_UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign"];

interface PlatformConfig {
  name: string;
  description: string;
}

const platformConfigs: Record<string, PlatformConfig> = {
  manual: {
    name: "Custom URL",
    description: "Validate any URL with UTM parameters",
  },
  google: {
    name: "Google Ads",
    description: "Validate Google Ads URL parameters",
  },
  facebook: {
    name: "Facebook Ads",
    description: "Validate Facebook Ads URL parameters",
  },
  tiktok: {
    name: "TikTok Ads",
    description: "Validate TikTok Ads URL parameters",
  },
  instagram: {
    name: "Instagram Ads",
    description: "Validate Instagram Ads URL parameters",
  },
  email: {
    name: "Email Campaign",
    description: "Validate email campaign URLs",
  },
  affiliate: {
    name: "Affiliate",
    description: "Validate affiliate tracking URLs",
  },
};

const platformIcons = {
  manual: BookMarked,
  google: Chrome,
  facebook: Facebook,
  instagram: Instagram,
  tiktok: TrendingUp,
  email: Mail,
  affiliate: Users,
};

const UTMValidator = () => {
  const [selectedPlatform, setSelectedPlatform] = useState("manual");
  const [url, setUrl] = useState("");
  const [validationResults, setValidationResults] = useState({
    isHttps: false,
    isValidUrl: false,
    hasUtmParams: false,
    urlLength: 0,
    isUrlTooLong: false,
    missingUtmParams: [] as string[],
  });
  const [parsedParams, setParsedParams] = useState({
    utmParams: {} as Record<string, string>,
    otherParams: {} as Record<string, string>,
  });
  const [showEmptyState, setShowEmptyState] = useState(true);

  const validateUrl = (inputUrl: string) => {
    if (!inputUrl.trim()) {
      setShowEmptyState(true);
      setParsedParams({ utmParams: {}, otherParams: {} });
      setValidationResults({
        isHttps: false,
        isValidUrl: false,
        hasUtmParams: false,
        urlLength: 0,
        isUrlTooLong: false,
        missingUtmParams: [],
      });
      return;
    }

    setShowEmptyState(false);

    try {
      const urlObj = new URL(inputUrl);
      const params = new URLSearchParams(urlObj.search);

      const utmParams: Record<string, string> = {};
      const otherParams: Record<string, string> = {};
      const missingUtms: string[] = [];

      params.forEach((value, key) => {
        if (key.startsWith("utm_")) {
          utmParams[key] = value;
        } else {
          otherParams[key] = value;
        }
      });

      REQUIRED_UTM_PARAMS.forEach((param) => {
        if (!utmParams[param]) {
          missingUtms.push(param);
        }
      });

      setParsedParams({ utmParams, otherParams });

      setValidationResults({
        isHttps: urlObj.protocol === "https:",
        isValidUrl: true,
        hasUtmParams: Object.keys(utmParams).length > 0,
        urlLength: inputUrl.length,
        isUrlTooLong: inputUrl.length > 2048,
        missingUtmParams: missingUtms,
      });
    } catch (error) {
      setValidationResults({
        isHttps: false,
        isValidUrl: false,
        hasUtmParams: false,
        urlLength: inputUrl.length,
        isUrlTooLong: inputUrl.length > 2048,
        missingUtmParams: REQUIRED_UTM_PARAMS,
      });
      setParsedParams({ utmParams: {}, otherParams: {} });
    }
  };

  useEffect(() => {
    validateUrl(url);
  }, [url]);

  const ValidationItem = ({
    check,
    title,
    description,
  }: {
    check: boolean;
    title: string;
    description: string;
  }) => (
    <div className="flex items-start gap-2 p-2">
      {check ? (
        <CheckCircle2 className="mt-1 text-green-500" size={20} />
      ) : (
        <XCircle className="mt-1 text-red-500" size={20} />
      )}
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );

  const ParameterDisplay = ({
    param,
    value,
  }: {
    param: string;
    value: string;
  }) => (
    <div className="grid grid-cols-2 gap-2 border-b py-2 last:border-b-0">
      <div
        className={`font-medium ${REQUIRED_UTM_PARAMS.includes(param) && !value ? "text-destructive" : ""}`}
      >
        {param} {REQUIRED_UTM_PARAMS.includes(param) && !value && " (Required)"}
      </div>
      <div className="break-all text-sm">
        {decodeURIComponent(value) || "-"}
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="py-8 text-center">
      <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-semibold">No URL Analyzed</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Enter a URL with UTM parameters to validate and analyze its tracking
        components.
      </p>
      <div className="mt-4 rounded-lg bg-muted p-4">
        <p className="text-sm font-medium">Example URL:</p>
        <p className="mt-1 text-xs text-muted-foreground">
          https://example.com?utm_source=facebook&utm_medium=social&utm_campaign=spring_sale
        </p>
      </div>
    </div>
  );

  const renderSidebarItem = (key: string, config: PlatformConfig) => {
    const Icon = platformIcons[key as keyof typeof platformIcons];
    return (
      <button
        key={key}
        onClick={() => setSelectedPlatform(key)}
        className={`flex w-full items-center gap-2 rounded-lg px-4 py-2 text-left transition-colors ${selectedPlatform === key ? "bg-primary/10" : "hover:bg-primary/5"}`}
      >
        {Icon && <Icon size={18} />}
        {config.name}
      </button>
    );
  };

  return (
    <main className="flex h-screen w-screen">
      {/* Sidebar */}
      <div className="hidden w-64 flex-col border-r p-4 md:flex">
        <h2 className="mb-4 flex items-center gap-2 text-xl font-bold">
          Select Platform
        </h2>
        <div className="space-y-2">
          {Object.entries(platformConfigs).map(([key, config]) =>
            renderSidebarItem(key, config),
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Navbar className="!mx-0 w-full max-w-7xl" />
        <div className="grid gap-6 p-3 md:grid-cols-[2fr,1fr]">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>UTM URL Validator</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="url-input">Enter URL to validate</Label>
                    <Input
                      id="url-input"
                      placeholder="https://example.com?utm_source=..."
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>

                  {showEmptyState ? (
                    <EmptyState />
                  ) : (
                    url && (
                      <Alert
                        variant={
                          validationResults.isValidUrl
                            ? "default"
                            : "destructive"
                        }
                      >
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>URL Validation Results</AlertTitle>
                        <AlertDescription>
                          <div className="mt-2 space-y-2">
                            <ValidationItem
                              check={validationResults.isValidUrl}
                              title="Valid URL Format"
                              description="URL structure is properly formatted"
                            />
                            <ValidationItem
                              check={validationResults.isHttps}
                              title="HTTPS Protocol"
                              description="URL uses secure HTTPS protocol"
                            />
                            <ValidationItem
                              check={
                                validationResults.hasUtmParams &&
                                validationResults.missingUtmParams.length === 0
                              }
                              title="UTM Parameters"
                              description={
                                validationResults.missingUtmParams.length > 0
                                  ? `Missing required parameters: ${validationResults.missingUtmParams.join(", ")}`
                                  : "All required UTM parameters are present"
                              }
                            />
                            <ValidationItem
                              check={!validationResults.isUrlTooLong}
                              title="URL Length"
                              description={`${validationResults.urlLength} characters (max 2048)`}
                            />
                          </div>
                        </AlertDescription>
                      </Alert>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            {validationResults.isValidUrl && !showEmptyState && (
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-2 font-semibold text-primary">
                        UTM Parameters
                      </h3>
                      <div className="space-y-2">
                        {REQUIRED_UTM_PARAMS.map((param) => (
                          <ParameterDisplay
                            key={param}
                            param={param}
                            value={parsedParams.utmParams[param] || ""}
                          />
                        ))}
                        {Object.entries(parsedParams.utmParams)
                          .filter(
                            ([param]) => !REQUIRED_UTM_PARAMS.includes(param),
                          )
                          .map(([param, value]) => (
                            <ParameterDisplay
                              key={param}
                              param={param}
                              value={value}
                            />
                          ))}
                      </div>
                    </div>

                    {Object.keys(parsedParams.otherParams).length > 0 && (
                      <div>
                        <h3 className="mb-2 font-semibold text-primary">
                          Other Parameters
                        </h3>
                        <div className="space-y-2">
                          {Object.entries(parsedParams.otherParams).map(
                            ([param, value]) => (
                              <ParameterDisplay
                                key={param}
                                param={param}
                                value={value}
                              />
                            ),
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>How to Use UTM Parameters</CardTitle>
              </CardHeader>
              <CardContent>
                <YoutubeEmbed embedId="9MGpL_AmEYM" />
              </CardContent>
            </Card>
            <div className="sticky top-8">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UTMValidator;
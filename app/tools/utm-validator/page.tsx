'use client';

import ContactMe from '@/components/blog/contact-me';
import Navbar from '@/components/global/navbar';
import YoutubeEmbed from '@/components/global/youtube-embed';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Container from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const REQUIRED_UTM_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign'];

const UTMValidator = () => {
  const [url, setUrl] = useState('');
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
        if (key.startsWith('utm_')) {
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
        isHttps: urlObj.protocol === 'https:',
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
        <CheckCircle2 className="text-green-500 mt-1" size={20} />
      ) : (
        <XCircle className="text-red-500 mt-1" size={20} />
      )}
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );

  const ParameterDisplay = ({ param, value }: { param: string; value: string }) => (
    <div className="grid grid-cols-2 gap-2 py-2 border-b last:border-b-0">
      <div
        className={`font-medium ${REQUIRED_UTM_PARAMS.includes(param) && !value ? 'text-destructive' : ''}`}
      >
        {param} {REQUIRED_UTM_PARAMS.includes(param) && !value && ' (Required)'}
      </div>
      <div className="text-sm break-all">{decodeURIComponent(value) || '-'}</div>
      {/* <div className="text-sm text-muted-foreground break-all">{value || '-'}</div> */}
    </div>
  );

  const EmptyState = () => (
    <div className="text-center py-8">
      <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-semibold">No URL Analyzed</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Enter a URL with UTM parameters to validate and analyze its tracking components.
      </p>
      <div className="mt-4 p-4 bg-muted rounded-lg">
        <p className="text-sm font-medium">Example URL:</p>
        <p className="text-xs text-muted-foreground mt-1">
          https://example.com?utm_source=facebook&utm_medium=social&utm_campaign=spring_sale
        </p>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Navbar />
      <Container className="">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
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
                      <Alert variant={validationResults.isValidUrl ? 'default' : 'destructive'}>
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
                                  ? `Missing required parameters: ${validationResults.missingUtmParams.join(', ')}`
                                  : 'All required UTM parameters are present'
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
                  <CardTitle />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">UTM Parameters</h3>
                      <div className="space-y-2">
                        {REQUIRED_UTM_PARAMS.map((param) => (
                          <ParameterDisplay
                            key={param}
                            param={param}
                            value={parsedParams.utmParams[param] || ''}
                          />
                        ))}
                        {Object.entries(parsedParams.utmParams)
                          .filter(([param]) => !REQUIRED_UTM_PARAMS.includes(param))
                          .map(([param, value]) => (
                            <ParameterDisplay key={param} param={param} value={value} />
                          ))}
                      </div>
                    </div>

                    {Object.keys(parsedParams.otherParams).length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2">Other Parameters</h3>
                        <div className="space-y-2">
                          {Object.entries(parsedParams.otherParams).map(([param, value]) => (
                            <ParameterDisplay key={param} param={param} value={value} />
                          ))}
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
              <ContactMe />
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default UTMValidator;

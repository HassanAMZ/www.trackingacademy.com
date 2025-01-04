'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const UTMValidator = () => {
  const [url, setUrl] = useState('');
  const [validationResults, setValidationResults] = useState({
    isHttps: false,
    isValidUrl: false,
    hasUtmParams: false,
    urlLength: 0,
    isUrlTooLong: false,
  });
  const [parsedParams, setParsedParams] = useState({
    utmParams: {} as Record<string, string>,
    otherParams: {} as Record<string, string>,
  });

  const validateUrl = (inputUrl: string) => {
    try {
      const urlObj = new URL(inputUrl);
      const params = new URLSearchParams(urlObj.search);

      // Separate UTM and other parameters
      const utmParams: Record<string, string> = {};
      const otherParams: Record<string, string> = {};

      params.forEach((value, key) => {
        if (key.startsWith('utm_')) {
          utmParams[key] = value;
        } else {
          otherParams[key] = value;
        }
      });

      setParsedParams({
        utmParams,
        otherParams,
      });

      setValidationResults({
        isHttps: urlObj.protocol === 'https:',
        isValidUrl: true,
        hasUtmParams: Object.keys(utmParams).length > 0,
        urlLength: inputUrl.length,
        isUrlTooLong: inputUrl.length > 2048,
      });
    } catch (error) {
      setValidationResults({
        isHttps: false,
        isValidUrl: false,
        hasUtmParams: false,
        urlLength: inputUrl.length,
        isUrlTooLong: inputUrl.length > 2048,
      });
      setParsedParams({
        utmParams: {},
        otherParams: {},
      });
    }
  };

  useEffect(() => {
    if (url) {
      validateUrl(url);
    }
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
    <div className="border rounded-lg p-3 mb-2">
      <div className="font-medium">{param}</div>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <div className="text-sm">
          <Label className="text-muted-foreground">Decoded</Label>
          <div className="mt-1 break-all">{decodeURIComponent(value)}</div>
        </div>
        <div className="text-sm">
          <Label className="text-muted-foreground">Encoded</Label>
          <div className="mt-1 break-all">{value}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>UTM URL Validator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Label>Enter URL to validate</Label>
              <Input
                placeholder="https://example.com?utm_source=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>

            {url && (
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
                      check={validationResults.hasUtmParams}
                      title="UTM Parameters"
                      description="URL contains UTM tracking parameters"
                    />
                    <ValidationItem
                      check={!validationResults.isUrlTooLong}
                      title="URL Length"
                      description={`${validationResults.urlLength} characters (max 2048)`}
                    />
                  </div>
                </AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
      </Card>

      {validationResults.isValidUrl && (
        <>
          {Object.keys(parsedParams.utmParams).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>UTM Parameters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(parsedParams.utmParams).map(([param, value]) => (
                    <ParameterDisplay key={param} param={param} value={value} />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {Object.keys(parsedParams.otherParams).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Other Parameters</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(parsedParams.otherParams).map(([param, value]) => (
                    <ParameterDisplay key={param} param={param} value={value} />
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default UTMValidator;

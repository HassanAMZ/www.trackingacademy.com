'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import Container from '../ui/container';
import { OfferResultDisplay } from './offer-result-display';

// Define the structured offer schema
const businessTypeOptions = [
  'Coaching',
  'Consulting',
  'E-commerce',
  'Service Business',
  'Digital Products',
  'Physical Products',
  'SaaS',
  'Other',
] as const;

const effortLevels = [
  'Very Low (1-2 hours total)',
  'Low (2-4 hours total)',
  'Moderate (4-8 hours total)',
  'High (8-16 hours total)',
  'Very High (16+ hours total)',
] as const;

const successProbabilities = [
  '30-50% (Experimental)',
  '50-70% (Promising)',
  '70-85% (Likely)',
  '85-95% (High Probability)',
  '95-100% (Almost Guaranteed)',
] as const;

export default function OfferCreator() {
  const [offerDetails, setOfferDetails] = useState({
    businessType: '',
    businessSubType: '',
    dreamOutcome: '',
    targetAudience: '',
    uniqueProcessDescription: '',
    effortLevel: '' as (typeof effortLevels)[number],
    timeCommitment: '',
    probabilityOfSuccess: '' as (typeof successProbabilities)[number],
    guaranteeBonus: '',
  });

  const [generation, setGeneration] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes for different input types
  const handleInputChange = (field: keyof typeof offerDetails, value: string) => {
    setOfferDetails((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Generate offer using streamText and structured object
  const generateOffer = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/offer-creator', {
        method: 'POST',
        body: JSON.stringify({
          businessType: offerDetails.businessType,
          businessSubType: offerDetails.businessSubType,
          dreamOutcome: offerDetails.dreamOutcome,
          targetAudience: offerDetails.targetAudience,
          uniqueProcessDescription: offerDetails.uniqueProcessDescription,
          effortLevel: offerDetails.effortLevel,
          timeCommitment: offerDetails.timeCommitment,
          probabilityOfSuccess: offerDetails.probabilityOfSuccess,
          guaranteeBonus: offerDetails.guaranteeBonus,
        }),
      });

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let result = '';

      while (true) {
        const { done, value } = (await reader?.read()) || {};
        if (done) break;
        result += decoder.decode(value);
      }

      setGeneration(JSON.parse(result));
      setIsLoading(false);
    } catch (error) {
      console.error('Offer generation failed:', error);
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Card className="mt-4 w-full">
        <CardHeader>
          <CardTitle>$100M Offer Creator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Business Type Selection */}
          <div className="space-y-2">
            <Label>Select Business Type</Label>
            <Select
              value={offerDetails.businessType}
              onValueChange={(value) => handleInputChange('businessType', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose Business Type" />
              </SelectTrigger>
              <SelectContent>
                {businessTypeOptions.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {offerDetails.businessType === 'Other' && (
            <div className="space-y-2">
              <Label>Specify Business Type</Label>
              <Input
                placeholder="Enter your specific business type"
                value={offerDetails.businessSubType}
                onChange={(e) => handleInputChange('businessSubType', e.target.value)}
              />
            </div>
          )}

          {/* Target Audience */}
          <div className="space-y-2">
            <Label>Target Audience</Label>
            <Input
              placeholder="Who are your ideal customers?"
              value={offerDetails.targetAudience}
              onChange={(e) => handleInputChange('targetAudience', e.target.value)}
            />
          </div>

          {/* Dream Outcome */}
          <div className="space-y-2">
            <Label>Dream Outcome</Label>
            <Input
              placeholder="What's the ultimate result customers want?"
              value={offerDetails.dreamOutcome}
              onChange={(e) => handleInputChange('dreamOutcome', e.target.value)}
            />
          </div>

          {/* Effort Level */}
          <div className="space-y-2">
            <Label>Effort Level Required</Label>
            <Select
              value={offerDetails.effortLevel}
              onValueChange={(value) => handleInputChange('effortLevel', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Effort Level" />
              </SelectTrigger>
              <SelectContent>
                {effortLevels.map((level) => (
                  <SelectItem key={level} value={level}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Probability of Success */}
          <div className="space-y-2">
            <Label>Probability of Success</Label>
            <Select
              value={offerDetails.probabilityOfSuccess}
              onValueChange={(value) => handleInputChange('probabilityOfSuccess', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Success Probability" />
              </SelectTrigger>
              <SelectContent>
                {successProbabilities.map((prob) => (
                  <SelectItem key={prob} value={prob}>
                    {prob}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Unique Process & Guarantee */}
          <div className="space-y-2">
            <Label>Unique Process Description</Label>
            <Input
              placeholder="What makes your approach unique?"
              value={offerDetails.uniqueProcessDescription}
              onChange={(e) => handleInputChange('uniqueProcessDescription', e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Guarantee or Bonus</Label>
            <Input
              placeholder="What guarantee or bonus can you offer?"
              value={offerDetails.guaranteeBonus}
              onChange={(e) => handleInputChange('guaranteeBonus', e.target.value)}
            />
          </div>

          {/* Generate Button */}
          <Button onClick={generateOffer} disabled={!offerDetails.businessType} className="w-full">
            Generate Hormozi-Style Offer
          </Button>

          {generation && !isLoading && <OfferResultDisplay generation={generation} />}
          {isLoading && (
            <div className="mt-4 text-center">Generating your Hormozi-style offer...</div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}

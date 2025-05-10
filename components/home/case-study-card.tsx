import { Card, CardContent } from "@/components/ui/card";
import { CaseStudy } from "@/types/index";
import Image from "next/image";
import ConversionChart from "../global/AccuracyChart";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { company, statistics, image, source } = caseStudy;
  const fixedConversionData = [
    { week: 1, shopifyConversions: 18, ga4Conversions: 6 },
    { week: 2, shopifyConversions: 16, ga4Conversions: 7 },
    { week: 3, shopifyConversions: 18, ga4Conversions: 8 },
    { week: 4, shopifyConversions: 17, ga4Conversions: 5 },
    { week: 5, shopifyConversions: 19, ga4Conversions: 14 },
    { week: 6, shopifyConversions: 20, ga4Conversions: 18 },
    { week: 7, shopifyConversions: 17, ga4Conversions: 16 },
    { week: 8, shopifyConversions: 15, ga4Conversions: 14 },
    { week: 9, shopifyConversions: 19, ga4Conversions: 18 },
    { week: 10, shopifyConversions: 20, ga4Conversions: 18 },
  ];
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <div className="grid items-center gap-8 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            {/* Company Section */}
            <div className="space-y-4">
              {company.logo && (
                <div className="relative h-12 w-48">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain object-left"
                  />
                </div>
              )}
              <h2 className="text-2xl font-bold">{company.name}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {company.description}
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {statistics.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-primary text-4xl font-bold">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground text-sm leading-tight">
                    {stat.label}
                  </p>
                  {stat.description && (
                    <p className="text-muted-foreground mt-1 text-xs">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
            <ConversionChart
              title="E-commerce Conversion Tracking"
              beforeRange={{ min: 15, max: 20 }}
              afterRange={{ min: 15, max: 20 }}
              // Optional: Pass custom data
            />

            {/* Source Citation */}
            {source && (
              <p className="text-muted-foreground text-xs">Source: {source}</p>
            )}
          </div>

          {/* Image Section */}
          {image && (
            <div className="hidden rounded-lg md:block">
              <Image
                src={image.src}
                alt={image.alt}
                width={1080}
                height={1920}
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

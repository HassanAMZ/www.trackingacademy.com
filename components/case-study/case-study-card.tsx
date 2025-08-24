"use client";

import LoomEmbed from "@/components/global/loom-embed";
import MuxEmbed from "@/components/global/mux-embed";
import YoutubeEmbed from "@/components/global/youtube-embed";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CaseStudy } from "@/data/case-studies";
import { Lock, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard: FC<CaseStudyCardProps> = ({ caseStudy }) => {
  const renderMedia = () => {
    if (caseStudy.embedId?.mux && !caseStudy.embedId.muxVertical) {
      return (
        <MuxEmbed
          embedId={caseStudy.embedId.mux}
          className="!p-0"
          verticalVideo={caseStudy.embedId.muxVertical || false}
        />
      );
    } else if (caseStudy.embedId?.youtube) {
      return (
        <YoutubeEmbed
          embedId={caseStudy.embedId.youtube}
          className="!p-0"
          verticalVideo={caseStudy.embedId.youtubeVertical || false}
        />
      );
    } else if (caseStudy.embedId?.loom) {
      return (
        <LoomEmbed
          embedId={caseStudy.embedId.loom}
          className="!p-0"
          verticalVideo={caseStudy.embedId.loomVertical || false}
        />
      );
    } else {
      return (
        <div className="aspect-video overflow-hidden rounded-lg border bg-muted">
          <Image
            width={1080}
            height={1920}
            src={caseStudy.imageUrl}
            alt={caseStudy.name}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden bg-background/80 backdrop-blur-xs transition-all duration-300 hover:shadow-lg">
      <CardHeader className="flex-1">
        <div className="overflow-hidden rounded-lg border">{renderMedia()}</div>
        <CardTitle className="mt-4">{caseStudy.title}</CardTitle>
        <div className="mt-2 flex w-fit flex-wrap gap-2">
          {caseStudy.platforms.slice(0, 2).map((platform, index) => (
            <Badge key={index} variant="secondary">
              {platform}
            </Badge>
          ))}
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <p className="line-clamp-3 text-muted-foreground">{caseStudy.description}</p>

        {/* Improvement Metrics */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center rounded-lg border border-border bg-muted/30 p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <TrendingUp className="h-3 w-3" />
              <span>Accuracy</span>
            </div>
            <div className="text-sm font-bold text-foreground">{caseStudy.analytics.accuracy}%</div>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-border bg-muted/30 p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>Ad Blockers</span>
            </div>
            <div className="text-sm font-bold text-green-600">
              {caseStudy.analytics.recoveredFromAdBlockersPercentage}%
            </div>
          </div>

          <div className="flex flex-col items-center rounded-lg border border-border bg-muted/30 p-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Lock className="h-3 w-3" />
              <span>ITP Recovery</span>
            </div>
            <div className="text-sm font-bold text-green-600">
              {caseStudy.analytics.recoveredFromTrackingPreventionPercentage}%
            </div>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href={`/case-study/${caseStudy.id}`}>View Case Study</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;

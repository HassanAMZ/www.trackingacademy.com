// CAPIPage.tsx
import Bonuses from "@/components/landing-page/bonuses";
import DetailedCTA from "@/components/landing-page/detailed-cta";
import DreamOutcome from "@/components/landing-page/dream-outcome";
import Hero from "@/components/landing-page/hero";
import ObjectionHandling from "@/components/landing-page/objection-handling";
import OfferDetails from "@/components/landing-page/offer-detail-item";
import ProblemAwareness from "@/components/landing-page/problem-awareness";
import ScarcityUrgency from "@/components/landing-page/scarcity-urgency";
import SocialProof from "@/components/landing-page/social-proof";
import MetaConversionConfig from "@/data/offers/meta-conversion-api";
import {
  Activity,
  ArrowUpRight,
  BarChart2,
  BookOpen,
  Clock,
  FileText,
  HeadphonesIcon,
  Lightbulb,
  Shield,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

// Icon mapping object
const iconMap = {
  Activity,
  BarChart2,
  BookOpen,
  HeadphonesIcon,
  Zap,
  ArrowUpRight,
  Lightbulb,
  TrendingUp,
  Clock,
  Target,
  FileText,
  Shield,
} as const;

type IconName = keyof typeof iconMap;

export default function CAPIPage() {
  // Transform offer items to include icon components
  const offerItemsWithIcons = MetaConversionConfig.offerDetails.offerItems.map(
    (item) => ({
      ...item,
      icon: iconMap[item.icon as IconName],
    }),
  );

  // Transform dream outcome list to include icon components
  const dreamOutcomeListWithIcons =
    MetaConversionConfig.dreamOutcome.dreamOutcomeList.map((item) => ({
      ...item,
      icon: iconMap[item.icon as IconName],
    }));

  // Transform stats to include icon components
  const statsWithIcons = MetaConversionConfig.socialProof.stats.map((stat) => ({
    ...stat,
    icon: iconMap[stat.icon as IconName],
  }));

  // Transform bonuses to include icon components
  const bonusesWithIcons = MetaConversionConfig.bonuses.bonuses.map(
    (bonus) => ({
      ...bonus,
      icon: iconMap[bonus.icon as IconName],
    }),
  );

  // Transform guarantees to include icon components
  const guaranteesWithIcons =
    MetaConversionConfig.objectionHandling.guarantees.map((guarantee) => ({
      ...guarantee,
      icon: iconMap[guarantee.icon as IconName],
    }));

  return (
    <main>
      <Hero {...MetaConversionConfig.hero} />

      <ProblemAwareness {...MetaConversionConfig.problemAwareness} />

      <DreamOutcome
        {...MetaConversionConfig.dreamOutcome}
        dreamOutcomeList={dreamOutcomeListWithIcons}
      />

      <OfferDetails
        {...MetaConversionConfig.offerDetails}
        offerItems={offerItemsWithIcons}
      />

      <ScarcityUrgency {...MetaConversionConfig.scarcityUrgency} />

      <SocialProof
        {...MetaConversionConfig.socialProof}
        stats={statsWithIcons}
      />

      <Bonuses {...MetaConversionConfig.bonuses} bonuses={bonusesWithIcons} />

      <ObjectionHandling
        {...MetaConversionConfig.objectionHandling}
        guarantees={guaranteesWithIcons}
      />

      <DetailedCTA {...MetaConversionConfig.detailedCTA} />
    </main>
  );
}

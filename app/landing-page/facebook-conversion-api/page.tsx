// CAPIPage.tsx
import Bonuses from '@/components/landing-page/bonuses';
import DetailedCTA from '@/components/landing-page/detailed-cta';
import DreamOutcome from '@/components/landing-page/dream-outcome';
import Hero from '@/components/landing-page/hero';
import ObjectionHandling from '@/components/landing-page/objection-handling';
import OfferDetails from '@/components/landing-page/offer-detail-item';
import ProblemAwareness from '@/components/landing-page/problem-awareness';
import ScarcityUrgency from '@/components/landing-page/scarcity-urgency';
import SocialProof from '@/components/landing-page/social-proof';
import metaConversionConfig from '@/data/offers/meta-conversion-api.json';
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
} from 'lucide-react';

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
  const offerItemsWithIcons = metaConversionConfig.offerDetails.offerItems.map((item) => ({
    ...item,
    icon: iconMap[item.icon as IconName],
  }));

  // Transform dream outcome list to include icon components
  const dreamOutcomeListWithIcons = metaConversionConfig.dreamOutcome.dreamOutcomeList.map(
    (item) => ({
      ...item,
      icon: iconMap[item.icon as IconName],
    }),
  );

  // Transform stats to include icon components
  const statsWithIcons = metaConversionConfig.socialProof.stats.map((stat) => ({
    ...stat,
    icon: iconMap[stat.icon as IconName],
  }));

  // Transform bonuses to include icon components
  const bonusesWithIcons = metaConversionConfig.bonuses.bonuses.map((bonus) => ({
    ...bonus,
    icon: iconMap[bonus.icon as IconName],
  }));

  // Transform guarantees to include icon components
  const guaranteesWithIcons = metaConversionConfig.objectionHandling.guarantees.map(
    (guarantee) => ({
      ...guarantee,
      icon: iconMap[guarantee.icon as IconName],
    }),
  );

  return (
    <main>
      <Hero {...metaConversionConfig.hero} />

      <ProblemAwareness {...metaConversionConfig.problemAwareness} />

      <DreamOutcome
        {...metaConversionConfig.dreamOutcome}
        dreamOutcomeList={dreamOutcomeListWithIcons}
      />

      <OfferDetails {...metaConversionConfig.offerDetails} offerItems={offerItemsWithIcons} />

      <ScarcityUrgency {...metaConversionConfig.scarcityUrgency} />

      <SocialProof {...metaConversionConfig.socialProof} stats={statsWithIcons} />

      <Bonuses {...metaConversionConfig.bonuses} bonuses={bonusesWithIcons} />

      <ObjectionHandling
        {...metaConversionConfig.objectionHandling}
        guarantees={guaranteesWithIcons}
      />

      <DetailedCTA {...metaConversionConfig.detailedCTA} />
    </main>
  );
}

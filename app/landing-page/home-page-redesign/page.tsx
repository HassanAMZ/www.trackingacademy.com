// HomePage.tsx
import Bonuses from "@/components/landing-page/bonuses";
import DetailedCTA from "@/components/landing-page/detailed-cta";
import DreamOutcome from "@/components/landing-page/dream-outcome";
import Hero from "@/components/landing-page/hero";
import ObjectionHandling from "@/components/landing-page/objection-handling";
import OfferDetails from "@/components/landing-page/offer-detail-item";
import ProblemAwareness from "@/components/landing-page/problem-awareness";
import ScarcityUrgency from "@/components/landing-page/scarcity-urgency";
import SocialProof from "@/components/landing-page/social-proof";
import landingConfig from "@/data/offers/home-page.json";
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

export default function HomePage() {
  // Transform offer items to include icon components
  const offerItemsWithIcons = landingConfig.offerDetails.offerItems.map(
    (item) => ({
      ...item,
      icon: iconMap[item.icon as IconName],
    }),
  );

  // Transform dream outcome list to include icon components
  const dreamOutcomeListWithIcons =
    landingConfig.dreamOutcome.dreamOutcomeList.map((item) => ({
      ...item,
      icon: iconMap[item.icon as IconName],
    }));

  // Transform stats to include icon components
  const statsWithIcons = landingConfig.socialProof.stats.map((stat) => ({
    ...stat,
    icon: iconMap[stat.icon as IconName],
  }));

  // Transform bonuses to include icon components
  const bonusesWithIcons = landingConfig.bonuses.bonuses.map((bonus) => ({
    ...bonus,
    icon: iconMap[bonus.icon as IconName],
  }));

  // Transform guarantees to include icon components
  const guaranteesWithIcons = landingConfig.objectionHandling.guarantees.map(
    (guarantee) => ({
      ...guarantee,
      icon: iconMap[guarantee.icon as IconName],
    }),
  );

  return (
    <main>
      <Hero {...landingConfig.hero} />

      <ProblemAwareness {...landingConfig.problemAwareness} />

      <DreamOutcome
        {...landingConfig.dreamOutcome}
        dreamOutcomeList={dreamOutcomeListWithIcons}
      />

      <OfferDetails
        {...landingConfig.offerDetails}
        offerItems={offerItemsWithIcons}
      />

      <ScarcityUrgency {...landingConfig.scarcityUrgency} />

      <SocialProof {...landingConfig.socialProof} stats={statsWithIcons} />

      <Bonuses {...landingConfig.bonuses} bonuses={bonusesWithIcons} />

      <ObjectionHandling
        {...landingConfig.objectionHandling}
        guarantees={guaranteesWithIcons}
      />

      <DetailedCTA {...landingConfig.detailedCTA} />
    </main>
  );
}

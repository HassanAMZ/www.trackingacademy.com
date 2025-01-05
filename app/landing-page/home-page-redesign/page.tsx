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
import HomePageConfig from "@/data/offers/home-page";
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
  const offerItemsWithIcons = HomePageConfig.offerDetails.offerItems.map(
    (item) => ({
      ...item,
      icon: iconMap[item.icon as IconName],
    }),
  );

  // Transform dream outcome list to include icon components
  const dreamOutcomeListWithIcons =
    HomePageConfig.dreamOutcome.dreamOutcomeList.map((item) => ({
      ...item,
      icon: iconMap[item.icon as IconName],
    }));

  // Transform stats to include icon components
  const statsWithIcons = HomePageConfig.socialProof.stats.map((stat) => ({
    ...stat,
    icon: iconMap[stat.icon as IconName],
  }));

  // Transform bonuses to include icon components
  const bonusesWithIcons = HomePageConfig.bonuses.bonuses.map((bonus) => ({
    ...bonus,
    icon: iconMap[bonus.icon as IconName],
  }));

  // Transform guarantees to include icon components
  const guaranteesWithIcons = HomePageConfig.objectionHandling.guarantees.map(
    (guarantee) => ({
      ...guarantee,
      icon: iconMap[guarantee.icon as IconName],
    }),
  );

  return (
    <main>
      <Hero {...HomePageConfig.hero} />

      <ProblemAwareness {...HomePageConfig.problemAwareness} />

      <DreamOutcome
        {...HomePageConfig.dreamOutcome}
        dreamOutcomeList={dreamOutcomeListWithIcons}
      />

      <OfferDetails
        {...HomePageConfig.offerDetails}
        offerItems={offerItemsWithIcons}
      />

      <ScarcityUrgency {...HomePageConfig.scarcityUrgency} />

      <SocialProof {...HomePageConfig.socialProof} stats={statsWithIcons} />

      <Bonuses {...HomePageConfig.bonuses} bonuses={bonusesWithIcons} />

      <ObjectionHandling
        {...HomePageConfig.objectionHandling}
        guarantees={guaranteesWithIcons}
      />

      <DetailedCTA {...HomePageConfig.detailedCTA} />
    </main>
  );
}

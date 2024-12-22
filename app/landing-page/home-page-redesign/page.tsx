// HomePage.tsx
import Bonuses from '@/components/bonuses';
import DetailedCTA from '@/components/detailed-cta';
import DreamOutcome from '@/components/dream-outcome';
import Hero from '@/components/hero';
import ObjectionHandling from '@/components/objection-handling';
import OfferDetails from '@/components/offer-detail-item';
import ProblemAwareness from '@/components/problem-awareness';
import ScarcityUrgency from '@/components/scarcity-urgency';
import SocialProof from '@/components/social-proof';
import landingConfig from '@/data/offers/home-page.json';
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

export default function HomePage() {
  // Function to convert icon strings to components
  const getIcon = (iconName: IconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="mr-2 h-5 w-5 text-primary" /> : null;
  };

  // Transform offer items to include icon components
  const offerItemsWithIcons = landingConfig.offerDetails.offerItems.map((item) => ({
    ...item,
    icon: iconMap[item.icon as IconName],
  }));

  // Transform dream outcome list to include icon components
  const dreamOutcomeListWithIcons = landingConfig.dreamOutcome.dreamOutcomeList.map((item) => ({
    ...item,
    icon: getIcon(item.icon as IconName),
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
  const guaranteesWithIcons = landingConfig.objectionHandling.guarantees.map((guarantee) => ({
    ...guarantee,
    icon: iconMap[guarantee.icon as IconName],
  }));

  return (
    <main>
      <Hero {...landingConfig.hero} />

      <ProblemAwareness {...landingConfig.problemAwareness} />

      <DreamOutcome {...landingConfig.dreamOutcome} dreamOutcomeList={dreamOutcomeListWithIcons} />

      <OfferDetails {...landingConfig.offerDetails} offerItems={offerItemsWithIcons} />

      <ScarcityUrgency {...landingConfig.scarcityUrgency} />

      <SocialProof {...landingConfig.socialProof} stats={statsWithIcons} />

      <Bonuses {...landingConfig.bonuses} bonuses={bonusesWithIcons} />

      <ObjectionHandling {...landingConfig.objectionHandling} guarantees={guaranteesWithIcons} />

      <DetailedCTA {...landingConfig.detailedCTA} />
    </main>
  );
}

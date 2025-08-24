import { OfferData } from "@/data/offers";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

interface MeetingBookingButtonProps {
  buttonText?: string;
  subheading?: boolean;
  wrapperButtonClassName?: string;
  subHeadingClassName?: string;
  offerData?: OfferData;
}

const MeetingBookingButton = ({
  buttonText,
  wrapperButtonClassName,
  offerData,
}: MeetingBookingButtonProps) => {
  const defaultText = offerData?.cta.primary || "Schedule Your Call To Fix your Meta Ads Tracking";

  return (
    <div className="flex justify-center">
      <Button asChild size="lg" className={cn(wrapperButtonClassName)}>
        <Link href="#book-a-meeting">{buttonText || defaultText}</Link>
      </Button>
    </div>
  );
};

export default MeetingBookingButton;

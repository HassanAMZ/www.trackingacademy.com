import Link from "next/link";
import { OfferData } from "@/data/offers";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface MeetingBookingButtonProps {
  buttonText?: string;
  className?: string;
  wrapperButtonClassName?: string;
  offerData?: OfferData;
}
const MeetingBookingButton = ({
  buttonText,
  wrapperButtonClassName = "",
  offerData,
}: MeetingBookingButtonProps) => {
  const defaultText = offerData?.cta.primary || "Schedule Your Call To Fix your Meta Ads Tracking";
  const secondaryText =
    offerData?.cta.secondary || "Start tracking conversions in Meta Ads & Events Manager again";

  return (
    <Button
      asChild
      size="lg"
      className={cn(
        "mx-auto flex flex-col p-6 text-2xl font-semibold transition-transform duration-200 w-full",
        wrapperButtonClassName,
      )}
    >
      <Link href="#book-a-meeting">
        <>
          {buttonText || defaultText}
          <br />
          <span className="text-muted text-base underline">{secondaryText}</span>
        </>
      </Link>
    </Button>
  );
};

export default MeetingBookingButton;

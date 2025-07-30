import { OfferData } from "@/data/offers";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

interface MeetingBookingButtonProps {
  buttonText?: string;
  subheading?: boolean;
  wrapperButtonClassName?: string;
  offerData?: OfferData;
}
const MeetingBookingButton = ({
  buttonText,
  subheading = true,
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
        "mx-auto flex w-full flex-col p-6 text-lg font-semibold shadow-lg shadow-primary-foreground transition-transform duration-200 md:text-2xl",
        wrapperButtonClassName,
      )}
    >
      <Link href="#book-a-meeting">
        <>
          {buttonText || defaultText}
          {subheading && (
            <>
              <br />
              <span className="text-sm text-muted underline md:text-base">{secondaryText}</span>
            </>
          )}
        </>
      </Link>
    </Button>
  );
};

export default MeetingBookingButton;

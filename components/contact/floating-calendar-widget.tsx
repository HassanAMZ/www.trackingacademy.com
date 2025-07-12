"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";
import { Calendar, ChevronDown, User } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";

type UpcomingDate = {
  dayName: string;
  dayNumber: string;
  fullDate: string;
  isToday: boolean;
};

const FloatingCalendarWidget = () => {
  const [isMinimized, setIsMinimized] = useState(true);
  const [showWidget, setShowWidget] = useState(false);
  const [upcomingDates, setUpcomingDates] = useState<UpcomingDate[]>([]);

  useEffect(() => {
    const handlePostMessage = (event: { data: { datalayer_event_name: any } }) => {
      if (event.data && event.data.datalayer_event_name) {
        const eventName = event.data.datalayer_event_name;
        console.log("Received postMessage:", event.data);

        // Only process specific iClosed events
        const allowedEvents = [
          "iclosed_view",
          "iclosed_potential",
          "iclosed_qualified",
          "iclosed_disqualified",
          "iclosed_call_scheduled",
        ];

        if (allowedEvents.includes(eventName)) {
          sendGTMEvent({
            event: "gtm_custom_event",
            datalayer_event_name: eventName,
          });
        }
      }
    };

    window.addEventListener("message", handlePostMessage);

    // Cleanup
    return () => {
      window.removeEventListener("message", handlePostMessage);
    };
  }, []);

  // Generate upcoming dates
  useEffect(() => {
    const generateUpcomingDates = () => {
      const today = new Date();
      const dates = [];

      for (let i = 0; i < 4; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        dates.push({
          dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
          dayNumber: date.getDate().toString().padStart(2, "0"),
          fullDate: date.toISOString().split("T")[0], // YYYY-MM-DD format
          isToday: i === 0,
        });
      }

      setUpcomingDates(dates);
    };

    generateUpcomingDates();
  }, []);

  // Auto-show widget after 3 seconds, but not on contact/book-a-meeting pages
  useEffect(() => {
    const currentUrl = window.location.pathname.toLowerCase();
    const shouldHideWidget =
      currentUrl.includes("contact") ||
      currentUrl.includes("book-a-meeting") ||
      currentUrl.includes("call-booked");

    if (!shouldHideWidget) {
      setShowWidget(true);
      const timer = setTimeout(() => {
        // Auto-expand after showing
        setTimeout(() => setIsMinimized(false), 500);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleMinimize = () => {
    const newMinimizedState = !isMinimized;
    setIsMinimized(newMinimizedState);

    // Track open/close events
    if (newMinimizedState) {
      // Widget is being closed/minimized
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "iclosed_widget_closed",
        widget_action: "minimize",
        widget_type: "floating_calendar",
      });
    } else {
      // Widget is being opened/expanded
      sendGTMEvent({
        event: "gtm_custom_event",
        datalayer_event_name: "iclosed_widget_opened",
        widget_action: "expand",
        widget_type: "floating_calendar",
      });
    }
  };

  if (!showWidget) return null;

  return (
    <>
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("iClosed widget script loaded successfully");
        }}
      />
      {/* Floating Widget */}
      <div className="fixed right-6 bottom-6 z-50">
        {/* Always visible circle button */}
        <Button
          onClick={toggleMinimize}
          size="icon"
          className={cn(
            "h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90",
            "border-2 border-secondary duration-500 animate-in fade-in zoom-in-95",
          )}
        >
          {!isMinimized ? <ChevronDown className="h-6 w-6" /> : <Calendar className="h-6 w-6" />}
        </Button>

        {/* Expanded State - Mini popup with smooth animation */}
        <div
          className={cn(
            "absolute right-0 bottom-16 w-80 origin-bottom-right transition-all duration-300 ease-out sm:w-96",
            isMinimized
              ? "pointer-events-none translate-y-2 scale-95 opacity-0"
              : "pointer-events-auto translate-y-0 scale-100 opacity-100",
          )}
        >
          <Card className="shadow-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/images/avatars/hassan.png" alt="ShahzadaAliHassan" />

                    <AvatarFallback className="bg-primary text-primary-foreground">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-base font-semibold text-card-foreground">
                      Shahzada Ali Hassan
                    </h4>
                  </div>
                </div>
              </div>
            </CardHeader>

            <Separator />

            <CardContent className="pt-4">
              <div className="space-y-4">
                <div>
                  <h5 className="mb-2 font-bold text-card-foreground">
                    1-on-1 Meeting with Shahzada
                  </h5>
                  <p className="mb-3 text-sm leading-relaxed text-foreground">
                    Book a 1 on 1 Meeting with me to discuss Fixing Your Tracking. The meeting will
                    be held on Google Meets and a link will be in the invite description.
                  </p>
                </div>

                {/* Quick date options - Dynamic dates */}
                <div className="grid grid-cols-4 gap-2">
                  {upcomingDates.map((date, index) => (
                    <Button
                      key={index}
                      data-iclosed-link="https://app.iclosed.io/e/shahzadaalihassan/1-on-1-meeting-with-shahzada"
                      data-embed-type="popup"
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        sendGTMEvent({
                          event: "gtm_custom_event",
                          datalayer_event_name: "iclosed_widget_clicked",
                          click_type: "date_selection",
                          selected_date: date.fullDate,
                          is_today: date.isToday,
                        })
                      }
                      className={cn(
                        "h-auto flex-col p-2 hover:bg-accent/10",
                        date.isToday
                          ? "border-accent bg-accent/10 text-accent-foreground hover:bg-accent/20"
                          : "bg-transparent",
                      )}
                    >
                      <span className="text-xs text-foreground">{date.dayName}</span>
                      <span className="text-sm font-semibold">{date.dayNumber}</span>
                    </Button>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  data-iclosed-link="https://app.iclosed.io/e/shahzadaalihassan/1-on-1-meeting-with-shahzada"
                  data-embed-type="popup"
                  className="w-full bg-primary py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 sm:text-base"
                  size="lg"
                  onClick={() =>
                    sendGTMEvent({
                      event: "gtm_custom_event",
                      datalayer_event_name: "iclosed_widget_clicked",
                      click_type: "main_cta",
                      button_text: "Schedule a 1-on-1 Call",
                    })
                  }
                >
                  Schedule a 1-on-1 Call
                </Button>

                {/* Footer - Shorter text */}
                <p className="text-center text-xs leading-relaxed text-foreground">
                  By providing your info, you consent to contact via mail, phone, text, or email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default FloatingCalendarWidget;

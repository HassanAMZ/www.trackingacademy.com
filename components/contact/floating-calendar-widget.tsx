"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";
import { Calendar, ChevronDown, User, X } from "lucide-react";
import Script from "next/script";
import { useEffect, useState } from "react";
import { GlowEffect } from "../ui/glow-effect";

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
    return () => window.removeEventListener("message", handlePostMessage);
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
          fullDate: date.toISOString().split("T")[0],
          isToday: i === 0,
        });
      }

      setUpcomingDates(dates);
    };

    generateUpcomingDates();
  }, []);

  // Auto-show widget after delay, but not on specific pages
  useEffect(() => {
    const currentUrl = window.location.pathname.toLowerCase();
    const shouldHideWidget =
      currentUrl.includes("contact") ||
      currentUrl.includes("book-a-meeting") ||
      currentUrl.includes("call-booked");

    if (!shouldHideWidget) {
      setShowWidget(true);
      const timer = setTimeout(() => {
        setTimeout(() => setIsMinimized(false), 500);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleMinimize = () => {
    const newMinimizedState = !isMinimized;
    setIsMinimized(newMinimizedState);

    sendGTMEvent({
      event: "gtm_custom_event",
      datalayer_event_name: newMinimizedState ? "iclosed_widget_closed" : "iclosed_widget_opened",
      widget_action: newMinimizedState ? "minimize" : "expand",
      widget_type: "floating_calendar",
    });
  };

  if (!showWidget) return null;

  return (
    <>
      <Script
        src="https://app.iclosed.io/assets/widget.js"
        strategy="lazyOnload"
        onLoad={() => console.log("iClosed widget script loaded successfully")}
      />

      <div className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6">
        {/* Floating toggle button */}
        <div className="relative">
          <GlowEffect className="rounded-full" />
          <Button
            onClick={toggleMinimize}
            size="icon"
            className={cn(
              "relative h-12 w-12 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl sm:h-14 sm:w-14",
              "animate-in fade-in zoom-in-95 duration-500",
              "bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            {!isMinimized ? (
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Calendar className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </Button>
        </div>

        {/* Expanded widget */}
        <div
          className={cn(
            "absolute right-0 bottom-14 w-72 origin-bottom-right transition-all duration-300 ease-out sm:bottom-16 sm:w-80 lg:w-96",
            isMinimized
              ? "pointer-events-none translate-y-2 scale-95 opacity-0"
              : "pointer-events-auto translate-y-0 scale-100 opacity-100",
          )}
        >
          <Card className="border border-primary">
            <CardHeader className="rounded-t-xl border-b-2">
              <div className="flex items-start justify-between">
                <CardTitle className="flex items-center gap-2 sm:gap-3">
                  <Avatar className="h-10 w-10 ring-2 ring-border">
                    <AvatarImage src="/images/avatars/hassan.png" alt="Shahzada Ali Hassan" />
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      <User className="h-5 w-5 sm:h-6 sm:w-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-0.5 sm:space-y-1">
                    <h4 className="text-sm leading-tight font-semibold sm:text-base">
                      {process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan"}
                    </h4>
                    <p className="flex items-center gap-1.5 text-xs font-medium text-green-600 sm:text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 sm:h-2 sm:w-2"></span>
                      Available Now
                    </p>
                  </div>
                </CardTitle>

                {/* Simple inline close button */}
                <Button
                  onClick={toggleMinimize}
                  variant="secondary"
                  size="sm"
                  className="h-7 w-7 cursor-pointer border p-0 sm:h-8 sm:w-8"
                >
                  <X className="h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="space-y-3 pt-3 sm:space-y-4">
              <div className="space-y-2 sm:space-y-3">
                <h5 className="text-base font-semibold sm:text-lg">1-on-1 Meeting with Shahzada</h5>
                <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Book a 1-on-1 meeting with me to discuss{" "}
                  <span className="font-medium text-foreground">Fixing Your Tracking</span>. The
                  meeting will be held on Google Meets with a link in the invite.
                </p>
              </div>

              {/* Quick date selection */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs font-medium sm:text-sm">Quick Select:</p>
                <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                  {upcomingDates.map((date, index) => (
                    <Button
                      key={index}
                      data-iclosed-link="https://app.iclosed.io/e/shahzadaalihassan/1-on-1-meeting-with-shahzada"
                      data-embed-type="popup"
                      variant={date.isToday ? "default" : "outline"}
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
                        "h-auto cursor-pointer flex-col gap-0.5 p-2 transition-all duration-200 sm:gap-1 sm:p-3",
                        date.isToday
                          ? "shadow-sm"
                          : "bg-card hover:bg-accent hover:text-accent-foreground",
                      )}
                    >
                      <span className="text-xs font-medium opacity-80 sm:text-xs">
                        {date.dayName}
                      </span>
                      <span className="text-sm font-bold sm:text-lg">{date.dayNumber}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Main CTA */}
              <Button
                data-iclosed-link="https://app.iclosed.io/e/shahzadaalihassan/1-on-1-meeting-with-shahzada"
                data-embed-type="popup"
                className="w-full cursor-pointer py-4 text-sm font-semibold shadow-md transition-all duration-200 hover:shadow-lg sm:py-6 sm:text-base"
                onClick={() =>
                  sendGTMEvent({
                    event: "gtm_custom_event",
                    datalayer_event_name: "iclosed_widget_clicked",
                    click_type: "main_cta",
                    button_text: "Schedule a 1-on-1 Call",
                  })
                }
              >
                📅 Schedule a 1-on-1 Call
              </Button>

              {/* Privacy notice */}
              <div className="rounded-md px-2 sm:px-3">
                <p className="text-center text-xs leading-relaxed text-muted-foreground">
                  🔒 By providing your information, you consent to contact via email, phone, or
                  text.
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

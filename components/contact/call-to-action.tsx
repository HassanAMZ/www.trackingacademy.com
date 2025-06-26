"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./contact-form";

interface CallToActionProps {
  buttonText?: string;
  thankYouUrl?: string;
}

export default function CallToAction({
  buttonText = "Book a Call",
  thankYouUrl = "/contact/book-a-meeting",
}: CallToActionProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full">
          <span className="hidden sm:block">{buttonText}</span>
          <span className="block sm:hidden">Contact</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact Form</DialogTitle>
          <DialogDescription>Fill out the contact form and team will reach out.</DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
}

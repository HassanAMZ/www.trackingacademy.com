"use client";

import { handleRequestABlogForm } from "@/actions/handle-request-a-blog";
import { CheckCircle, FileText, Mail } from "lucide-react";
import React, { useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const initialState = {
  message: "",
};

interface RequestABlogFormProps {
  searchTerm: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-primary transition-colors hover:bg-primary/90"
    >
      {pending ? (
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
          Submitting...
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Request Blog
        </div>
      )}
    </Button>
  );
}

const RequestABlogForm: React.FC<RequestABlogFormProps> = ({ searchTerm }) => {
  const [state, formAction] = useActionState(handleRequestABlogForm, initialState);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [searchTermInput, setSearchTermInput] = useState(searchTerm);

  useEffect(() => {
    setSearchTermInput(searchTerm);
  }, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTermInput(e.target.value);
  };

  if (state?.message && !formSubmitted) {
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return (
      <div className="flex items-center gap-2 font-medium text-green-500">
        <CheckCircle className="h-5 w-5" />
        <span>Thank you! Your request has been submitted.</span>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md">
      <form action={formAction} className="space-y-4" id="request-a-blog">
        <div className="space-y-3">
          <div className="relative">
            <Mail className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              type="email"
              name="email"
              placeholder="Your email address"
              required
              className="border-border/50 bg-background/50 pl-10 transition-colors focus:border-primary"
            />
          </div>
          <div className="relative">
            <FileText className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              type="text"
              name="searchTerm"
              value={searchTermInput}
              onChange={handleChange}
              placeholder="Blog topic or keyword"
              className="border-border/50 bg-background/50 pl-10 transition-colors focus:border-primary"
            />
          </div>
        </div>
        <SubmitButton />
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
    </div>
  );
};

export default RequestABlogForm;

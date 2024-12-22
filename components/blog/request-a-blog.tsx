'use client';

import { handleRequestABlogForm } from '@/actions/handle-request-a-blog';
import Text from '@/components/ui/text';
import React, { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const initialState = {
  message: '',
};

interface RequestABlogFormProps {
  searchTerm: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Submitting...' : 'Request Blog'}
    </Button>
  );
}

const RequestABlogForm: React.FC<RequestABlogFormProps> = ({ searchTerm }) => {
  const [state, formAction] = useFormState(handleRequestABlogForm, initialState);

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
      <Text as="p" variant="bodyMd">
        Thank you! Your request has been submitted.
      </Text>
    );
  }

  return (
    <form action={formAction} className="mt-4 w-full max-w-md space-y-4">
      <Input type="email" name="email" placeholder="Your email" required className="mt-2" />
      <Input
        type="text"
        name="searchTerm"
        value={searchTermInput}
        onChange={handleChange}
        className="mt-2"
      />
      <SubmitButton />
      <Text as="p" variant="bodyMd" aria-live="polite" className="sr-only">
        {state?.message}
      </Text>
    </form>
  );
};

export default RequestABlogForm;

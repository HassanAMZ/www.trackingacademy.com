'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import TypographyP from '../ui/typography-p';
import { handleRequestABlogForm } from '@/actions/handle-request-a-blog';

const initialState = {
  message: '',
};

interface RequestABlogFormProps {
  searchTerm: string;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type='submit' disabled={pending} className='w-full'>
      {pending ? 'Submitting...' : 'Request Blog'}
    </Button>
  );
}

const RequestABlogForm: React.FC<RequestABlogFormProps> = ({ searchTerm }) => {
  const [state, formAction] = useFormState(
    handleRequestABlogForm,
    initialState
  );

  const [formSubmitted, setFormSubmitted] = React.useState(false);

  if (state?.message && !formSubmitted) {
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return (
      <TypographyP>Thank you! Your request has been submitted.</TypographyP>
    );
  }

  return (
    <form action={formAction} className='mt-4 space-y-4 w-full max-w-md'>
      <Input
        type='email'
        name='email'
        placeholder='Your email'
        required
        className='mt-2'
      />
      <Input
        type='text'
        name='searchTerm'
        value={searchTerm}
        readOnly
        className='mt-2'
      />
      <SubmitButton />
      <TypographyP aria-live='polite' className='sr-only'>
        {state?.message}
      </TypographyP>
    </form>
  );
};

export default RequestABlogForm;

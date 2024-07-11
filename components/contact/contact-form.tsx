'use client';
import React, { useState, useEffect, ChangeEvent } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { createContact } from '@/actions/contact-us';
import { useRouter } from 'next/navigation';
import TypographyP from '../ui/typography-p';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from '@/components/ui/select';
import { cn } from '../lib/utils';
import Container from '../ui/container';
import TypographyH1 from '../ui/typography-h1';
import Link from 'next/link';
import { GTMCustomEvent } from '../analytics/GTMEvents';
import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from '@/components/ui/card';
interface FormData {
 firstName: string;
 lastName: string;
 companyName?: string;
 companySize?: string;
 jobTitle?: string;
 email: string;
 phone: string;
 websiteLink: string;
 integrationType: string;
 budget: string;
 projectDescription: string;
 currentSetup: string;
 meetingPreference?: string;
 monthlyVisitors: string;
 businessModel: string;
 topMarketingChannels: string;
 currentChallenges: string;
 conversionRateChanges: string;
 tagManagementSystem: string;
 trackingGoal: string;
 specificRequirements: string;
 implementationTimeline: string;
}

interface Errors {
 firstName?: string;
 lastName?: string;
 jobTitle?: string;
 email?: string;
 phone?: string;
 websiteLink?: string;
 integrationType?: string;
 budget?: string;
 projectDescription?: string;
 currentSetup?: string;
 meetingPreference?: string;
 monthlyVisitors?: string;
 businessModel?: string;
 topMarketingChannels?: string;
 currentChallenges?: string;
 conversionRateChanges?: string;
 tagManagementSystem?: string;
 trackingGoal?: string;
 specificRequirements?: string;
 implementationTimeline?: string;
}

const initialState = {
 message: '',
};

function SubmitButton({ validateStep }: { validateStep: () => boolean }) {
 const { pending } = useFormStatus();

 const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  if (!validateStep()) {
   e.preventDefault();
  }
 };

 return (
  <Button
   type='submit'
   disabled={pending}
   onClick={handleClick}
   className={`${pending ? 'opacity-50 cursor-not-allowed' : ''}`}>
   {pending ? 'Submitting...' : 'Submit Contact Form'}
  </Button>
 );
}

interface ContactFormProps {
 thankYouUrl?: string;
 gtmCustomEventName?: string;
 isItAFit?: boolean;
 className?: string;
}

export default function ContactForm({
 thankYouUrl = '/contact/book-a-meeting',
 gtmCustomEventName = 'contact_form_submission',
 isItAFit = true,
 className,
}: ContactFormProps) {
 const [state, formAction] = useFormState(createContact, initialState);
 const [formSubmitted, setFormSubmitted] = useState(false);
 const [currentStep, setCurrentStep] = useState(1);
 const [maxStep, setMaxStep] = useState(1);
 const [formData, setFormData] = useState<FormData>({
  firstName: '',
  lastName: '',
  companySize: '',
  companyName: '',
  jobTitle: '',
  email: '',
  phone: '',
  websiteLink: '',
  integrationType: '',
  budget: '',
  projectDescription: '',
  currentSetup: '',
  meetingPreference: '',
  monthlyVisitors: '',
  businessModel: '',
  topMarketingChannels: '',
  currentChallenges: '',
  conversionRateChanges: '',
  tagManagementSystem: '',
  trackingGoal: '',
  specificRequirements: '',
  implementationTimeline: '',
 });

 const [errors, setErrors] = useState<Errors>({});
 const router = useRouter();

 useEffect(() => {
  if (state?.message && !formSubmitted) {
   setFormSubmitted(true);
   router.push(thankYouUrl);
  }
 }, [state?.message, formSubmitted, router, thankYouUrl]);

 const validateStep = (step: number): boolean => {
  const newErrors: Errors = {};
  switch (step) {
   case 1:
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.meetingPreference)
     newErrors.meetingPreference = 'Meeting preference is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
     newErrors.email = 'Email is invalid';
    break;
   case 2:
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    break;
   case 3:
    if (!formData.websiteLink)
     newErrors.websiteLink = 'Website URL is required';
    else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(formData.websiteLink))
     newErrors.websiteLink = 'Website URL is invalid';
    if (!formData.integrationType)
     newErrors.integrationType = 'Integration type is required';
    if (!formData.currentSetup)
     newErrors.currentSetup = 'Current setup is required';
    if (!formData.monthlyVisitors)
     newErrors.monthlyVisitors = 'Monthly visitors is required';
    if (!formData.businessModel)
     newErrors.businessModel = 'Business model is required';
    if (!formData.topMarketingChannels)
     newErrors.topMarketingChannels = 'Top marketing channels are required';
    if (!formData.currentChallenges)
     newErrors.currentChallenges = 'Current challenges are required';
    break;
   case 4:
    if (!formData.budget) newErrors.budget = 'Budget is required';
    if (!formData.projectDescription)
     newErrors.projectDescription = 'Project description is required';
    break;
  }
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
 };

 const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  if (validateStep(currentStep)) {
   const newStep = currentStep + 1;
   setCurrentStep(newStep);
   setMaxStep(Math.max(maxStep, newStep));
  }
 };

 const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  setCurrentStep(currentStep - 1);
 };

 const handleInputChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
 ) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (validateStep(currentStep)) {
   const formDataToSubmit = new FormData();
   Object.entries(formData).forEach(([key, value]) => {
    formDataToSubmit.append(key, value);
   });
   formAction(formDataToSubmit);
  }
 };

 if (formSubmitted) {
  const userData = {
   email: formData.email,
   phone: formData.phone,
   address: {
    first_name: formData.firstName,
    last_name: formData.lastName,
   },
  };

  return (
   <Container>
    <GTMCustomEvent
     userData={{
      email: formData.email,
      phone: formData.phone,
      address: {
       first_name: formData.firstName,
       last_name: formData.lastName,
      },
     }}
     eventName={gtmCustomEventName}
     eventDetails={{
      website_link: formData.websiteLink,
      integration_type: formData.integrationType,
      project_description: formData.projectDescription,
      budget: formData.budget,
      current_setup: formData.currentSetup,
      meeting_preference: formData.meetingPreference,
      monthly_visitors: formData.monthlyVisitors,
      business_model: formData.businessModel,
      topMarketing_channels: formData.topMarketingChannels,
      current_challenges: formData.currentChallenges,
      conversion_rate_changes: formData.conversionRateChanges,
      tagManagement_system: formData.tagManagementSystem,
      tracking_goal: formData.trackingGoal,
      specific_requirements: formData.specificRequirements,
      implementation_timeline: formData.implementationTimeline,
     }}
    />
    <TypographyH1 className='text-center'>Thank you!</TypographyH1>
    <TypographyP>Your request has been submitted.</TypographyP>
    <TypographyP>
     You'll be redirected to Book a Meeting Page. If the redirects does not
     happen,{' '}
     <Button asChild variant={'link'} className='p-0'>
      <Link href={'/contact/book-a-meeting'}>click here</Link>
     </Button>
    </TypographyP>
   </Container>
  );
 }

 const renderNavigation = () => {
  const steps = ['Meeting', 'Account', 'Project', 'Tracking'];
  return (
   <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-2 md:py-12 justify-center items-end text-center pb-6'>
    {steps.map((step, index) => (
     <div
      key={index}
      className={`flex items-center flex-row md:flex-col ${
       index + 1 === currentStep ? 'text-primary' : 'text-foreground'
      } ${index + 1 <= maxStep ? 'cursor-pointer' : 'cursor-default'}`}
      onClick={() => {
       if (index + 1 <= maxStep) {
        setCurrentStep(index + 1);
       }
      }}
      style={{ cursor: index + 1 <= maxStep ? 'pointer' : 'default' }}>
      <div
       className={`rounded-full h-8 w-8 flex items-center justify-center border-2 ${
        index + 1 === currentStep
         ? 'bg-primary text-secondary'
         : 'border-secondary'
       }`}>
       {index + 1}
      </div>
      <span className='ml-2'>{step}</span>
     </div>
    ))}
   </div>
  );
 };

 const renderStep = () => {
  switch (currentStep) {
   case 1:
    return (
     <>
      <div className='text-left md:text-center py-6'>
       <TypographyH1>Work with Tracking Academy </TypographyH1>
       <TypographyP>
        Enter your business email and select your preferred meeting type.
       </TypographyP>
      </div>

      <div className='grid gap-3'>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='email'>
         Business Email Address
        </Label>
        <Input
         required
         type='email'
         name='email'
         placeholder='example@email.com'
         value={formData.email}
         onChange={handleInputChange}
        />
        {errors.email && (
         <span className='text-destructive'>{errors.email}</span>
        )}
       </div>
      </div>

      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='meetingPreference'>
        Select meeting type
       </Label>
       <Select
        name='meetingPreference'
        onValueChange={(value) =>
         setFormData({ ...formData, meetingPreference: value })
        }>
        <SelectTrigger>
         <SelectValue placeholder='Select your current setup' />
        </SelectTrigger>
        <SelectContent>
         <SelectItem value='google-meets'>Google Meets</SelectItem>
         <SelectItem value='zoom'>Zoom</SelectItem>
        </SelectContent>
       </Select>
       {errors.meetingPreference && (
        <span className='text-destructive'>{errors.meetingPreference}</span>
       )}
      </div>
      <Button className='w-max self-end' type='button' onClick={nextStep}>
       Continue
      </Button>
      {isItAFit && (
       <TypographyP className='text-sm text-left md:text-center py-12'>
        Have a project but not quite ready to contact us?{' '}
        <Button asChild variant={'link'} className='p-0 inline'>
         <Link href='/contact/is-tracking-academy-a-fit-for-you'>
          See if Tracking Academy is a fit for you.
         </Link>
        </Button>
       </TypographyP>
      )}
     </>
    );
   case 2:
    return (
     <>
      <div className='flex flex-col space-y-3'>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='firstName'>
         First Name
        </Label>
        <Input
         required
         type='text'
         name='firstName'
         placeholder='John'
         value={formData.firstName}
         onChange={handleInputChange}
        />
        {errors.firstName && (
         <span className='text-destructive'>{errors.firstName}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='lastName'>
         Last Name
        </Label>
        <Input
         required
         type='text'
         name='lastName'
         placeholder='Doe'
         value={formData.lastName}
         onChange={handleInputChange}
        />
        {errors.lastName && (
         <span className='text-destructive'>{errors.lastName}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='jobTitle'>
         Job Title
        </Label>
        <Input
         type='text'
         name='jobTitle'
         placeholder='CEO / Founder'
         value={formData.jobTitle}
         onChange={handleInputChange}
        />
       </div>

       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='companyName'>
         Company Name
        </Label>
        <Input
         type='text'
         name='companyName'
         placeholder='TrackingAcademy'
         value={formData.companyName}
         onChange={handleInputChange}
        />
       </div>

       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='companySize'>
         Company Size
        </Label>
        <Input
         type='text'
         name='companySize'
         placeholder='1-10'
         value={formData.companySize}
         onChange={handleInputChange}
        />
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='phone'>
         Phone
        </Label>
        <Input
         required
         type='tel'
         name='phone'
         placeholder='123-456-7890'
         value={formData.phone}
         onChange={handleInputChange}
        />
        {errors.phone && (
         <span className='text-destructive'>{errors.phone}</span>
        )}
       </div>
      </div>
      <div className='flex justify-between'>
       <Button type='button' variant={'outline'} onClick={prevStep}>
        Previous
       </Button>
       <Button type='button' onClick={nextStep}>
        Continue
       </Button>
      </div>
     </>
    );
   case 3:
    return (
     <>
      <div className='flex flex-col space-y-3'>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='websiteLink'>
         Website URL
        </Label>
        <Input
         required
         type='url'
         name='websiteLink'
         placeholder='https://www.example.com'
         value={formData.websiteLink}
         onChange={handleInputChange}
        />
        {errors.websiteLink && (
         <span className='text-destructive'>{errors.websiteLink}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='integrationType'>
         I want help with...
        </Label>
        <Input
         required
         type='text'
         name='integrationType'
         placeholder='Setting up google analytics 4'
         value={formData.integrationType}
         onChange={handleInputChange}
        />
        {errors.integrationType && (
         <span className='text-destructive'>{errors.integrationType}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='currentSetup'>
         Current Conversion Tracking Setup
        </Label>
        <Select
         name='currentSetup'
         onValueChange={(value) =>
          setFormData({ ...formData, currentSetup: value })
         }>
         <SelectTrigger>
          <SelectValue placeholder='Select your current setup' />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value='google-analytics'>Google Analytics</SelectItem>
          <SelectItem value='facebook-pixel'>Facebook Pixel</SelectItem>
          <SelectItem value='custom-solution'>Custom Solution</SelectItem>
          <SelectItem value='other'>Other</SelectItem>
         </SelectContent>
        </Select>
        {errors.currentSetup && (
         <span className='text-destructive'>{errors.currentSetup}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='monthlyVisitors'>
         Monthly Website Visitors
        </Label>
        <Input
         required
         type='number'
         name='monthlyVisitors'
         placeholder='e.g., 10000'
         value={formData.monthlyVisitors}
         onChange={handleInputChange}
        />
        {errors.monthlyVisitors && (
         <span className='text-destructive'>{errors.monthlyVisitors}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='businessModel'>
         Primary Business Model
        </Label>
        <Select
         name='businessModel'
         onValueChange={(value) =>
          setFormData({ ...formData, businessModel: value })
         }>
         <SelectTrigger>
          <SelectValue placeholder='Select your business model' />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value='ecommerce'>E-commerce</SelectItem>
          <SelectItem value='saas'>SaaS</SelectItem>
          <SelectItem value='lead-generation'>Lead Generation</SelectItem>
          <SelectItem value='content-monetization'>
           Content Monetization
          </SelectItem>
          <SelectItem value='other'>Other</SelectItem>
         </SelectContent>
        </Select>
        {errors.businessModel && (
         <span className='text-destructive'>{errors.businessModel}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='topMarketingChannels'>
         Top 3 Marketing Channels
        </Label>
        <Input
         required
         type='text'
         name='topMarketingChannels'
         placeholder='e.g., SEO, PPC, Social Media'
         value={formData.topMarketingChannels}
         onChange={handleInputChange}
        />
        {errors.topMarketingChannels && (
         <span className='text-destructive'>{errors.topMarketingChannels}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='currentChallenges'>
         Main Challenges with Current Tracking Setup
        </Label>
        <Textarea
         name='currentChallenges'
         placeholder='Describe your main challenges'
         value={formData.currentChallenges}
         onChange={handleInputChange}
        />
        {errors.currentChallenges && (
         <span className='text-destructive'>{errors.currentChallenges}</span>
        )}
       </div>
      </div>
      <div className='flex justify-between'>
       <Button type='button' variant={'outline'} onClick={prevStep}>
        Previous
       </Button>

       <Button type='button' onClick={nextStep}>
        Continue
       </Button>
      </div>
     </>
    );
   case 4:
    return (
     <>
      <div className='flex flex-col space-y-3'>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='budget'>
         Expected Budget (USD)
        </Label>
        <Input
         required
         type='number'
         name='budget'
         placeholder='Enter Your Budget in USD'
         min='0'
         value={formData.budget}
         onChange={handleInputChange}
        />
        {errors.budget && (
         <span className='text-destructive'>{errors.budget}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='projectDescription'>
         Project Description
        </Label>
        <Textarea
         name='projectDescription'
         required
         className='h-32 bg-background'
         value={formData.projectDescription}
         onChange={handleInputChange}
        />
        {errors.projectDescription && (
         <span className='text-destructive'>{errors.projectDescription}</span>
        )}
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='conversionRateChanges'>
         Recent Significant Changes in Conversion Rates
        </Label>
        <Textarea
         name='conversionRateChanges'
         placeholder='Describe any recent changes'
         value={formData.conversionRateChanges}
         onChange={handleInputChange}
        />
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='tagManagementSystem'>
         Current Tag Management System
        </Label>
        <Select
         name='tagManagementSystem'
         onValueChange={(value) =>
          setFormData({ ...formData, tagManagementSystem: value })
         }>
         <SelectTrigger>
          <SelectValue placeholder='Select your tag management system' />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value='google-tag-manager'>Google Tag Manager</SelectItem>
          <SelectItem value='tealium'>Tealium</SelectItem>
          <SelectItem value='adobe-launch'>Adobe Launch</SelectItem>
          <SelectItem value='none'>None</SelectItem>
          <SelectItem value='other'>Other</SelectItem>
         </SelectContent>
        </Select>
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='trackingGoal'>
         Primary Goal for Improving Tracking
        </Label>
        <Select
         name='trackingGoal'
         onValueChange={(value) =>
          setFormData({ ...formData, trackingGoal: value })
         }>
         <SelectTrigger>
          <SelectValue placeholder='Select your primary goal' />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value='increase-roas'>Increase ROAS</SelectItem>
          <SelectItem value='improve-data-accuracy'>
           Improve Data Accuracy
          </SelectItem>
          <SelectItem value='comply-with-regulations'>
           Comply with Privacy Regulations
          </SelectItem>
          <SelectItem value='other'>Other</SelectItem>
         </SelectContent>
        </Select>
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='specificRequirements'>
         Specific Integration Requirements
        </Label>
        <Textarea
         name='specificRequirements'
         placeholder='Describe any specific requirements'
         value={formData.specificRequirements}
         onChange={handleInputChange}
        />
       </div>
       <div className='grid w-full items-center'>
        <Label className='pb-2' htmlFor='implementationTimeline'>
         Desired Implementation Timeline
        </Label>
        <Select
         name='implementationTimeline'
         onValueChange={(value) =>
          setFormData({ ...formData, implementationTimeline: value })
         }>
         <SelectTrigger>
          <SelectValue placeholder='Select your desired timeline' />
         </SelectTrigger>
         <SelectContent>
          <SelectItem value='asap'>As Soon As Possible</SelectItem>
          <SelectItem value='1-2-weeks'>1-2 Weeks</SelectItem>
          <SelectItem value='2-4-weeks'>2-4 Weeks</SelectItem>
          <SelectItem value='1-2-months'>1-2 Months</SelectItem>
          <SelectItem value='flexible'>Flexible</SelectItem>
         </SelectContent>
        </Select>
       </div>
      </div>
      <div className='flex justify-between'>
       <Button type='button' variant={'outline'} onClick={prevStep}>
        Previous
       </Button>

       <SubmitButton validateStep={() => validateStep(currentStep)} />
      </div>
     </>
    );
   default:
    return null;
  }
 };

 return (
  <section className={cn('w-full py-2', className)}>
   <div className='rounded-lg'>
    {renderNavigation()}
    <section className='mx-auto max-w-3xl '>
     <Card className='w-full rounded-t-lg'>
      <CardHeader></CardHeader>
      <CardContent>
       <form onSubmit={handleSubmit} className='flex flex-col space-y-3'>
        {renderStep()}
        <TypographyP aria-live='polite' className='sr-only'>
         {state?.message}
        </TypographyP>
       </form>
      </CardContent>
     </Card>
    </section>
   </div>
  </section>
 );
}

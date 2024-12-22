'use client';
import { createCareerApplication } from '@/actions/handle-join-the-team';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { GTMCustomEvent } from '../analytics/GTMEvents';
import { cn } from '../lib/utils';
import { Card, CardContent } from '../ui/card';
import Text from '../ui/text';

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  dob: string;
  country: string;
  gender: string;
  city: string;
  postalCode: string;
  linkedinProfile: string;
  upworkProfile: string;
  phone: string;
  maritalStatus: string;
  degree: string;
  hasGoodLaptopAndInternet: string;
  position: string;
  currentWorkStatus: string;
  lastJobDesignation: string;
  businessDevelopmentExperience: string;
  experienceInYears: string;
  lastJobCompanyName: string;
  lastJobResponsibilities: string;
  professionalBackground: string;
  mostChallengingDealOrClient: string;
  coverLetter1: string;
  coverLetter2: string;
  coverLetter3: string;
  loomVideo1: string;
  loomVideo2: string;
  loomVideo3: string;
  lastSalaryAndCommission: string;
  expectedSalary: string;
  salaryTargetIn3Years: string;
  futureInFiveYears: string;
}

interface Errors {
  email?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  country?: string;
  gender?: string;
  city?: string;
  postalCode?: string;
  linkedinProfile?: string;
  upworkProfile?: string;
  phone?: string;
  maritalStatus?: string;
  degree?: string;
  hasGoodLaptopAndInternet?: string;
  position?: string;
  currentWorkStatus?: string;
  lastJobDesignation?: string;
  businessDevelopmentExperience?: string;
  experienceInYears?: string;
  lastJobCompanyName?: string;
  lastJobResponsibilities?: string;
  professionalBackground?: string;
  mostChallengingDealOrClient?: string;
  coverLetter1?: string;
  coverLetter2?: string;
  coverLetter3?: string;
  loomVideo1?: string;
  loomVideo2?: string;
  loomVideo3?: string;
  lastSalaryAndCommission?: string;
  expectedSalary?: string;
  salaryTargetIn3Years?: string;
  futureInFiveYears?: string;
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
      type="submit"
      disabled={pending}
      onClick={handleClick}
      className={`${pending ? 'cursor-not-allowed opacity-50' : ''}`}
    >
      {pending ? 'Submitting...' : 'Submit Career Form'}
    </Button>
  );
}

interface CareerFormProps {
  thankYouUrl?: string;
  gtmCustomEventName?: string;
  isItAFit?: boolean;
  formHeader?: boolean;
  className?: string;
}

export default function CareerForm({
  thankYouUrl = '/career/thank-you',
  gtmCustomEventName = 'career_form_submission',
  isItAFit = true,
  formHeader = true,
  className,
}: CareerFormProps) {
  const [state, formAction] = useFormState(createCareerApplication, initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    dob: '',
    country: '',
    gender: '',
    city: '',
    postalCode: '',
    linkedinProfile: '',
    upworkProfile: '',
    phone: '',
    maritalStatus: '',
    degree: '',
    hasGoodLaptopAndInternet: '',
    position: 'Upwork Business Developer',
    currentWorkStatus: '',
    lastJobDesignation: '',
    businessDevelopmentExperience: '',
    experienceInYears: '',
    lastJobCompanyName: '',
    lastJobResponsibilities: '',
    professionalBackground: '',
    mostChallengingDealOrClient: '',
    coverLetter1: '',
    coverLetter2: '',
    coverLetter3: '',
    loomVideo1: '',
    loomVideo2: '',
    loomVideo3: '',
    lastSalaryAndCommission: '',
    expectedSalary: '',
    salaryTargetIn3Years: '',
    futureInFiveYears: '',
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
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.dob) newErrors.dob = 'Date of Birth is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.postalCode) newErrors.postalCode = 'Postal Code is required';
        if (!formData.linkedinProfile) newErrors.linkedinProfile = 'LinkedIn Profile is required';
        if (!formData.upworkProfile) newErrors.upworkProfile = 'Upwork Profile is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital Status is required';
        if (!formData.degree) newErrors.degree = 'Degree is required';
        if (!formData.hasGoodLaptopAndInternet)
          newErrors.hasGoodLaptopAndInternet = 'Laptop and Internet connection is required';
        break;
      case 2:
        if (!formData.currentWorkStatus)
          newErrors.currentWorkStatus = 'Current work status is required';
        if (!formData.lastJobDesignation)
          newErrors.lastJobDesignation = 'Last job designation is required';
        if (!formData.businessDevelopmentExperience)
          newErrors.businessDevelopmentExperience = 'Business development experience is required';
        if (!formData.experienceInYears)
          newErrors.experienceInYears = 'Experience in years is required';
        if (!formData.lastJobCompanyName)
          newErrors.lastJobCompanyName = 'Last job company name is required';
        if (!formData.lastJobResponsibilities)
          newErrors.lastJobResponsibilities = 'Last job responsibilities are required';
        if (!formData.professionalBackground)
          newErrors.professionalBackground = 'Professional background is required';
        if (!formData.mostChallengingDealOrClient)
          newErrors.mostChallengingDealOrClient = 'Most challenging deal or client is required';
        break;
      case 3:
        if (!formData.coverLetter1)
          newErrors.coverLetter1 = 'Cover letter for Job Post 01 is required';
        if (!formData.loomVideo1) newErrors.loomVideo1 = 'Loom video for Job Post 01 is required';
        if (!formData.coverLetter2)
          newErrors.coverLetter2 = 'Cover letter for Job Post 02 is required';
        if (!formData.loomVideo2) newErrors.loomVideo2 = 'Loom video for Job Post 02 is required';
        if (!formData.coverLetter3)
          newErrors.coverLetter3 = 'Cover letter for Job Post 03 is required';
        if (!formData.loomVideo3) newErrors.loomVideo3 = 'Loom video for Job Post 03 is required';
        break;
      case 4:
        if (!formData.lastSalaryAndCommission)
          newErrors.lastSalaryAndCommission = 'Last salary and commission is required';
        if (!formData.expectedSalary) newErrors.expectedSalary = 'Expected salary is required';
        if (!formData.salaryTargetIn3Years)
          newErrors.salaryTargetIn3Years = 'Salary target in 3 years is required';
        if (!formData.futureInFiveYears)
          newErrors.futureInFiveYears = 'Future in 5 years is required';
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
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
    return (
      <Container>
        <GTMCustomEvent
          user_data={{
            email: formData.email,
            phone: formData.phone,
            address: {
              first_name: formData.firstName,
              last_name: formData.lastName,
            },
          }}
          event_name={gtmCustomEventName}
          event_details={{
            dob: formData.dob,
            country: formData.country,
            gender: formData.gender,
            city: formData.city,
            postal_code: formData.postalCode,
            linkedin_profile: formData.linkedinProfile,
            upwork_profile: formData.upworkProfile,
            marital_status: formData.maritalStatus,
            degree: formData.degree,
            has_good_laptop_and_internet: formData.hasGoodLaptopAndInternet,
            position: formData.position,
            current_work_status: formData.currentWorkStatus,
            last_job_designation: formData.lastJobDesignation,
            business_development_experience: formData.businessDevelopmentExperience,
            experience_in_years: formData.experienceInYears,
            last_job_company_name: formData.lastJobCompanyName,
            last_job_responsibilities: formData.lastJobResponsibilities,
            professional_background: formData.professionalBackground,
            most_challenging_deal_or_client: formData.mostChallengingDealOrClient,
            cover_letter_1: formData.coverLetter1,
            cover_letter_2: formData.coverLetter2,
            cover_letter_3: formData.coverLetter3,
            loom_video_1: formData.loomVideo1,
            loom_video_2: formData.loomVideo2,
            loom_video_3: formData.loomVideo3,
            last_salary_and_commission: formData.lastSalaryAndCommission,
            expected_salary: formData.expectedSalary,
            salary_target_in_3_years: formData.salaryTargetIn3Years,
            future_in_5_years: formData.futureInFiveYears,
          }}
        />
        <Text as="h1" variant="heading3xl" className="text-center">
          Thank you!
        </Text>
        <Text as="p" variant="bodyMd">
          Your request has been submitted.
        </Text>
        <Text as="p" variant="bodyMd">
          You'll be redirected to Book a Meeting Page. If the redirects does not happen,{' '}
          <Button asChild variant={'link'} className="p-0">
            <Link href={'/career/book-a-meeting'}>click here</Link>
          </Button>
        </Text>
      </Container>
    );
  }

  const renderNavigation = () => {
    const steps = ['Personal Info', 'Work Experince', 'Cover Letters', 'Compensation'];
    return (
      <div className="grid grid-cols-2 items-end justify-center gap-4 py-2 pb-6 text-center sm:py-6 lg:grid-cols-4 lg:py-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-row items-center md:flex-col ${
              index + 1 === currentStep ? 'text-primary' : 'text-foreground'
            } ${index + 1 <= maxStep ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={() => {
              if (index + 1 <= maxStep) {
                setCurrentStep(index + 1);
              }
            }}
            style={{ cursor: index + 1 <= maxStep ? 'pointer' : 'default' }}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                index + 1 === currentStep ? 'bg-primary text-secondary' : 'border-secondary'
              }`}
            >
              {index + 1}
            </div>
            <span className="ml-2">{step}</span>
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
            <div className="grid grid-cols-2 gap-3">
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="email">
                  Email Address
                </Label>
                <Input
                  required
                  type="text"
                  name="email"
                  placeholder="John@doe.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="text-destructive">{errors.email}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="firstName">
                  First Name
                </Label>
                <Input
                  required
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                {errors.firstName && <span className="text-destructive">{errors.firstName}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="lastName">
                  Last Name
                </Label>
                <Input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                {errors.lastName && <span className="text-destructive">{errors.lastName}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="dob">
                  Date of Birth
                </Label>
                <Input
                  required
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
                {errors.dob && <span className="text-destructive">{errors.dob}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="country">
                  Country
                </Label>
                <Select
                  name="country"
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pakistan">Pakistan</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="usa">USA</SelectItem>
                    <SelectItem value="uk">UK</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.country && <span className="text-destructive">{errors.country}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="gender">
                  Gender
                </Label>
                <Select
                  name="gender"
                  onValueChange={(value) => setFormData({ ...formData, gender: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <span className="text-destructive">{errors.gender}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="city">
                  City
                </Label>
                <Input
                  required
                  type="text"
                  name="city"
                  placeholder="New York"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && <span className="text-destructive">{errors.city}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="postalCode">
                  Postal Code
                </Label>
                <Input
                  required
                  type="text"
                  name="postalCode"
                  placeholder="10001"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                />
                {errors.postalCode && <span className="text-destructive">{errors.postalCode}</span>}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="linkedinProfile">
                  LinkedIn Profile
                </Label>
                <Input
                  required
                  type="url"
                  name="linkedinProfile"
                  placeholder="https://www.linkedin.com/in/johndoe"
                  value={formData.linkedinProfile}
                  onChange={handleInputChange}
                />
                {errors.linkedinProfile && (
                  <span className="text-destructive">{errors.linkedinProfile}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="upworkProfile">
                  Upwork Profile
                </Label>
                <Input
                  required
                  type="url"
                  name="upworkProfile"
                  placeholder="https://www.upwork.com/freelancers/~01234567890"
                  value={formData.upworkProfile}
                  onChange={handleInputChange}
                />
                {errors.upworkProfile && (
                  <span className="text-destructive">{errors.upworkProfile}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="phone">
                  Phone
                </Label>
                <Input
                  required
                  type="tel"
                  name="phone"
                  placeholder="123-456-7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <span className="text-destructive">{errors.phone}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="maritalStatus">
                  Marital Status
                </Label>
                <Select
                  name="maritalStatus"
                  onValueChange={(value) => setFormData({ ...formData, maritalStatus: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your marital status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="single">Single</SelectItem>
                    <SelectItem value="married">Married</SelectItem>
                    <SelectItem value="divorced">Divorced</SelectItem>
                    <SelectItem value="widowed">Widowed</SelectItem>
                  </SelectContent>
                </Select>
                {errors.maritalStatus && (
                  <span className="text-destructive">{errors.maritalStatus}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="degree">
                  Degree
                </Label>
                <Input
                  required
                  type="text"
                  name="degree"
                  placeholder="Bachelor's in Computer Science"
                  value={formData.degree}
                  onChange={handleInputChange}
                />
                {errors.degree && <span className="text-destructive">{errors.degree}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="hasGoodLaptopAndInternet">
                  Do you have a good laptop and internet connection at home?
                </Label>
                <Select
                  name="hasGoodLaptopAndInternet"
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      hasGoodLaptopAndInternet: value,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your answer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="true">Yes</SelectItem>
                    <SelectItem value="false">No</SelectItem>
                  </SelectContent>
                </Select>
                {errors.hasGoodLaptopAndInternet && (
                  <span className="text-destructive">{errors.hasGoodLaptopAndInternet}</span>
                )}
              </div>
            </div>
            <Button className="w-max self-end" type="button" onClick={nextStep}>
              Continue
            </Button>
            {isItAFit && (
              <Text as="p" variant="bodyMd" className="py-12 text-left text-sm md:text-center">
                Have a project but not quite ready to contact us?{' '}
                <Button asChild variant={'link'} className="inline text-wrap p-0">
                  <Link href="/contact/is-tracking-academy-a-fit-for-you">
                    See if Track 95 is a fit for you.
                  </Link>
                </Button>
              </Text>
            )}
          </>
        );
      case 2:
        return (
          <>
            <div className="flex flex-col space-y-3">
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="position">
                  Position Applying For
                </Label>
                <Select
                  name="position"
                  onValueChange={(value) => setFormData({ ...formData, position: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select the position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Upwork Business Developer">
                      Upwork Business Developer
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.position && <span className="text-destructive">{errors.position}</span>}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="currentWorkStatus">
                  Current Work Status
                </Label>
                <Select
                  name="currentWorkStatus"
                  onValueChange={(value) => setFormData({ ...formData, currentWorkStatus: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your current work status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employed">Employed</SelectItem>
                    <SelectItem value="self-employed">Self-Employed</SelectItem>
                    <SelectItem value="unemployed">Unemployed</SelectItem>
                  </SelectContent>
                </Select>
                {errors.currentWorkStatus && (
                  <span className="text-destructive">{errors.currentWorkStatus}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="lastJobDesignation">
                  Last Job Designation
                </Label>
                <Input
                  required
                  type="text"
                  name="lastJobDesignation"
                  placeholder="e.g., Business Development Manager"
                  value={formData.lastJobDesignation}
                  onChange={handleInputChange}
                />
                {errors.lastJobDesignation && (
                  <span className="text-destructive">{errors.lastJobDesignation}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="businessDevelopmentExperience">
                  Business Development Experience
                </Label>
                <Input
                  required
                  type="text"
                  name="businessDevelopmentExperience"
                  placeholder="e.g., 3 years in SaaS business development"
                  value={formData.businessDevelopmentExperience}
                  onChange={handleInputChange}
                />
                {errors.businessDevelopmentExperience && (
                  <span className="text-destructive">{errors.businessDevelopmentExperience}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="experienceInYears">
                  Years of Experience
                </Label>
                <Input
                  required
                  type="number"
                  name="experienceInYears"
                  placeholder="e.g., 5"
                  value={formData.experienceInYears}
                  onChange={handleInputChange}
                />
                {errors.experienceInYears && (
                  <span className="text-destructive">{errors.experienceInYears}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="lastJobCompanyName">
                  Last Job Company Name
                </Label>
                <Input
                  required
                  type="text"
                  name="lastJobCompanyName"
                  placeholder="e.g., Acme Corp"
                  value={formData.lastJobCompanyName}
                  onChange={handleInputChange}
                />
                {errors.lastJobCompanyName && (
                  <span className="text-destructive">{errors.lastJobCompanyName}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="lastJobResponsibilities">
                  Last Job Responsibilities
                </Label>
                <Textarea
                  name="lastJobResponsibilities"
                  required
                  className="h-32 bg-background"
                  placeholder="Describe your last job responsibilities"
                  value={formData.lastJobResponsibilities}
                  onChange={handleInputChange}
                />
                {errors.lastJobResponsibilities && (
                  <span className="text-destructive">{errors.lastJobResponsibilities}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="professionalBackground">
                  Professional Background
                </Label>
                <Textarea
                  name="professionalBackground"
                  required
                  className="h-32 bg-background"
                  placeholder="Describe your professional background"
                  value={formData.professionalBackground}
                  onChange={handleInputChange}
                />
                {errors.professionalBackground && (
                  <span className="text-destructive">{errors.professionalBackground}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="mostChallengingDealOrClient">
                  Most Challenging Deal or Client
                </Label>
                <Textarea
                  name="mostChallengingDealOrClient"
                  required
                  className="h-32 bg-background"
                  placeholder="Describe your most challenging deal or client"
                  value={formData.mostChallengingDealOrClient}
                  onChange={handleInputChange}
                />
                {errors.mostChallengingDealOrClient && (
                  <span className="text-destructive">{errors.mostChallengingDealOrClient}</span>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <Button type="button" variant={'outline'} onClick={prevStep}>
                Previous
              </Button>
              <Button type="button" onClick={nextStep}>
                Continue
              </Button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="flex flex-col space-y-3">
              <Text as="h1" variant="heading3xl">
                Job Post 01
              </Text>
              <div className="rounded-lg border p-4">
                <Text as="p" variant="bodyMd">
                  We need to track purchase conversion data with values on our resort websites.{' '}
                  <br />
                  We have a set up done already but we need to verify whether data being pushed to
                  Google Analytics, Google Ads and Facebook Pixel is accurate. <br />
                  We have already set up server side Tracking using Stape.
                  <br />
                  We need a true expert to help with this and all our future projects. <br />
                  Check out the website to understand the setup
                  <br /> https://stayonera.com/ <br />
                  https://spiritofsofia.com/
                  <br /> https://www.missinghotel.com/
                </Text>
              </div>
              <Label className="pb-2" htmlFor="coverLetter1">
                Cover Letter for Job Post 01
              </Label>
              <Textarea
                name="coverLetter1"
                required
                className="h-32 bg-background"
                placeholder="Write your cover letter for Job Post 01"
                value={formData.coverLetter1}
                onChange={handleInputChange}
              />
              {errors.coverLetter1 && (
                <span className="text-destructive">{errors.coverLetter1}</span>
              )}
            </div>
            <div className="grid w-full items-center space-y-4">
              <Label className="pb-2" htmlFor="loomVideo1">
                Loom Video for Job Post 01
              </Label>
              <Input
                required
                type="text"
                name="loomVideo1"
                placeholder="Loom video URL for Job Post 01"
                value={formData.loomVideo1}
                onChange={handleInputChange}
              />
              {errors.loomVideo1 && <span className="text-destructive">{errors.loomVideo1}</span>}
            </div>
            <Text as="h1" variant="heading3xl">
              Job Post 02
            </Text>
            <div className="rounded-lg border p-4">
              <Text as="p" variant="bodyMd">
                Shopify recently introduced a new settings feature called "Customer Privacy." In
                certain countries, it's now mandatory to display a visible cookie banner that users
                must accept before their website behavior can be tracked. This requirement is
                causing significant issues with tracking accuracy with add to carts, reached
                checkouts and purchases in Shopify analytics and reports.
                <br />
                We need a solution whereby all customer data is being tracked wether they accept the
                cookie consent or not.
                <br />
                Please note: It hasn't nothing to do with Google ads!
              </Text>
            </div>
            <div className="grid w-full items-center space-y-4">
              <Label className="pb-2" htmlFor="coverLetter2">
                Cover Letter for Job Post 02
              </Label>
              <Textarea
                name="coverLetter2"
                required
                className="h-32 bg-background"
                placeholder="Write your cover letter for Job Post 02"
                value={formData.coverLetter2}
                onChange={handleInputChange}
              />
              {errors.coverLetter2 && (
                <span className="text-destructive">{errors.coverLetter2}</span>
              )}
            </div>
            <div className="grid w-full items-center">
              <Label className="pb-2" htmlFor="loomVideo2">
                Loom Video for Job Post 02
              </Label>
              <Input
                required
                type="text"
                name="loomVideo2"
                placeholder="Loom video URL for Job Post 02"
                value={formData.loomVideo2}
                onChange={handleInputChange}
              />
              {errors.loomVideo2 && <span className="text-destructive">{errors.loomVideo2}</span>}
            </div>
            <Text as="h1" variant="heading3xl">
              Job Post 03
            </Text>
            <div className="rounded-lg border p-4">
              <Text as="p" variant="bodyMd">
                We are looking for a highly skilled Facebook Ads Conversion Tracking Specialist with
                expertise in setting up, testing, and validating Conversion API tracking to ensure
                optimal performance on our Shopify-based website. The ideal candidate will have a
                proven track record in fine-tuning Facebook Pixel configurations to achieve precise
                and reliable attribution.
                <br />
                Currently, our conversion tracking is underperforming, with attribution scores of
                5.2/10 and 4.4/10 on some key metrics. We are actively running campaigns, but data
                is not accurately feeding back to Facebook. Your primary responsibility will be to
                diagnose and resolve these issues, ensuring seamless data flow and improved
                attribution accuracy on our Shopify platform.{' '}
              </Text>
            </div>
            <div className="grid w-full items-center">
              <Label className="pb-2" htmlFor="coverLetter3">
                Cover Letter for Job Post 03
              </Label>
              <Textarea
                name="coverLetter3"
                required
                className="h-32 bg-background"
                placeholder="Write your cover letter for Job Post 03"
                value={formData.coverLetter3}
                onChange={handleInputChange}
              />
              {errors.coverLetter3 && (
                <span className="text-destructive">{errors.coverLetter3}</span>
              )}
            </div>

            <div className="grid w-full items-center">
              <Label className="pb-2" htmlFor="loomVideo3">
                Loom Video for Job Post 03
              </Label>
              <Input
                required
                type="text"
                name="loomVideo3"
                placeholder="Loom video URL for Job Post 03"
                value={formData.loomVideo3}
                onChange={handleInputChange}
              />
              {errors.loomVideo3 && <span className="text-destructive">{errors.loomVideo3}</span>}
            </div>
            <div className="flex justify-between">
              <Button type="button" variant={'outline'} onClick={prevStep}>
                Previous
              </Button>
              <Button type="button" onClick={nextStep}>
                Continue
              </Button>
            </div>
          </>
        );
      case 4:
        return (
          <>
            <div className="flex flex-col space-y-3">
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="lastSalaryAndCommission">
                  Last Salary and Commission (if applicable)
                </Label>
                <Input
                  required
                  type="text"
                  name="lastSalaryAndCommission"
                  placeholder="e.g., $80,000 + 10% commission"
                  value={formData.lastSalaryAndCommission}
                  onChange={handleInputChange}
                />
                {errors.lastSalaryAndCommission && (
                  <span className="text-destructive">{errors.lastSalaryAndCommission}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="expectedSalary">
                  Expected Salary
                </Label>
                <Input
                  required
                  type="number"
                  name="expectedSalary"
                  placeholder="e.g., 100000"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                />
                {errors.expectedSalary && (
                  <span className="text-destructive">{errors.expectedSalary}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="salaryTargetIn3Years">
                  Salary Target in 3 Years
                </Label>
                <Input
                  required
                  type="number"
                  name="salaryTargetIn3Years"
                  placeholder="e.g., 150000"
                  value={formData.salaryTargetIn3Years}
                  onChange={handleInputChange}
                />
                {errors.salaryTargetIn3Years && (
                  <span className="text-destructive">{errors.salaryTargetIn3Years}</span>
                )}
              </div>
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="futureInFiveYears">
                  Where Do You See Yourself in 5 Years?
                </Label>
                <Textarea
                  name="futureInFiveYears"
                  required
                  className="h-32 bg-background"
                  placeholder="Describe your future in 5 years"
                  value={formData.futureInFiveYears}
                  onChange={handleInputChange}
                />
                {errors.futureInFiveYears && (
                  <span className="text-destructive">{errors.futureInFiveYears}</span>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <Button type="button" variant={'outline'} onClick={prevStep}>
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
    <div className={cn('w-full', className)}>
      {renderNavigation()}
      <Card className="rounded-t-lg py-12">
        <CardContent className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
            {renderStep()}
            <Text as="p" variant="bodyMd" aria-live="polite" className="sr-only">
              {state?.message}
            </Text>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { createWaitlist } from "@/actions/handle-enroll-now";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useActionState, useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "../lib/utils";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import Container from "../ui/container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentOccupation: string;
  interestedCourse: string;
  skills: string;
  referralSource: string;
  education: string;
  learningGoals: string;
  preferredLearningStyle: string;
  budget: string;
  availability: string;
  courseDurationPreference: string;
  experienceLevel: string;
  languagePreference: string;
  courseFormatPreference: string;
  additionalComments: string;
  expectations: string;
  futureGoals: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  currentOccupation?: string;
  interestedCourse?: string;
  skills?: string;
  referralSource?: string;
  education?: string;
  learningGoals?: string;
  preferredLearningStyle?: string;
  budget?: string;
  availability?: string;
  courseDurationPreference?: string;
  experienceLevel?: string;
  languagePreference?: string;
  courseFormatPreference?: string;
  additionalComments?: string;
  expectations?: string;
  futureGoals?: string;
}

const initialState = {
  message: "",
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
      className={`${pending ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

interface ContactFormProps {
  thankYouUrl?: string;
  formHeader?: boolean;
  className?: string;
}

export default function ContactForm({
  thankYouUrl = "/for-freelancers/enroll-now/waitlist-joined",
  formHeader = true,
  className,
}: ContactFormProps) {
  const [state, formAction] = useActionState(createWaitlist, initialState);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [maxStep, setMaxStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentOccupation: "",
    interestedCourse: "",
    skills: "",
    referralSource: "",
    education: "",
    learningGoals: "",
    preferredLearningStyle: "",
    budget: "",
    availability: "",
    courseDurationPreference: "",
    experienceLevel: "",
    languagePreference: "",
    courseFormatPreference: "",
    additionalComments: "",
    expectations: "",
    futureGoals: "",
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
        if (!formData.email) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          newErrors.email = "Email is invalid";
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.lastName) newErrors.lastName = "Last Name is required";
        break;
      case 2:
        if (!formData.phone) newErrors.phone = "Phone is required";
        if (!formData.currentOccupation)
          newErrors.currentOccupation = "Current Occupation is required";
        if (!formData.interestedCourse)
          newErrors.interestedCourse = "Interested Course is required";
        if (!formData.skills) newErrors.skills = "Skills are required";
        if (!formData.referralSource)
          newErrors.referralSource = "Referral Source is required";
        break;
      case 3:
        if (!formData.education) newErrors.education = "Education is required";
        if (!formData.learningGoals)
          newErrors.learningGoals = "Learning Goals are required";
        if (!formData.preferredLearningStyle)
          newErrors.preferredLearningStyle =
            "Preferred Learning Style is required";
        if (!formData.budget) newErrors.budget = "Budget is required";
        if (!formData.availability)
          newErrors.availability = "Availability is required";
        break;
      case 4:
        if (!formData.courseDurationPreference)
          newErrors.courseDurationPreference =
            "Course Duration Preference is required";
        if (!formData.experienceLevel)
          newErrors.experienceLevel = "Experience Level is required";
        if (!formData.languagePreference)
          newErrors.languagePreference = "Language Preference is required";
        if (!formData.courseFormatPreference)
          newErrors.courseFormatPreference =
            "Course Format Preference is required";
        if (!formData.expectations)
          newErrors.expectations = "Expectations are required";
        if (!formData.futureGoals)
          newErrors.futureGoals = "Future Goals are required";
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
        <h1 className="text-center">Thank you!</h1>
        <p>Your request has been submitted.</p>
      </Container>
    );
  }

  const renderNavigation = () => {
    const steps = ["Personal Info", "Occupation", "Preferences", "Goals"];
    return (
      <div className="grid grid-cols-2 items-end justify-center gap-4 py-2 pb-6 text-center sm:py-6 lg:grid-cols-4 lg:py-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-row items-center md:flex-col ${
              index + 1 === currentStep ? "text-primary" : "text-foreground"
            } ${index + 1 <= maxStep ? "cursor-pointer" : "cursor-default"}`}
            onClick={() => {
              if (index + 1 <= maxStep) {
                setCurrentStep(index + 1);
              }
            }}
            style={{ cursor: index + 1 <= maxStep ? "pointer" : "default" }}
          >
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                index + 1 === currentStep
                  ? "bg-primary text-secondary"
                  : "border-secondary"
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
            <div className="py-6 text-left md:text-center">
              {formHeader && <h1>Join Our Course Waitlist</h1>}
              <p>Please provide your personal information.</p>
            </div>{" "}
            <div className="grid gap-3">
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
                {errors.firstName && (
                  <span className="text-destructive">{errors.firstName}</span>
                )}
              </div>{" "}
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
                {errors.lastName && (
                  <span className="text-destructive">{errors.lastName}</span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="email">
                  Email Address
                </Label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <span className="text-destructive">{errors.email}</span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="phone">
                  Phone Number
                </Label>
                <Input
                  required
                  type="tel"
                  name="phone"
                  placeholder="123-456-7890"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <span className="text-destructive">{errors.phone}</span>
                )}
              </div>
            </div>{" "}
            <Button className="w-max self-end" type="button" onClick={nextStep}>
              Continue
            </Button>
          </>
        );
      case 2:
        return (
          <>
            <div className="flex flex-col space-y-3">
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="currentOccupation">
                  Current Occupation
                </Label>
                <Input
                  required
                  type="text"
                  name="currentOccupation"
                  placeholder="Student/Professional"
                  value={formData.currentOccupation}
                  onChange={handleInputChange}
                />
                {errors.currentOccupation && (
                  <span className="text-destructive">
                    {errors.currentOccupation}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="interestedCourse">
                  Interested Course
                </Label>
                <Input
                  required
                  type="text"
                  name="interestedCourse"
                  placeholder="Course Name"
                  value={formData.interestedCourse}
                  onChange={handleInputChange}
                />
                {errors.interestedCourse && (
                  <span className="text-destructive">
                    {errors.interestedCourse}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="skills">
                  Skills
                </Label>
                <Textarea
                  required
                  name="skills"
                  placeholder="List your skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                />
                {errors.skills && (
                  <span className="text-destructive">{errors.skills}</span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="referralSource">
                  How did you hear about us?
                </Label>
                <Input
                  required
                  type="text"
                  name="referralSource"
                  placeholder="Referral Source"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                />
                {errors.referralSource && (
                  <span className="text-destructive">
                    {errors.referralSource}
                  </span>
                )}
              </div>
            </div>{" "}
            <div className="flex justify-between">
              <Button type="button" variant={"outline"} onClick={prevStep}>
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
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="education">
                  Highest Level of Education
                </Label>
                <Input
                  required
                  type="text"
                  name="education"
                  placeholder="Education Level"
                  value={formData.education}
                  onChange={handleInputChange}
                />
                {errors.education && (
                  <span className="text-destructive">{errors.education}</span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="learningGoals">
                  Learning Goals
                </Label>
                <Textarea
                  required
                  name="learningGoals"
                  placeholder="Describe your learning goals"
                  value={formData.learningGoals}
                  onChange={handleInputChange}
                />
                {errors.learningGoals && (
                  <span className="text-destructive">
                    {errors.learningGoals}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="preferredLearningStyle">
                  Preferred Learning Style
                </Label>
                <Select
                  required
                  name="preferredLearningStyle"
                  onValueChange={(value) =>
                    setFormData({ ...formData, preferredLearningStyle: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your learning style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visual">Visual</SelectItem>
                    <SelectItem value="auditory">Auditory</SelectItem>
                    <SelectItem value="kinesthetic">Kinesthetic</SelectItem>
                    <SelectItem value="reading-writing">
                      Reading/Writing
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.preferredLearningStyle && (
                  <span className="text-destructive">
                    {errors.preferredLearningStyle}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="budget">
                  Budget for the Course (USD)
                </Label>
                <Input
                  required
                  type="number"
                  name="budget"
                  placeholder="Enter your budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                />
                {errors.budget && (
                  <span className="text-destructive">{errors.budget}</span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="availability">
                  Availability (Hours per week)
                </Label>
                <Input
                  required
                  type="number"
                  name="availability"
                  placeholder="Enter your availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                />
                {errors.availability && (
                  <span className="text-destructive">
                    {errors.availability}
                  </span>
                )}
              </div>
            </div>{" "}
            <div className="flex justify-between">
              <Button type="button" variant={"outline"} onClick={prevStep}>
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
                <Label className="pb-2" htmlFor="courseDurationPreference">
                  Course Duration Preference
                </Label>
                <Select
                  required
                  name="courseDurationPreference"
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      courseDurationPreference: value,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select course duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short-term">Short-term</SelectItem>
                    <SelectItem value="long-term">Long-term</SelectItem>
                    <SelectItem value="intensive">Intensive</SelectItem>
                  </SelectContent>
                </Select>
                {errors.courseDurationPreference && (
                  <span className="text-destructive">
                    {errors.courseDurationPreference}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="experienceLevel">
                  Experience Level
                </Label>
                <Select
                  required
                  name="experienceLevel"
                  onValueChange={(value) =>
                    setFormData({ ...formData, experienceLevel: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
                {errors.experienceLevel && (
                  <span className="text-destructive">
                    {errors.experienceLevel}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="languagePreference">
                  Preferred Language for Course
                </Label>
                <Select
                  required
                  name="languagePreference"
                  onValueChange={(value) =>
                    setFormData({ ...formData, languagePreference: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select preferred language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="spanish">Spanish</SelectItem>
                    <SelectItem value="french">French</SelectItem>
                    <SelectItem value="german">German</SelectItem>
                    <SelectItem value="chinese">Chinese</SelectItem>
                  </SelectContent>
                </Select>
                {errors.languagePreference && (
                  <span className="text-destructive">
                    {errors.languagePreference}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="courseFormatPreference">
                  Preferred Course Format
                </Label>
                <Select
                  required
                  name="courseFormatPreference"
                  onValueChange={(value) =>
                    setFormData({ ...formData, courseFormatPreference: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select course format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="in-person">In-person</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
                {errors.courseFormatPreference && (
                  <span className="text-destructive">
                    {errors.courseFormatPreference}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="expectations">
                  Expectations from the Course
                </Label>
                <Textarea
                  required
                  name="expectations"
                  placeholder="Describe your expectations"
                  value={formData.expectations}
                  onChange={handleInputChange}
                />
                {errors.expectations && (
                  <span className="text-destructive">
                    {errors.expectations}
                  </span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="futureGoals">
                  Future Goals
                </Label>
                <Textarea
                  required
                  name="futureGoals"
                  placeholder="Describe your future goals"
                  value={formData.futureGoals}
                  onChange={handleInputChange}
                />
                {errors.futureGoals && (
                  <span className="text-destructive">{errors.futureGoals}</span>
                )}
              </div>{" "}
              <div className="grid w-full items-center">
                <Label className="pb-2" htmlFor="additionalComments">
                  Additional Comments
                </Label>
                <Textarea
                  name="additionalComments"
                  placeholder="Any additional comments or requirements"
                  value={formData.additionalComments}
                  onChange={handleInputChange}
                />
              </div>
            </div>{" "}
            <div className="flex justify-between">
              <Button type="button" variant={"outline"} onClick={prevStep}>
                Previous
              </Button>{" "}
              <SubmitButton validateStep={() => validateStep(currentStep)} />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="pb-2">
      <div className={cn("w-full", className)}>
        {renderNavigation()}
        <Card className="rounded-t-lg">
          <CardContent className="mx-auto max-w-3xl">
            <form
              id="enroll-now"
              onSubmit={handleSubmit}
              className="flex flex-col space-y-3"
            >
              {renderStep()}
              <p aria-live="polite" className="sr-only">
                {state?.message}
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}

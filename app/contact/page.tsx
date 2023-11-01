"use client";

import React, { useState } from "react";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";
import { GTMCalendlyEvent } from "@/components/analytics/GTMEvents";
import {
 Heading2xl,
 Heading3xl,
 Heading4xl,
} from "@/components/typography/Heading";
import ContactForm from "@/components/contact/ContactForm";
import ContainerLayout from "@/components/layouts/ContainerLayout";

const Page = () => {
 return <ContactForm />;
};

export default Page;

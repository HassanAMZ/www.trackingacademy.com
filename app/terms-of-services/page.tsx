import Link from "next/link";
import React from "react";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import {
 Heading4xl,
 Heading3xl,
 Paragraphmd,
} from "@/components/typography/Heading";

const TOSPage = () => {
 return (
  <ContainerLayout className='tos-container space-y-4'>
   <header className='tos-header'>
    <Heading4xl>Terms of Service</Heading4xl>
   </header>

   <section className='tos-section'>
    <Heading3xl>Acceptance of Terms</Heading3xl>
    <Paragraphmd>
     By accessing and using TrackingAcademy.com, you accept and agree to be
     bound by the terms and provision of this agreement.
    </Paragraphmd>
   </section>

   <section className='tos-section'>
    <Heading3xl>Provision of Services</Heading3xl>
    <Paragraphmd>
     TrackingAcademy.com provides educational content on digital tracking
     technologies. We reserve the right to modify or discontinue our services at
     any time.
    </Paragraphmd>
   </section>

   <section className='tos-section'>
    <Heading3xl>Intellectual Property</Heading3xl>
    <Paragraphmd>
     All content, including videos and blogs, on TrackingAcademy.com are the
     exclusive property of TrackingAcademy.com and are protected by copyright
     and other intellectual property laws.
    </Paragraphmd>
   </section>

   <section className='tos-section'>
    <Heading3xl>User Conduct</Heading3xl>
    <Paragraphmd>
     Users are expected to use TrackingAcademy.com responsibly and to respect
     the rights and dignity of others.
    </Paragraphmd>
   </section>

   <section className='tos-section'>
    <Heading3xl>Disclaimer of Warranties</Heading3xl>
    <Paragraphmd>
     The services and content on TrackingAcademy.com are provided "as is". We
     disclaim all warranties, express or implied, regarding the accuracy or
     reliability of content.
    </Paragraphmd>
   </section>

   <section className='tos-section'>
    <Heading3xl>Contact Us</Heading3xl>
    <Paragraphmd>
     If you have any questions regarding these Terms of Service, please
     <Link href='/contact'> contact us</Link>.
    </Paragraphmd>
   </section>
  </ContainerLayout>
 );
};

export default TOSPage;

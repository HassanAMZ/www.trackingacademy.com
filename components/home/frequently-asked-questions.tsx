import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import React from 'react';
interface FrequentlyAskedQuestionsProps {
  question: string;
  answer: string;
}

const frequentlyAskedQuestions: FrequentlyAskedQuestionsProps[] = [
  {
    question: 'What does the setup process include?',
    answer:
      'Our setup process includes configuring GA4, TikTok Pixel, Meta Pixel, Conversion API, and GTM (both web and server-side) to ensure all your marketing data is accurately tracked. This setup is completed within 7 days.',
  },
  {
    question: 'How accurate is your conversion tracking?',
    answer:
      'Our conversion tracking is designed to be 95% accurate, so you can trust the data you see and make informed decisions based on it.',
  },
  {
    question: 'How often do I receive reports?',
    answer:
      'You will receive custom reports tailored to your business every week. These reports are easy to understand and help you stay on top of your marketing performance.',
  },
  {
    question: 'What kind of support do you offer?',
    answer:
      'We offer 24/7 expert support. You can reach out to us anytime you need help or have questions.',
  },
  {
    question: 'Are there any guarantees for your service?',
    answer:
      'Yes, we offer several guarantees: a 90-Day Better Tracking Guarantee, Always Accurate Guarantee, Money-Back Guarantee, and more. These guarantees ensure you get the best service possible or we make it right at no extra cost.',
  },
  {
    question: 'How do you ensure compliance with data privacy laws?',
    answer:
      'We ensure that all tracking is 100% compliant with GDPR and CCPA regulations, keeping your data safe and legal.',
  },
  {
    question: 'What if I encounter any issues after setup?',
    answer:
      'We resolve any issues within 24 hours at no extra cost. Our Free Fixes Guarantee ensures your tracking remains accurate and bug-free.',
  },
  {
    question: 'Do you offer training on how to use the new setup?',
    answer:
      'Yes, we provide three 1-hour training sessions to help you understand and effectively use your new tracking setup. Additionally, you will receive a Quick Start Guide to get you started fast.',
  },

  {
    question: 'What exactly is included in the initial audit, and how long does it take?',
    answer:
      'The initial audit includes a thorough review of your current tracking setup for GA4, TikTok Pixel, Meta Pixel, Conversion API, and GTM. We assess data accuracy, identify discrepancies, and recommend improvements. The audit typically takes 3-5 business days, after which you receive a detailed report and a consultation to discuss our findings and suggestions.',
  },
  {
    question: 'How does your 90-Day Better Tracking Guarantee work?',
    answer:
      'Our 90-Day Better Tracking Guarantee ensures that if your tracking accuracy and marketing performance do not improve within 90 days of our service, you will receive an additional three months of our service for free. This guarantee demonstrates our commitment to delivering tangible results and improving your marketing efficiency.',
  },
  {
    question: 'What kind of improvements can I expect in my conversion rates?',
    answer:
      'While results can vary depending on your current setup and industry, our clients typically see a 20-50% improvement in conversion rates within the first three months. We focus on ensuring accurate tracking, better data analysis, and optimized marketing strategies to help you achieve these results.',
  },
  {
    question:
      'How do you ensure data privacy and security during the setup and ongoing maintenance?',
    answer:
      'We adhere to strict data privacy and security protocols, including compliance with GDPR and CCPA regulations. Our team undergoes regular training on data protection best practices, and we use secure methods to handle and store your data, ensuring it is protected at all times.',
  },
  {
    question: 'Will there be any downtime during the setup and integration process?',
    answer:
      'Our setup and integration process is designed to be seamless, with minimal disruption to your existing operations. We perform most configurations in the background, ensuring your marketing activities continue without interruption. In rare cases where downtime is necessary, we coordinate with you to schedule it at the least impactful times.',
  },
  {
    question: 'How do you handle custom requirements for my specific business needs?',
    answer:
      'We understand that every business is unique, and we tailor our services to meet your specific needs. During our initial consultation and audit, we gather detailed information about your business requirements and customize our setup and tracking solutions to align with your goals.',
  },
  {
    question: 'What happens if I am not satisfied with your service after the first month?',
    answer:
      'If you are not satisfied with our service within the first 30 days, you can take advantage of our Money-Back Guarantee. Simply let us know your concerns, and if we cannot resolve them to your satisfaction, we will refund your payment in full, no questions asked.',
  },
  {
    question: 'How do you ensure ongoing accuracy and performance after the initial setup?',
    answer:
      'We provide monthly optimization check-ups to ensure your tracking setup remains accurate and performs optimally. Our team monitors your data, makes necessary adjustments, and provides regular reports to keep you informed of any improvements or changes needed.',
  },
  {
    question: 'Can I integrate your solutions with my existing marketing tools and platforms?',
    answer:
      'Yes, our solutions are designed to integrate seamlessly with over 50 marketing tools and platforms. Whether you use email marketing software, CRM systems, or other analytics tools, we ensure smooth integration to provide a unified view of your marketing data.',
  },
  {
    question: 'What kind of support do I receive after the initial setup is complete?',
    answer:
      'You receive 24/7 priority support from our expert team. We are available to assist you with any issues, answer questions, and provide ongoing guidance to ensure your tracking setup continues to deliver accurate and valuable insights.',
  },
  {
    question: 'How do you track and measure the success of your improvements?',
    answer:
      'We use a combination of key performance indicators (KPIs) tailored to your business goals, such as conversion rates, return on ad spend (ROAS), and customer acquisition costs (CAC). We provide you with regular reports and updates on these metrics, demonstrating the impact of our improvements on your marketing performance.',
  },
  {
    question: 'What makes your service different from other marketing integration providers?',
    answer:
      "Our service stands out due to our comprehensive approach, including detailed audits, customized solutions, and ongoing optimization. We offer robust guarantees, 24/7 support, and a track record of significantly improving our clients' marketing performance. Our commitment to accuracy, compliance, and client satisfaction sets us apart from others in the industry.",
  },
];

export function FrequentlyAskedQuestions() {
  return (
    <React.Fragment>
      <Text as="h2" variant="heading2xl" className="text-center">
        Have questions in your mind?
      </Text>
      <Container>
        <Accordion type="single" collapsible className="w-full">
          {frequentlyAskedQuestions.map((faq, index) => (
            <AccordionItem value={`item-${index + 1}`} key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </React.Fragment>
  );
}

export default FrequentlyAskedQuestions;

import Container from "@/components/ui/container";
import ContactForm from "@/components/contact/contact-form";

export default function Page() {
  return (
    <Container className="min-h-screen w-full max-w-5xl py-4">
      <h1 className="text-primary p-4 text-center">
        Get $300 Off – 3-Day “See Your Sales Again” Tracking Setup
      </h1>
      <h4 className="text-muted-foreground p-4 text-center">
        Fill out the form below to restore accurate tracking and supercharge
        your ad performance, staying compliant with Meta Ads policies and a
        future-proof system.
      </h4>
      <ContactForm redirectUrl="/landing-page/3-days-see-every-sale/book-a-meeting" />
    </Container>
  );
}

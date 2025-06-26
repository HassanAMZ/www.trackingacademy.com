import ContactForm from "@/components/contact/contact-form";
import Container from "@/components/ui/container";

export default function page() {
  return (
    <Container className="max-w-5xl py-6">
      <h1 className="text-primary p-4 text-center">Get 95% accurate conversion tracking</h1>
      <h4 className="text-muted-foreground p-4 text-center">
        Fill out the form below to restore accurate tracking and supercharge your ad performance,
        staying compliant with Meta Ads policies and a future-proof system.
      </h4>
      <ContactForm />
    </Container>
  );
}

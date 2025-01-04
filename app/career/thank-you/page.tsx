import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

export default function ThankYouPage() {
  return (
    <Container className="space-y-5 py-12">
      <Text as="h1" variant="heading3xl" className="text-center">
        Thank you!
      </Text>
      <Text as="p" variant="bodyMd">
        Your request has been submitted. Our team will reach out to you for
        further details.
      </Text>
    </Container>
  );
}

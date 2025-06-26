import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="container mx-auto grow px-4 py-8">
          <h2 className="mb-6 text-3xl font-bold">Privacy Policy</h2>
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Introduction</h3>
            <p>
              At Conversion Confidence, we are committed to protecting your privacy. This Privacy
              Policy outlines how we collect, use, and safeguard your data when you use our
              server-side tracking system and related services.
            </p>
            <h3 className="text-xl font-semibold">Data Collection</h3>
            <p>
              We collect data to provide accurate conversion tracking and analytics, including but
              not limited to user interactions, ad performance metrics, and anonymized behavioral
              data. All data is processed in compliance with GDPR, CCPA, and ePrivacy regulations.
            </p>
            <h3 className="text-xl font-semibold">Data Usage</h3>
            <p>
              Your data is used to optimize ad campaigns, improve ROAS, and provide actionable
              insights. We do not sell or share your data with third parties except as required for
              service delivery (e.g., server-side tracking integrations).
            </p>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>
              If you have questions about this Privacy Policy, please contact us at
              analytics@TrackingAcademy.com.
            </p>
          </section>
        </main>{" "}
      </div>
      <Footer />
    </>
  );
}

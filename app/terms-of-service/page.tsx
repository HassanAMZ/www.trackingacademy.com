import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <main className="container mx-auto grow px-4 py-8">
          <h2 className="mb-6 text-3xl font-bold">Terms of Service</h2>
          <section className="space-y-4">
            <h3 className="text-xl font-semibold">Introduction</h3>
            <p>
              Welcome to Conversion Confidence. These Terms of Service govern your use of our
              website, server-side tracking system, and related services. By accessing our services,
              you agree to these terms.
            </p>
            <h3 className="text-xl font-semibold">Use of Services</h3>
            <p>
              You agree to use our services for lawful purposes only. Our Conversion Confidence
              Suite, including tracking audits and dashboards, is provided to improve your ad
              performance and must not be misused.
            </p>
            <h3 className="text-xl font-semibold">Payment and Refunds</h3>
            <p>
              We offer a 30-day money-back guarantee if our tracking accuracy does not reach 95%.
              Payments for services are non-refundable except as outlined in our guarantee.
            </p>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>
              For questions about these Terms of Service, please contact us at
              analytics@TrackingAcademy.com.
            </p>
          </section>
        </main>{" "}
      </div>
      <Footer />
    </>
  );
}

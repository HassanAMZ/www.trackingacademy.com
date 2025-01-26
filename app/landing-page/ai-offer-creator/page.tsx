import Navbar from "@/components/global/navbar";
import OfferCreator from "@/components/tools/offer-creator";

export default function page() {
  return (
    <div className="space-y-2">
      <Navbar />
      {/* <OfferAnalyzer /> */}
      <OfferCreator />
    </div>
  );
}

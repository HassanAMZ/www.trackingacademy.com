import MeetingCalendar from "@/components/contact/meeting-calender";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";
import getOffersData from "@/utils/getOffersData";

export default async function Page() {
  const offers = await getOffersData("app/offers");
  return (
    <div>
      <Navbar /> <h3 className="container-primary py-6 text-center text-3xl font-bold">Offers</h3>
      <Container className="container-primary py-4">
        <MeetingCalendar />
      </Container>
      <Footer />
    </div>
  );
}

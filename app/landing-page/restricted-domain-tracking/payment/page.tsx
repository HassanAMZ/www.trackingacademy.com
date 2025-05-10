// app/page.tsx or pages/index.tsx (depending on your setup)
import CheckoutForm from "@/components/payment/CheckoutForm";
import { stripe } from "@/lib/stripe";

interface Item {
  id: string;
}

const calculateOrderAmount = (items: Item[]): number => {
  return 1400;
};

export default async function IndexPage() {
  const items: Item[] = [{ id: "xl-tshirt" }];

  const { client_secret: clientSecret } = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "eur",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return (
    <div className="container mx-auto max-w-xl p-6">
      {clientSecret && <CheckoutForm clientSecret={clientSecret} />}
    </div>
  );
}

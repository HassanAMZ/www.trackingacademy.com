"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export const PaypalContext = ({ children }) => {
 const initialOptions = {
  clientId: `${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`,
  currency: "USD",
  intent: "capture",
 };
 return (
  <PayPalScriptProvider options={initialOptions}>
   {children}
  </PayPalScriptProvider>
 );
};

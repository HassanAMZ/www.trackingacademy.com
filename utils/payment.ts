// utils/payment.ts
import { loadStripe } from "@stripe/stripe-js";

// Load Stripe
export const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!,
);

// Utility function to determine success URL based on current path
export const getSuccessUrl = () => {
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split("/").filter(Boolean);
  return `${window.location.origin}/${pathSegments.join("/")}/success`;
};
// Utility function to determine success URL based on current path
export const getDirectoryURL = (path: string) => {
  const currentPath = window.location.pathname;
  const pathSegments = currentPath.split("/").filter(Boolean);
  return `${window.location.origin}/${pathSegments.join("/")}/${path}`;
};

// Currency formatter utility
export const formatCurrency = (amount: number, currency: string) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  });
  return formatter.format(amount / 100);
};

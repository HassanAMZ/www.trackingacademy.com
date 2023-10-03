"use client";

import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
// Define the props that the PayPal component accepts
interface PayPalProps {
 product: Product;
}
// Define the type for the product prop
interface Product {
 amount: string;
 name: string;
 id: string;
}

const PayPal: React.FC<PayPalProps> = ({ product }) => {
 const createOrder = async (data: any, actions: any) => {
  return actions.order.create({
   purchase_units: [
    {
     amount: {
      value: parseInt(product.amount),
     },
    },
   ],
  });
 };
 const onApprove = async (data: any, actions: any) => {
  return actions.order.capture().then(function (details: any) {
   alert(`Transaction completed by ${details.payer.name.given_name}`);
  });
 };
 return (
  <div className='App'>
   <PayPalButtons
    style={{ shape: "pill" }}
    createOrder={createOrder}
    onApprove={onApprove}
   />
  </div>
 );
};

export default PayPal;

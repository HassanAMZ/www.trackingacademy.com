"use client";

import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";



const PayPal = ({ product }) => {
    const createOrder = async (data, actions) => {

        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: product.amount,
                    },
                },
            ],
        });
    };
    const onApprove = async (data, actions) => {
        return actions.order.capture().then(function (details) {
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

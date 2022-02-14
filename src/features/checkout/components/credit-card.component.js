import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input";
import { cardTokenRequest } from "../../../services/checkout/checkout.service";

export const CreditCardComponent = ({ name, onSuccess }) => {
  const onChange = async (formData) => {
    const { values, status } = formData;
    const isIncomplite = Object.values(status).includes("incomplete");

    const expData = values.expiry.split("/");

    const card = {
      number: values.number,
      exp_month: expData[0],
      exp_year: expData[1],
      cvc: values.cvc,
      name: name,
    };

    if (!isIncomplite) {
      const info = await cardTokenRequest(card);
      onSuccess(info);
    }
  };
  return <LiteCreditCardInput onChange={onChange} />;
};

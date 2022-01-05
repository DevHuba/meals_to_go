import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CreditCardComponent } from "../components/credit-card.component";

export const CheckoutScreen = () => {
  return (
    <SafeArea>
      <CreditCardComponent />
    </SafeArea>
  );
};

import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KD5YBKVcufBwGWnhcxqNctaeWqJLH8vYiIdHuYI7rjAeSDfbXANipxi4MrDT4rWCpnD8fbjOBC3wzxBz2M1DBN500CRjESm1g"
);

export const cardTokenRequest = (card) => {
  return stripe.createToken({ card });
};

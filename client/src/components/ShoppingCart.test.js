import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  getByText,
} from "@testing-library/react";

import App from "../App";
import CheckoutForm from "./CheckoutForm";
import ShoppingCart from "./ShoppingCart";

const plants = [
  {
    name: "rose",
    price: "20",
  },
  { name: "violet", price: "20" },
  { name: "lilac", price: "20" },
]; // with each object being a mock plant
test("displays plants in cart", () => {
  const { getByText } = render(<ShoppingCart cart={plants} />);
});

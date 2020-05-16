import React from "react";
import {
  render,
  fireEvent,
  getByTestId,
  getByText,
} from "@testing-library/react";

import App from "../App";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows
test("App renders  without crashing", () => {
  render(<App />);
});
test("CheckoutForm renders without crashing", () => {
  render(<CheckoutForm />);
});
test("form header renders", () => {
  const { getByTestId } = render(<CheckoutForm />);
  getByTestId("formHeader");
});
test("first name input field exists", () => {
  const { getByTestId } = render(<CheckoutForm />);
  getByTestId("firstNameInput");
});

test("last name input field exists", () => {
  const { getByTestId } = render(<CheckoutForm />);
  getByTestId("lastNameInput");
});

test("checkout button works", async () => {
  const firstNameInput = "Tom";
  const lastNameInput = "Myspace";
  const address = "123 main st";
  const city = "nowheresville, usa";
  const state = "nostate";
  const zip = "12345";
  const { getByTestId, getByText } = render(<CheckoutForm />);

  const submit = getByTestId("submitButton");

  fireEvent.click(submit);
});

import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react';
import EventForm from "../components/eventForm/EventForm.js";
import { Provider } from "react-redux";
import store from "../redux/store/store"
import '@testing-library/jest-dom/extend-expect';



afterEach(cleanup)

it("button should be disable", () => {
  const { getByText } = render(<Provider store={store}><EventForm /></Provider>);
  const button = getByText("Submit");
  expect(button.disabled).toBe(true);
});

it("button should not be disable when all fields are filled in", () => {
  const { getByText, getByLabelText } = render(<Provider store={store}><EventForm /></Provider>);

  const values = {
    "First name": "FirstNameTestValue",
    "Last name": "LastNameTestValue",
    "Email address": "Test@test.com",
    "Event date": "1111-11-11"
  };

  for (const key in values) {
    const input = getByLabelText(key, { exact: false, selector: "input" });
    fireEvent.change(input, { target: { value: values[key] } });
  }

  const button = getByText("Submit");
  expect(button.disabled).toBe(false);
})

it("should display invalid email message when submitted with invalid email", () => {
  const { getByText, getByLabelText } = render(<Provider store={store}><EventForm /></Provider>);
 
  const values = {
    "First name": "FirstNameTestValue",
    "Last name": "LastNameTestValue",
    "Email address": "invalidEmail.com",
    "Event date": "1111-11-11"
  };

  for (const key in values) {
    const input = getByLabelText(key, { exact: false, selector: "input" });
    fireEvent.change(input, { target: { value: values[key] } });
  }

  expect(getByText("Email address is invalid")).toBeInTheDocument()
})


it("should render loader compnent when loading", () => {

  const { getByText,getByLabelText, findByText } = render(<Provider store={store}><EventForm /></Provider>);
  const values = {
    "First name": "FirstNameTestValue",
    "Last name": "LastNameTestValue",
    "Email address": "Test@test.com",
    "Event date": "1111-11-11"
  };

  for (const key in values) {
    const input = getByLabelText(key, { exact: false, selector: "input" });
    fireEvent.change(input, { target: { value: values[key] } });
  }

  fireEvent.click(getByText("Submit"))
  expect(getByText("Loading...")).toBeInTheDocument();
})





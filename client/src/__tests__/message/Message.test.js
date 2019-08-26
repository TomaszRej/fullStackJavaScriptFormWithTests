import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import Message from "../../components/message/Message.js";
import '@testing-library/jest-dom/extend-expect';


const handleSpanClick = jest.fn()

const renderComponent = () => render(
  <Message
    message="messageTest"
    type="danger"
    show={true}
    handleClick={handleSpanClick}
  />
);



it("should render message", () => {
  const { getByText } = renderComponent();
  const element = getByText("messageTest");

  expect(element).toBeInTheDocument
});


it("should have correct className", () => {
  const { getByText, debug } = renderComponent();
  const element = getByText("messageTest");

  expect(element.className).toBe("alert alert-danger");
});


it("should fire handle click method", () => {
  const { container } = renderComponent();
  const span = container.querySelector("span");
  fireEvent.click(span);

  expect(handleSpanClick).toHaveBeenCalled()
});

it("should not render message", () => {
  const { findByText } = render(<Message show={false}/>);;
  const element = findByText("messageTest");
  
  expect(element).not.toBeInTheDocument
});
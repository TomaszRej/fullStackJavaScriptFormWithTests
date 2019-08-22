import React from 'react'
import { render } from '@testing-library/react';
import Container from "../../components/layout/container/Container";
import '@testing-library/jest-dom/extend-expect';

it("should render child component", () => {
  const { getByText } = render(<Container children={<div>test</div>}/>);
  expect(getByText("test")).toBeInTheDocument();
});
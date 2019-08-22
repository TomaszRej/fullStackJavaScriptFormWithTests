import React from 'react'
import { render } from '@testing-library/react';
import {Row, Col} from "../../components/layout/grid";
import '@testing-library/jest-dom/extend-expect';

it("should render child component", () => {
  const { getByText } = render(<Row children={<div>test</div>}/>);
  expect(getByText("test")).toBeInTheDocument();
});

it("should render child component", () => {
  const { getByText } = render(<Col children={<div>test</div>}/>);
  expect(getByText("test")).toBeInTheDocument();
});
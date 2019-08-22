import React from 'react'
import { render} from '@testing-library/react';
import EventFormPage from "../pages/eventFormPage/EventFormPage"
import { Provider } from "react-redux";
import store from "../redux/store/store"
import '@testing-library/jest-dom/extend-expect';


it("should render form", () => {
  const { container } = render(<Provider store={store}><EventFormPage/></Provider>);
  expect(container.querySelector("form")).toBeInTheDocument();
});


import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";

import { store } from "../app/store";
import Counter from "./Counter";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});

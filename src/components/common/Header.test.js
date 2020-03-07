import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";
// import "@testing-library/jest-dom/extend-expect";

describe("Header", () => {
  it("should render the child components", () => {
    const { queryByTestId } = render(<Header />);
    expect(queryByTestId("Header")).toBeInTheDocument();
    expect(queryByTestId).toMatchSnapshot();
  });
});

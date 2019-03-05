import React from "react";
import ReactDOM from "react-dom";
import { create } from "react-test-renderer";
import Title from "../components/Title";

test("snapsot", () => {
  const c = create(<Title />);
  expect(c.toJSON()).toMatchSnapshot();
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Title />, div);
  ReactDOM.unmountComponentAtNode(div);
});
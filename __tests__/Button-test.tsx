/**
 * @format
 */

import "react-native";
import React from "react";

// Note: test renderer must be required after react-native.
import {Button} from "../src/ui/Button";
import {render} from "@testing-library/react-native";

it("renders correctly", () => {
  const {getByTestId, queryByText} = render(
    <Button color="primary" size="big" text="test button" />,
  );

  expect(getByTestId("button")).toBeTruthy();
  expect(queryByText("test button")).toBeTruthy();
});

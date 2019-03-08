import React from "react";
import { storiesOf } from "@storybook/react";
import Pagination from "../src/components/Pagination";

storiesOf("Pagination", module).add("basic example", () => (
  <Pagination itemsPerPage="2">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
  </Pagination>
));

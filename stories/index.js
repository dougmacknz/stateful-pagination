import React from "react";
import { storiesOf } from "@storybook/react";
import Pagination from "../src/components/Pagination";

storiesOf("Pagination", module).add("basic example", () => (
  <Pagination itemsPerPage="10" />
));

import React from "react";
import { storiesOf } from "@storybook/react";
import Pagination from "../src/components/Pagination";

storiesOf("Pagination", module).add("basic example", () => (
  <>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossorigin="anonymous"
    />
    <div style={{ maxWidth: "400px" }}>
      <Pagination itemsPerPage={2} containerClassName="list-group">
        <div className="list-group-item">Item 1</div>
        <div className="list-group-item">Item 2</div>
        <div className="list-group-item">Item 3</div>
        <div className="list-group-item">Item 4</div>
        <div className="list-group-item">Item 5</div>
        <div className="list-group-item">Item 6</div>
      </Pagination>
    </div>
  </>
));

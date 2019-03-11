import React from "react";
import { storiesOf } from "@storybook/react";
import { Pagination, PaginationControls, PaginationItems } from "../src";

storiesOf("Pagination", module).add("basic example", () => (
  <>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <Pagination itemsPerPage={2}>
      <div style={{ maxWidth: "400px" }}>
        <PaginationItems containerClassName="list-group">
          <div className="list-group-item">Item 1</div>
          <div className="list-group-item">Item 2</div>
          <div className="list-group-item">Item 3</div>
          <div className="list-group-item">Item 4</div>
          <div className="list-group-item">Item 5</div>
          <div className="list-group-item">Item 6</div>
        </PaginationItems>
      </div>
      <PaginationControls />
    </Pagination>
  </>
));

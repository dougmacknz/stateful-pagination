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

    <Pagination itemsPerPage={5}>
      <div style={{ maxWidth: "400px" }}>
        <PaginationItems containerClassName="list-group">
          {[...Array(100)].map((herp, index) => (
            <div key={index} className="list-group-item">
              Item {index + 1}
            </div>
          ))}
        </PaginationItems>
      </div>
      <PaginationControls />
    </Pagination>
  </>
));

storiesOf("Pagination", module).add("custom number of buttons at once", () => (
  <>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <Pagination itemsPerPage={5}>
      <div style={{ maxWidth: "400px" }}>
        <PaginationItems containerClassName="list-group">
          {[...Array(150)].map((herp, index) => (
            <div key={index} className="list-group-item">
              Item {index + 1}
            </div>
          ))}
        </PaginationItems>
      </div>
      <PaginationControls maxButtons={10} />
    </Pagination>
  </>
));

storiesOf("Pagination", module).add("callback on page change", () => (
  <>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />

    <Pagination
      itemsPerPage={5}
      onPageChange={newPage => console.log(`Changed to page ${newPage}`)}
    >
      <div style={{ maxWidth: "400px" }}>
        <PaginationItems containerClassName="list-group">
          {[...Array(100)].map((herp, index) => (
            <div key={index} className="list-group-item">
              Item {index + 1}
            </div>
          ))}
        </PaginationItems>
      </div>
      <PaginationControls />
    </Pagination>
  </>
));

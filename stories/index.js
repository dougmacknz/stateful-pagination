import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, number } from "@storybook/addon-knobs";
import {
  Pagination,
  PaginationControls,
  PaginationItems,
  PaginationItem
} from "../src";

const stories = storiesOf("Pagination", module);

stories.addDecorator(withKnobs);

stories.addDecorator(storyFn => (
  <>
    {/* Include Bootstrap CSS for all examples */}
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
      crossOrigin="anonymous"
    />
    <div style={{ margin: "20px 0 0 20px" }}>{storyFn()}</div>
  </>
));

stories.add("basic example", () => (
  <Pagination itemsPerPage={5}>
    <div
      className="list-group"
      style={{ maxWidth: "400px", marginBottom: "20px" }}
    >
      <PaginationItems>
        {[...Array(100).keys()].map(index => (
          <PaginationItem key={index}>
            <div className="list-group-item">Item {index + 1}</div>
          </PaginationItem>
        ))}
      </PaginationItems>
    </div>
    <PaginationControls />
  </Pagination>
));

stories.add("custom number of buttons at once", () => (
  <Pagination itemsPerPage={5}>
    <div
      className="list-group"
      style={{ maxWidth: "400px", marginBottom: "20px" }}
    >
      <PaginationItems>
        {[...Array(150).keys()].map(index => (
          <PaginationItem key={index}>
            <div className="list-group-item">Item {index + 1}</div>
          </PaginationItem>
        ))}
      </PaginationItems>
    </div>
    <PaginationControls maxButtons={number("Max num of buttons", 10)} />
  </Pagination>
));

stories.add("callback on page change", () => (
  <Pagination
    itemsPerPage={5}
    onPageChange={newPage => console.log(`Changed to page ${newPage}`)}
  >
    <div
      className="list-group"
      style={{ maxWidth: "400px", marginBottom: "20px" }}
    >
      <PaginationItems>
        {[...Array(100).keys()].map(index => (
          <PaginationItem key={index}>
            <div className="list-group-item">Item {index + 1}</div>
          </PaginationItem>
        ))}
      </PaginationItems>
    </div>
    <PaginationControls />
  </Pagination>
));

stories.add(
  "lazy load",
  () => {
    const itemsAdded = [];
    const items = [];

    // Load initial page of items
    [...Array(5).keys()].map(index => {
      items.push(
        <PaginationItem key={index} position={index}>
          <div key={index} className="list-group-item">
            Item {index + 1}
          </div>
        </PaginationItem>
      );
      itemsAdded.push(index);
    });

    const onPageChange = newPage => {
      // API call for next set of 5 items
      [...Array(5).keys()].map(i => {
        const itemIndex = 5 * (newPage - 1) + i;
        if (itemsAdded.indexOf(itemIndex) === -1) {
          items.push(
            <PaginationItem key={itemIndex} position={itemIndex}>
              <div className="list-group-item">Item {itemIndex + 1}</div>
            </PaginationItem>
          );
          itemsAdded.push(itemIndex);
        }
      });
    };

    return (
      <Pagination itemsPerPage={5} onPageChange={onPageChange} pageCount={30}>
        <div
          className="list-group"
          style={{ maxWidth: "400px", marginBottom: "20px" }}
        >
          <PaginationItems>{items}</PaginationItems>
        </div>
        <PaginationControls />
      </Pagination>
    );
  },
  {
    readme: {
      sidebar:
        "This example loads only the first page of items initially. On each page change it will load the items for that page- and insert the ` <PaginationItem>` into the list, with a position prop."
    }
  }
);

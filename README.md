# stateful-pagination

[![dependency status][deps-svg]][deps-url]
[![dev dependency status][dev-deps-svg]][dev-deps-url]
[![License][license-image]][license-url]

[![npm badge][npm-badge-png]][package-url]

[package-url]: https://npmjs.org/package/stateful-pagination
[deps-svg]: https://david-dm.org/dougmacknz/stateful-pagination.svg
[deps-url]: https://david-dm.org/dougmacknz/stateful-pagination
[dev-deps-svg]: https://david-dm.org/doug/stateful-pagination/dev-status.svg
[dev-deps-url]: https://david-dm.org/dougmacknz/stateful-pagination#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/stateful-pagination.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/stateful-pagination.svg
[license-url]: LICENSE

> React pagination component with built in state management of pages.

## Demo

https://dougmacknz.github.io/stateful-pagination/

## Getting started

Install the package:

```bash
npm install stateful-pagination --save
```

Usage:

```jsx
import {
  Pagination,
  PaginationItems,
  PaginationControls
} from "stateful-pagination";
```

```jsx
<Pagination itemsPerPage={2}>
  <PaginationItems>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
  </PaginationItems>
  <PaginationControls />
</Pagination>
```

## Why another pagination component?

There's a lot of pagination components out there for React. However I haven't seen one that has built in state management of pages. This component is designed to take more of the logic out of the implementation and into the plugin.

## Props

### `<Pagination>`

| Name           | Type       | Required | Description                                                       |
| -------------- | ---------- | :------: | ----------------------------------------------------------------- |
| `itemsPerPage` | `number`   |    Y     | The amount of parent elements that will be displayed on each page |
| `onPageChange` | `function` |          | Callback function to run anytime the current page changes         |

### `<PaginationItems>`

| Name                 | Type     | Required | Description                         |
| -------------------- | -------- | :------: | ----------------------------------- |
| `containerClassName` | `string` |          | Custom class name for the container |

### `<PaginationButtons>`

| Name               | Type     | Required | Default     | Description                               |
| ------------------ | -------- | :------: | ----------- | ----------------------------------------- |
| `maxButtons`       | `number` |          | 5           | Maximum amount of buttons to show at once |
| `prevLabel`        | `node`   |          | `Previous`  | Custom label for the 'previous' button    |
| `nextLabel`        | `node`   |          | `Next`      | Custom label for the 'next' button        |
| `controlClassName` | `string` |          | `page-link` | Custom class for the pagination links     |

## Credits

The pagination button logic was inspired by this blog post by Jason Watmore:
http://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google

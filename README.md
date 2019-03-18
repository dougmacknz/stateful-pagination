# stateful-pagination

[![License][license-image]][license-url]

[![npm badge][npm-badge-png]][package-url]

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
  PaginationItem,
  PaginationControls
} from "stateful-pagination";
```

```jsx
<Pagination>
  <PaginationItems>
    <PaginationItem>
      <div>Item 1</div>
    </PaginationItem>
    <PaginationItem>
      <div>Item 2</div>
    </PaginationItem>
    <PaginationItem>
      <div>Item 3</div>
    </PaginationItem>
    <PaginationItem>
      <div>Item 4</div>
    </PaginationItem>
    ...etc
  </PaginationItems>
  <PaginationControls />
</Pagination>
```

## Why another pagination component?

There's a lot of pagination components out there for React. However I haven't seen one that has built in state management of pages + some other common implementation requirements like window state management. This component is designed to take more of the logic out of the implementation and into the plugin.

## Components & Props

### `<Pagination>`

Container for the `<PaginationItems>` and `<PaginationControls>` components.

| Name           | Type       | Required | Description                                                                               |
| -------------- | ---------- | :------: | ----------------------------------------------------------------------------------------- |
| `itemsPerPage` | `number`   |    Y     | The amount of parent elements that will be displayed on each page                         |
| `onPageChange` | `function` |          | Callback function to run anytime the current page changes                                 |
| `pageCount`    | `number`   |          | Overrides the calculated page count. Enables [lazy load mode](#normal-vs-lazy-load-mode). |

### `<PaginationItems>`

A container for all the items to be paginated.

### `<PaginationItem>`

Container for content for a single item to be paginated.

| Name       | Type     | Required | Default | Description                                                            |
| ---------- | -------- | :------: | ------- | ---------------------------------------------------------------------- |
| `position` | `number` |          |         | **Required on lazy load mode.** Position of the item in the full list. |

### `<PaginationControls>`

Buttons for the user to control which page they are viewing.

| Name              | Type     | Required | Default      | Description                               |
| ----------------- | -------- | :------: | ------------ | ----------------------------------------- |
| `maxButtons`      | `number` |          | 5            | Maximum amount of buttons to show at once |
| `prevLabel`       | `node`   |          | `Previous`   | Custom label for the 'previous' button    |
| `nextLabel`       | `node`   |          | `Next`       | Custom label for the 'next' button        |
| `ulClassName`     | `string` |          | `pagination` | Custom class/es for `<ul>` element        |
| `liClassName`     | `string` |          | `page-item`  | Custom class/es for `<li>` elements       |
| `anchorClassName` | `string` |          | `page-link`  | Custom class/es for `<a>` elements        |

## Normal vs lazy load mode

There are two modes that this component can operate in.

### Normal mode

This is the default mode where you supply the full list of items to paginate upfront and the component will handle everything from there. This is suited for situations where you have a known small amount of items you need to paginate, keeping in mind all items are stored in the user's browser memory.

### Lazy load mode

This mode is suited for when your component will potentially be displaying large amounts of data and you want to only load items as required as the user moves through pages.

To enable lazy load mode- send a `pageCount` prop to the `<Pagination>` component, and add a `position` prop to each `<PaginationItem>`.

See the [lazy load example on Storybook](https://dougmacknz.github.io/stateful-pagination/?path=/story/pagination--lazy-load) for an example of how you can use this mode.

## Styling

There is no CSS included with this plugin. By default- Bootstrap class names are applied to the Pagination controls. These class names can be changed with the `ulClassName`, `liClassName`, and `anchorClassName` props on the `<PaginationControls>` component.

## Credits

The pagination button logic was inspired by this blog post by Jason Watmore:
http://jasonwatmore.com/post/2017/03/14/react-pagination-example-with-logic-like-google

[package-url]: https://npmjs.org/package/stateful-pagination
[npm-badge-png]: https://nodei.co/npm/stateful-pagination.png?downloads=true&stars=true
[license-image]: http://img.shields.io/npm/l/stateful-pagination.svg
[license-url]: LICENSE

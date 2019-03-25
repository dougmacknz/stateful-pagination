import { configure, addDecorator, addParameters } from "@storybook/react";
import { addReadme } from "storybook-readme";

function loadStories() {
  require("../stories/index.js");
}

configure(loadStories, module);

addDecorator(addReadme);

addParameters({
  options: {
    panelPosition: "right"
  }
});

// sw-side-scrolling.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwSideScrollingLayout = createStarwindElement({
  gap: { var: "--sw-side-scrolling-gap", type: "space" },
  "pad-block": { var: "--sw-side-scrolling-pad-block", type: "space" },
  item: { var: "--sw-side-scrolling-item", type: "raw" },
});

export function defineSwSideScrolling() {
  defineElement("sw-side-scrolling", SwSideScrollingLayout);
}

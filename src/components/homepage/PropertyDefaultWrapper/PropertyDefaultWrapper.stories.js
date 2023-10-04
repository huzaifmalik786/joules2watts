import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,
  argTypes: {
    property1: {
      options: ["variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    rectangleClassName: {},
    arrowForwardClassName: {},
    arrowForward: "/homepage/arrow-forward-22.svg",
    carouselArrowForward: "/homepage/arrow-forward-23.svg",
    carouselArrowForwardClassName: {},
  },
};

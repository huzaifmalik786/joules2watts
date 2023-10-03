import { PropertyDefaultWrapper } from ".";

export default {
  title: "Components/PropertyDefaultWrapper",
  component: PropertyDefaultWrapper,
  argTypes: {
    property1: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "hover",
    className: {},
    divClassName: {},
    text: "This is who we are",
    arrowForwardClassName: {},
    arrowForward: "/consulting/arrow-forward-14.svg",
  },
};

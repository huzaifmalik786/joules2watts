import { Cta } from ".";

export default {
  title: "Components/Cta",
  component: Cta,
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
    arrowForward: "/msp/arrow-forward-23.svg",
  },
};

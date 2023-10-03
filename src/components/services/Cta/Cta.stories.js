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
    text: "This is who we are",
    arrowForward: "/services/arrow-forward-14.svg",
    divClassName: {},
    arrowForwardClassName: {},
  },
};

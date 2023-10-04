import { Service } from ".";

export default {
  title: "Components/Service",
  component: Service,
  argTypes: {
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
    card: {
      options: ["two", "three", "four", "one", "five", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    card: "two",
    className: {},
    CTAArrowForward: "/homepage/arrow-forward-18.svg",
    CTAImg: "/homepage/arrow-forward-11.svg",
    CTAArrowForward1: "/homepage/arrow-forward-15.svg",
  },
};

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
      options: ["default", "FLX", "RPO", "GIC", "HRD", "ITS"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "hover",
    card: "default",
    className: {},
    CTAArrowForward: "/services/arrow-forward-35.svg",
  },
};

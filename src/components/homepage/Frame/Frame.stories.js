import { Frame } from ".";

export default {
  title: "Components/Frame",
  component: Frame,
  argTypes: {
    property1: {
      options: ["default", "variant-5", "variant-2", "variant-3", "variant-4"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "default",
    className: {},
    rectangle: "/homepage/rectangle-190-7.svg",
  },
};

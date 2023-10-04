import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-14491", "frame-14489", "frame-14490"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-14491",
    className: {},
  },
};

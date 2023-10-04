import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["frame-14696", "frame-14697", "frame-14693", "frame-14694", "frame-14695"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "frame-14696",
    className: {},
    overlapClassName: {},
    overlapGroupClassName: {},
    rectangleClassName: {},
    rectangle: "/homepage/rectangle-190-1.svg",
  },
};

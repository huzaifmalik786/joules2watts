import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,
  argTypes: {
    property1: {
      options: ["service-digital", "variant-5", "variant-2", "variant-3", "variant-4", "variant-7", "variant-6"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "service-digital",
    className: {},
    frameClassName: {},
    vector: "/it/vector-9.svg",
    img: "/it/vector-9.svg",
    vector1: "/it/vector-9.svg",
    vector2: "/it/vector-9.svg",
    vector3: "/it/vector-9.svg",
  },
};

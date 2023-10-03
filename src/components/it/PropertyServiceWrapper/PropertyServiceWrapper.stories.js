import { PropertyServiceWrapper } from ".";

export default {
  title: "Components/PropertyServiceWrapper",
  component: PropertyServiceWrapper,
  argTypes: {
    property1: {
      options: [
        "service-cloud-services",
        "service-infrastruture-services",
        "service-digital",
        "service-product-engineering",
        "service-QA-and-testing",
        "service-professional-services",
        "service-app-modernization",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "service-cloud-services",
    className: {},
    vector: "/it/vector-9.svg",
    img: "/it/vector-9.svg",
    vector1: "/it/vector-9.svg",
    vector2: "/it/vector-9.svg",
    vector3: "/it/vector-9.svg",
    rectangle: "/it/rectangle-228-1.svg",
  },
};

import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useWindowWidth } from "./breakpoints";
import { Iphone } from "./screens/msp";
import { MobileNav } from "./screens/MobileNav";
import { Services } from "./screens/services";
import { Hire } from "./screens/hire";
import { Consulting } from "./screens/consulting";
import { RPO } from "./screens/rpo";
import { Administrative } from "./screens/administrative/Iphone";
import { OfferLetter } from "./screens/offerletter";
import { Lounge } from "./screens/lounge";
import "./App.css"
import { ItServices } from "./screens/it";
import { Staffing } from "./screens/staffing";

const router = createBrowserRouter([
  {
    path: "/msp",
    element: <Iphone />,
  },
  {
    path: "/iphone-14-3",
    element: <Iphone />,
  },
  {
    path: "/mobile-nav",
    element: <MobileNav />,
  },
  {
    path: "/services-overview",
    element: <Services />
  },
  {
    path: "/hire-train-deploy",
    element: <Hire />
  },
  {
    path: "/consulting",
    element: <Consulting />
  },
  {
    path: '/rpo',
    element: <RPO />
  },
  {
    path: "/administrative-and-payroll-management",
    element: <Administrative />
  },
  {
    path: '/offer-letter-platform',
    element: <OfferLetter />
  },
  {
    path: "/j2w-premiere-lounge",
    element: <Lounge />
  },
  {
    path: '/it-services',
    element: <ItServices />
  },
  {
    path: '/staffing-solution',
    element: <Staffing />
  }
]);

export const App = () => {
  const screenWidth = useWindowWidth();
  // useEffect(() => {
  //   console.log(window.innerWidth, screenWidth)
  //   if (window.innerWidth > 450) {
  //     document.body.style.transform = `scale(${window.innerWidth / 1440})`;
  //     document.body.style.transformOrigin = `top center`;
  //   }
  //   else {
  //     document.body.style.transform = `scale(${window.innerWidth / 390})`;
  //     document.body.style.transformOrigin = `top center`;
  //   }

  // }, [window.innerWidth]);

  return <RouterProvider router={router} />;
};

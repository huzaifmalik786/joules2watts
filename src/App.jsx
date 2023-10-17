import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, useLocation, Route, Routes } from "react-router-dom";
import { Iphone } from "./screens/msp";
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
import { About } from "./screens/about";
import { Contact } from "./screens/contact";
import { Industries } from "./screens/industries";
import { Leadership } from "./screens/leadership";
import { Careers } from "./screens/careers";
import { CSR } from "./screens/csr";
import { Iphone } from "./screens/privacyMobile/Iphone";
import { Homepage } from "./screens/homepage";

const router = [
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/msp",
    element: <Iphone />,
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
  },
  {
    path: '/about-us',
    element: <About />
  },
  {
    path: "/contact-us",
    element: <Contact />
  },
  {
    path: "/industries",
    element: <Industries />
  },
  {
    path: "/leadership",
    element: <Leadership />
  },
  {
    path: "/careers",
    element: <Careers />
  },
  {
    path: "/privacy-policy",
    element: <Iphone />
  },
  {
    path: "/csr-policy",
    element: <CSR />
  }
];

export const App = () => {

  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      {router.map((route) => {
        return (
          <Route path={route.path} element={route.element} />
        )
      })}
    </Routes>
  )
};

import { Outlet, useLocation } from "react-router-dom";

import Header from "./components/header";

import Footer from "./components/footer";

import "./styles/modals.css";

import { useEffect, useState } from "react";

import WaterBucketLoader from "./components/WaterBucketLoader";

import { useLoader } from "./context/LoaderContext.jsx";

export default function Wraper() {
  const location = useLocation();

  const { isLoading } = useLoader();

  const [showLoader, setShowLoader] = useState(isLoading);

  console.log(location);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
      return;
    }

    if (!showLoader) {
      return;
    }

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2800);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading, showLoader]);

  return (
    <>
      {showLoader && <WaterBucketLoader isLoading={isLoading} />}

      <Header />

      <Outlet />

      <Footer />
    </>
  );
}

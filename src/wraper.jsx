import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { useEffect } from "react";

export default function Wraper() {
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    // const body = document.querySelector("body");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

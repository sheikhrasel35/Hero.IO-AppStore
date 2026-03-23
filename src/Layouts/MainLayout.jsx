import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const MainLayout = () => {
  const navigation = useNavigation();
  const loading = navigation.state === "loading" || navigation.state === "submitting";

  return (
    <>
      {/* Show loader globally on page navigation */}
      {loading && <Loader />}
      <NavBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

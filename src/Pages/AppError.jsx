import { Link, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AppErrorImg from "../assets/App-Error.png";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4 mt-[60px] mb-[80px]">
        <img src={AppErrorImg} alt="404 Error" className="w-[420px] mb-[26px]" />

        <h1 className="text-4xl font-semibold mb-4">OPPS!! APP NOT FOUND</h1>
        <p className="text-[#627382] text-lg mb-6">
          {error?.status && `${error.status} - Page Not Found!`}
          {error?.statusText || "The App you are requesting is not found on our system.  please try another apps"}
        </p>


        <Link to="/">
          <button className="w-[150px] h-[48px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
                             text-white text-[16px] font-medium rounded-lg flex items-center justify-center">
            Go Back!
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;

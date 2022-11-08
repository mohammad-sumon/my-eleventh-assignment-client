import React from "react";
import { Link } from "react-router-dom";
import errorPic from "../../assets/err.jpg";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <div>
        <img src={errorPic} alt="" className="error-logo" />
      </div>
      <div className="max-w-md text-center">
        <p className="text-2xl font-semibold md:text-3xl mb-8">
          Sorry, we couldn't find this page.
        </p>
        <Link
          to="/"
          className="px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

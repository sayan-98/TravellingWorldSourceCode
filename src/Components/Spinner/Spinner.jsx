import React from "react";
import "./spinner.css";
import HashLoader from "react-spinners/HashLoader";

const Spinner = () => {
  return (
    <>
      <div className="loaderStyle">
        <HashLoader
          size={100}
          color="#f7444e"
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </>
  );
};

export default Spinner;

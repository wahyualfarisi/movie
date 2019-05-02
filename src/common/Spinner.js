import React from "react";
import spinner from "./../img/spinner-2.gif";

const Spinner = () => {
  return (
    <div>
      <img
        alt="loading"
        src={spinner}
        style={{ width: "500px", margin: "auto", display: "block" }}
      />
    </div>
  );
};

export default Spinner;

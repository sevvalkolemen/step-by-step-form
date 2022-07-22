import React from "react";
import error from "./error.png";

function Error404() {
  return (
    <div>
      <img src={error}></img>
      <center><h2 className="error">Not Found</h2></center>
      
    </div>
  );
}

export default Error404;

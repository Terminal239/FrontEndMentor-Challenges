import React from "react";

const MaxWidthContainer = ({ children, classes }) => {
  return <div className={`container ${classes && classes.join(" ")}`}>{children}</div>;
};

export default MaxWidthContainer;

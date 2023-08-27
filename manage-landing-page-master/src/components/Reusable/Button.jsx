import React from "react";

const Button = ({ classes, children, handler }) => {
  return (
    <button onClick={handler} className={`button ${classes && classes.join(" ")}`}>
      {children}
    </button>
  );
};

export default Button;

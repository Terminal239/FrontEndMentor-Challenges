import React, { useState } from "react";
import Button from "../Reusable/Button";

const ErrorMessage = () => {
  return <p></p>;
};

const FooterForm = () => {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setError("");
    setIsError(false);
    const { value } = event.target[0];

    if (value.trim().length === 0) {
      setError("Field cannot be empty!");
      setIsError(true);
      setTimeout(() => {
        setError("");
        setIsError(false);
      }, 10000);
    }

    if (value.includes("/") || !value.includes("@") || !value.includes(".")) {
      setError("Please insert a valid email");
      setIsError(true);
      setTimeout(() => {
        setError("");
        setIsError(false);
      }, 10000);
    }
  };

  return (
    <form onSubmit={handleOnSubmit} className="form">
      <input
        className={`form__input ${isError && "form__input-error"}`}
        placeholder="Updates in your inbox…"
        type="text"
      />
      {isError && <p className="error-message">{error}</p>}
      <Button classes={["form__button"]}>Go</Button>
    </form>
  );
};

export default FooterForm;

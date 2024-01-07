import { useState } from "react";
import IconArrow from "../assets/icon-arrow.svg";

interface Props {
  onSubmitForm: (ipAddress: string) => void;
  error: string;
}

const Form = ({ error, onSubmitForm }: Props) => {
  const [ipAddress, setIpAddress] = useState<string>("");

  const onClickSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    onSubmitForm(ipAddress);
  };

  return (
    <form onSubmit={onClickSubmit}>
      <input
        className={error && "error"}
        value={ipAddress}
        // @ts-ignore
        onChange={(event: React.SyntheticEvent) => setIpAddress(event.target.value)}
        type="text"
        placeholder="Search for any IP address or domain"
      />
      <button type="submit">
        <img src={IconArrow} alt="arrow icon" />
      </button>
      {error.length > 0 && <p className="error-message">{error}</p>}
    </form>
  );
};

export default Form;

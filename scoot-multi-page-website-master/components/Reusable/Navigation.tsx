import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {
  location: "header" | "footer";
};

const Navigation = ({ location }: Props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/location"}>Location</Link>
        </li>
        <li>
          <Link href={"/careers"}>Careers</Link>
        </li>
      </ul>
      {location === "header" && <Button type="primary">Get Scootin</Button>}
    </nav>
  );
};

export default Navigation;

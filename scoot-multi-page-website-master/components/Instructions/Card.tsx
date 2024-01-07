import Image from "next/image";
import React from "react";
import { Instruction } from ".";

const Card = ({ title, description, image }: Instruction) => {
  return (
    <article className="instruction__card">
      <Image src={image} width={64} height={64} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;

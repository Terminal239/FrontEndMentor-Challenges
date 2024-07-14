import Image from "next/image";
import Button from "./Button";

interface Props {
  description: string;
  image: string;
  title: string;
  hasButton: boolean;
  buttonText?: string;
  index?: number;
  upArrowFirst?: boolean;
}

const Card = ({ index, upArrowFirst, description, image, title, hasButton, buttonText }: Props) => {
  return (
    <article className="card">
      <div className="card__image">
        <Image src={image} alt={title} width={445} height={445} />
        <Image className="pattern pattern-circle" src="/patterns/circle.svg" alt="man riding a scooter" height={445} width={445} />
        {index! % 2 == 0 ? (
          upArrowFirst! ? (
            <Image className="pattern pattern-upward-arrow" src="/patterns/left-upward-arrow.svg" alt="man riding a scooter" height={151} width={741} />
          ) : (
            <Image className="pattern pattern-down-arrow" src="/patterns/left-downward-arrow.svg" alt="man riding a scooter" height={151} width={741} />
          )
        ) : (
          <Image className="pattern pattern-right-arrow" src="/patterns/right-arrow.svg" alt="man riding a scooter" height={151} width={452} />
        )}
      </div>
      <div className="card__content">
        <h2>{title}</h2>
        <p>{description}</p>
        {hasButton && <Button type="primary">{buttonText}</Button>}
      </div>
    </article>
  );
};

export default Card;

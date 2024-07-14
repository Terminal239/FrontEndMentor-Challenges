import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image: string;
  index: number;
}

const Card = ({ title, description, image, index }: Props) => {
  return (
    <article className="value-card">
      <Image width={240} height={240} src={image} alt={title} />
      <span>{index < 10 ? `0${index + 1}` : index}</span>
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
};

export default Card;

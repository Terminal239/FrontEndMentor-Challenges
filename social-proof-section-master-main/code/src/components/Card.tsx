import { CardData } from "../../data";

interface Props {
  data: CardData;
}

const Card = ({ data }: Props) => {
  return (
    <article className="bg-primary-veryDarkMagenta p-8 rounded-md md:h-fit md:last-of-type:self-end md:first-of-type:self-start">
      <div className="flex gap-4 items-center mb-4">
        <img className="rounded-full w-12 h-12" src={`image-${data.name.split(" ")[0].toLowerCase()}.jpg`} alt={`image of ${data.name}`} />
        <div>
          <p className="text-neutral-white font-bold">{data.name}</p>
          <p className="text-primary-softPink">Verified Buyer</p>
        </div>
      </div>
      <p className="text-neutral-white font-medium">"{data.review}"</p>
    </article>
  );
};

export default Card;

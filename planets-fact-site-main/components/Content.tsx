import Planet from "@/app/(planet)/[slug]/page";
import data from "@/data";
import Image from "next/image";
import Typewriter from "./Typewriter";

interface Props {
  name: string;
  data: {
    content: string;
    source: string;
  };
}

const Content = ({ name, data }: Props) => {
  return (
    <div className="content">
      <Typewriter inputText={name} element="h2" speed={200} />
      <Typewriter classes="text" inputText={data.content} element="p" speed={10} />
      <p className="source">
        Source:
        <a className="source-link" href={data.source}>
          <span>Wikipedia</span> <Image src={"/icon-source.svg"} alt="source icon" width={16} height={16} />
        </a>
      </p>
    </div>
  );
};

export default Content;

import CountUp from "react-countup";
interface Props {
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

const Statistics = ({ rotation, revolution, radius, temperature }: Props) => {
  const formattedRadius = radius.split(" ")[0].split(",").join("");

  return (
    <section className="statistics">
      <div className="item between">
        <h3>Rotation Time</h3>
        <p>
          <CountUp duration={2} start={0} end={Number(rotation.split(" ")[0])} decimals={2} /> days
        </p>
      </div>
      <div className="item between">
        <h3>Revolution Time</h3>
        <p>
          <CountUp duration={2} start={0} end={Number(revolution.split(" ")[0])} decimals={2} /> days
        </p>
      </div>
      <div className="item between">
        <h3>Radius</h3>
        <p>
          <CountUp duration={2} start={0} end={Number(formattedRadius)} decimals={1} /> km
        </p>
      </div>
      <div className="item between">
        <h3>Average temp.</h3>
        <p>
          <CountUp duration={2} start={0} end={Number(temperature.split("°")[0])} />
          °C
        </p>
      </div>
    </section>
  );
};

export default Statistics;

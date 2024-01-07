import { IpInfo } from "../App";

interface Props {
  data: IpInfo;
}

const Dashboard = ({ data }: Props) => {
  if (!data) return;

  const { ip, location, isp } = data;
  const { city, region, timezone, postalCode } = location;

  return (
    <section className="dashboard">
      <div className="info__item">
        <p className="info__title">Ip address</p>
        <p className="info__content">{ip}</p>
      </div>
      <div className="info__item">
        <p className="info__title">Location</p>
        <p className="info__content">{city + ", " + region + " " + postalCode}</p>
      </div>
      <div className="info__item">
        <p className="info__title">Timezone</p>
        <p className="info__content">UTC {timezone}</p>
      </div>
      <div className="info__item">
        <p className="info__title">Isp</p>
        <p className="info__content">{isp}</p>
      </div>
    </section>
  );
};

export default Dashboard;

import Leaflet from "leaflet";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { IpInfo } from "../App";
import iconUrl from "../assets/icon-location.svg";

export const newicon = new Leaflet.Icon({
  iconUrl,
});

interface Props {
  data: IpInfo;
}

// @ts-ignore
function ChangeMapView({ coords }) {
  const map = useMap();
  map.setView(coords, map.getZoom());

  return null;
}

const Map = ({ data }: Props) => {
  if (!data) return;

  const { lat, lng } = data.location;
  return (
    <MapContainer className="map" style={{ height: "100%" }} center={[lat, lng]} zoom={13} scrollWheelZoom={true}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <ChangeMapView coords={[lat, lng]} />
      <Marker icon={newicon} position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

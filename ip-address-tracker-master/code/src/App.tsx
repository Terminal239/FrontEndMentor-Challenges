import Map from "./components/Map";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";
import axios, { AxiosError, AxiosResponse } from "axios";
import "./App.css";
import { useEffect, useState } from "react";

interface Location {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  timezone: string;
  geonameId: number;
}

interface AsInfo {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

export interface IpInfo {
  ip: string;
  location: Location;
  as: AsInfo;
  isp: string;
}

const BASE_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=at_XtXOGSgdWUehogYpcsgIAwaeEUTeO";
const IP_VALIDATION = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
const DOMAIN = /^(https?:\/\/)?(?!-)[A-Za-z0-9-]{1,63}(?:\.[A-Za-z0-9-]{1,63})*?$/g;

const sendApiRequest = async (url?: string): Promise<IpInfo> => {
  const requestUrl = url ? url : BASE_URL;

  const response: AxiosResponse = await axios.get(requestUrl);
  const responseData = response.data as IpInfo;

  return responseData;
};

const App = () => {
  const [ipData, setIpData] = useState<IpInfo>();
  const [error, setError] = useState<string>("");

  const handleFormSubmit = async (input: string) => {
    let requestUrl: string = BASE_URL;
    let error: boolean = false;

    if (input.match(IP_VALIDATION)) requestUrl += `&ipAddress=${input}`;
    else if (input.match(DOMAIN)) requestUrl += `&domain=${input}`;
    else if (input.length !== 0) error = true;

    if (error) return;
    sendRequest(requestUrl);
  };

  const sendRequest = async (requestUrl?: string) => {
    try {
      const data = await sendApiRequest(requestUrl);
      setIpData(data);
    } catch (error) {
      if (error instanceof AxiosError) setError("Invalid IP Address or domain!");
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <header>
        <h1>IP Address Tracker</h1>
        <Form error={error} onSubmitForm={handleFormSubmit} />
      </header>
      <main>
        <Dashboard data={ipData!} />
        <Map data={ipData!} />
      </main>
    </>
  );
};

export default App;

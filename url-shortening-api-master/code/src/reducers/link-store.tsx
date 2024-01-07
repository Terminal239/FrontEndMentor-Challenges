import axios from "axios";

export interface LinkItem {
  original: string;
  shortened: string;
}

export const getLinks = (): LinkItem[] => {
  const data = localStorage.getItem("links");
  if (!data) return [];
  else return JSON.parse(data) as LinkItem[];
};

export const shortenLink = async (original: string): Promise<LinkItem> => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("url", original);

  const options = {
    method: "POST",
    url: "https://url-shortener-service.p.rapidapi.com/shorten",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "d7f72dd533msh541391b519531d0p1b9441jsne11047b2edfb",
      "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const response = await axios.request(options);
  return {
    original,
    shortened: response.data["result_url"],
  };
};

export const store = (links: LinkItem[]) => {
  localStorage.setItem("links", JSON.stringify(links));
};

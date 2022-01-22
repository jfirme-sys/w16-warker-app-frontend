import axios from "axios";
import { IpData } from "../model";

interface IParams {
  apiKey: string;
  ipAddress: string;
}

const getData = async ({ apiKey, ipAddress }: IParams): Promise<IpData> => {
  const response = await axios.get(
    " https://geo.ipify.org/api/v2/country,city",
    { params: { apiKey, ipAddress } }
  );
  return { ip: response.data.ip, location: response.data.location };
};

export { getData };

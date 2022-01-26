import { getGasStations } from "modules/gas-stations/services/getGasStations";
import { useState, createContext, useEffect, useContext } from "react";
import { AuthContext } from "./authProvider";

interface Coords {
  latitude: string;
  longitude: string;
}

interface GasStations {
  id: string;
  reservatorio: string;
  coords: Coords;
  updated_at: string;
  created_at: string;
}

const gasStationMock = [{
  id: '1',
  reservatorio: '28',
  coords: {
    latitude: '-38.569450887622466',
    longitude: '-3.771743500207963'
  },
  updated_at: '2021-03-04T14:28:16.000000Z',
  created_at: '2021-03-04T14:28:16.000000Z'
}]

const defaultValues = {
  gasStations: gasStationMock
}

export const GasStationsContext = createContext(defaultValues);

const GasStationsProvider = (props: any) => {
  const { userData } = useContext(AuthContext)
  const [gasStations, setGasStations] = useState<GasStations[]>(gasStationMock)

  useEffect(() => {
    (async () => {
      try {
        const gasStations = await getGasStations(userData.token)
        setGasStations(gasStations)
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <GasStationsContext.Provider
      value={{ gasStations }}
    >
      {props.children}
    </GasStationsContext.Provider>
  );
};

export default GasStationsProvider;
import { getGasStations } from "modules/gas-stations/services/getGasStations";
import { useState, createContext, useEffect } from "react";

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
  id: '',
  reservatorio: '',
  coords: {
    latitude: '',
    longitude: ''
  },
  updated_at: '',
  created_at: ''
}]

const defaultValues = {
  gasStations: gasStationMock
}

export const GasStationsContext = createContext(defaultValues);

const GasStationsProvider = (props: any) => {
  const [gasStations, setGasStations] = useState<GasStations[]>(gasStationMock)

  useEffect(() => {
    (async () => {
      try {
        setGasStations([])
        const gasStations = await getGasStations()
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
interface Coords {
  latitude: string;
  longitude: string;
}

export interface GasStations {
  id: string;
  reservatorio: string;
  coords: Coords;
  updated_at: string;
  created_at: string;
}
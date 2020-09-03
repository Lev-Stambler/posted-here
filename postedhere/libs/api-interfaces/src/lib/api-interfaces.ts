interface Person {
  name: string;
}

export interface MarkerInfo {
  lat: number;
  lng: number;
  people: Person[];
}

export interface Message {
  message: string;
}

/**
 * Begin API Endpoint Interface
 */

export interface NewMarker {
  info: MarkerInfo
}

export interface GetAllMarkers {
  markerInfos: MarkerInfo[]
}
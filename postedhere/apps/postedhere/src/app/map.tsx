import React, { Component, useState } from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => {
    const [markers, setMarkers] = useState<{lat: number, lng: number}[]>([]);
    function onMarkerClick(e) {
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      setMarkers([...markers, {lat, lng}])
    }
    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        onClick={onMarkerClick}
      >
        {
          markers.map(marker => <Marker position={{lat: marker.lat, lng: marker.lng}} />)
        }
        {/* <Marker position={{ lat: -34.397, lng: 150.644 }} /> */}
      </GoogleMap>
    );
  })
);

export interface GoogleMapProps {
  isMarkerShown?: boolean;
}

const GoogleMapCustom = (props: GoogleMapProps) => {
  return (
    <MapWithAMarker
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNHLik16D00yU-MKF0vqt2yp_v8UqPh7w&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
};

export default GoogleMapCustom;

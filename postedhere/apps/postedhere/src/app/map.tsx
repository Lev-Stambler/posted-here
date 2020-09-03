import React, { Component, useState } from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';
import { MarkerInfo } from '@postedhere/api-interfaces';
import { overlayStyle, inputWrapperStyle } from './app-styles';

const NewMarkerPopup = (props: { vis: boolean, lat: number, lng: number }) => {
  
  async function onSubmit() {
    fetch('/new')
  }

  return (
    <div style={{ display: `${props.vis ? 'grid' : 'none'}`, ...overlayStyle }} >
      <div className="modal" style={{background: 'white', padding: '2rem', display: 'grid', justifyContent: 'start'}}>
        <p></p>
        <div style={inputWrapperStyle}>
          <input type="text" name="" id="" placeholder="An identifiable name"/>
        </div>
        <div style={inputWrapperStyle}>
          <label htmlFor="">Availability start time </label>
          <input type="time" name="" id="" placeholder=""/>
        </div>
        <div style={inputWrapperStyle}>
          <label htmlFor="">Availability end time </label>
          <input type="time" name="" id="" placeholder=""/>
        </div>
        <input type="button" value="Post here!" onClick={() => onSubmit()}/>
      </div>
    </div>
  );
};

const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => {
    const [markers, setMarkers] = useState<MarkerInfo[]>([]);
    const [newMarkerVis, setNewMarkerVis] = useState(false);
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    function onMarkerClick(e) {
      setLat(e.latLng.lat());
      setLng(e.latLng.lng());
      setNewMarkerVis(true);
      // setMarkers([...markers, { lat, lng, people: [{ name: 'Lev' }] }]);
    }
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 40.4427, lng: -79.943 }}
        onClick={onMarkerClick}
      >
        <NewMarkerPopup vis={newMarkerVis, lat, lng} />
        {markers.map((marker) => (
          <Marker position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
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

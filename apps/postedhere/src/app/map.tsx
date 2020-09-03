import React, { Component, useState, useEffect } from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';
import {
  MarkerInfo,
  NewMarker,
  GetAllMarkers,
} from '@postedhere/api-interfaces';
import { overlayStyle, inputWrapperStyle } from './app-styles';
import { environment } from '../environments/environment';

function dateFromTime(time: string) {
  console.log(time);
  const date = new Date();
  const times = time.split(':'); // replace with ":" for differently displayed time.
  const hours = times[0];
  const minutes = times[1];

  console.log(parseInt(hours), parseInt(minutes));
  date.setHours(parseInt(hours));
  date.setMinutes(parseInt(minutes));
  date.setSeconds(0);

  return date;
}

const baseUrl = environment

function timeFromDate(date: Date) {
  function twoLong(n: number) {
    return n < 10 ? `0${n}` : `${n}`;
  }
  return `${twoLong(date.getHours())}:${twoLong(date.getMinutes())}`;
}

const NewMarkerPopup = (props: {
  vis: boolean;
  lat: number;
  lng: number;
  successClbk: () => void;
}) => {
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  async function onSubmit() {
    const ret = await fetch(`${baseUrl}/marker`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        info: {
          lat: props.lat,
          lng: props.lng,
          availabilities: [
            {
              name,
              startTime,
              endTime,
            },
          ],
        },
      } as NewMarker),
    });
    if (ret.status === 204) {
      alert('Success!');
      props.successClbk();
    }
  }

  return (
    <div style={{ display: `${props.vis ? 'grid' : 'none'}`, ...overlayStyle }}>
      <div
        className="modal"
        style={{
          background: 'white',
          padding: '2rem',
          display: 'grid',
          justifyContent: 'start',
        }}
      >
        <p></p>
        <div style={inputWrapperStyle}>
          <input
            type="text"
            name=""
            id=""
            placeholder="An identifiable name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={inputWrapperStyle}>
          <label htmlFor="">Availability start time </label>
          <input
            type="time"
            name=""
            id=""
            placeholder=""
            value={timeFromDate(startTime)}
            onChange={(e) => setStartTime(dateFromTime(e.target.value))}
          />
        </div>
        <div style={inputWrapperStyle}>
          <label htmlFor="">Availability end time </label>
          <input
            type="time"
            name=""
            id=""
            placeholder=""
            value={timeFromDate(endTime)}
            onChange={(e) => setEndTime(dateFromTime(e.target.value))}
          />
        </div>
        <input type="button" value="Post here!" onClick={() => onSubmit()} />
      </div>
    </div>
  );
};

const MapWithAMarker = withScriptjs<any>(
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
    useEffect(() => {
      fetch(`${baseUrl}/all-markers`).then(async (ret) => {
        const body = (await ret.json()) as GetAllMarkers;
        setMarkers(body.markerInfos);
      });
    }, []);
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: 40.4427, lng: -79.943 }}
        onClick={onMarkerClick}
      >
        <NewMarkerPopup
          vis={newMarkerVis}
          lat={lat}
          lng={lng}
          successClbk={() => window.location.reload()}
        />
        {markers.map((marker) => (
          <Marker position={{ lat: marker.lat, lng: marker.lng }} />
        ))}
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

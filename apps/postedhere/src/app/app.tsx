import React, { useEffect, useState } from 'react';
import InfoKey from './components/info-key/info-key'
import GoogleMapCustom from './components/map/map';

export const App = () => {
  return (
    <>
      
      <div style={{ textAlign: 'center', height: '100vh', width: '100%', position: 'relative' }}>
        <GoogleMapCustom />
        <div className="info-key-wrapper" style={{position: 'absolute', left: '2rem', bottom: '2rem', zIndex: 100, height: 'auto'}}>
          <InfoKey />
        </div>
      </div>
    </>
  );
};

export default App;

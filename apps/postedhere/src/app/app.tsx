import React, { useEffect, useState } from 'react';
import { Message } from '@postedhere/api-interfaces';
import GoogleMapCustom from './map';

export const App = () => {
  return (
    <>
      <div style={{ textAlign: 'center', height: '100vh', width: '100%' }}>
        <GoogleMapCustom />
      </div>
    </>
  );
};

export default App;

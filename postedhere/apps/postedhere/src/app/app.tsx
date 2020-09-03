import React, { useEffect, useState } from 'react';
import { Message } from '@postedhere/api-interfaces';
import GoogleMapCustom from './map';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center', height: '100vh', width: '100%' }}>
        <GoogleMapCustom />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;

import React, { useEffect, useState } from 'react';

const infoKeyWrapperStyle: React.CSSProperties = {
  background: 'black',
  color: 'white',
  padding: '1rem',
}

export const InfoKey = () => {
  return (
    <div style={infoKeyWrapperStyle}>
      <p>
        Green Box: Available now
      </p>
      <p>
        Grey Box: Available in the future
      </p>
      
    </div>
  );
};

export default InfoKey;

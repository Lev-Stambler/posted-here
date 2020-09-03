import React from 'react';

export const overlayStyle = {
  position: 'fixed',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'hidden',
  // see through grey
  background: '#c8c8c894',
  justifyContent: 'center',
  alignItems: 'center',
  'z-index': 1000,
} as React.CSSProperties;

export const inputWrapperStyle = {
  display: 'block',
  width: '100%',
  padding: '1rem',
};

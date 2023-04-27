import React from 'react';
import Lottie from 'lottie-react-native';

export default function ChangingColorOfLayers() {
  return (
    <Lottie
      source={require('./file/button.json')}
      colorFilters={[
        {
          keypath: 'button',
          color: '#F00000',
        },
        {
          keypath: 'Sending Loader',
          color: '#F00000',
        },
      ]}
      autoPlay
      loop
    />
  );
}
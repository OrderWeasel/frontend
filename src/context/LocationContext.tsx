import React from 'react';
import {createContext, useState, useEffect} from 'react';

const LocationContext = createContext(null);

const LocationProvider = props => {
  const [location, setLocation] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(false);

  useEffect(() => {
    //     console.log(location)
  }, [location]);
  useEffect(() => {
    //     console.log(currentAddress)
  }, [currentAddress]);

  return (
    <LocationContext.Provider
      value={{location, setLocation, currentAddress, setCurrentAddress}}>
      {props.children}
    </LocationContext.Provider>
  );
};

export {LocationContext, LocationProvider};

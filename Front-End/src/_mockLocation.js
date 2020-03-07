import * as Location from 'expo-location';

const tenMeterWithDegrees = 0.0001;

const getLocation = increment => {
  return {
    timestamp: 1000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 0.5,
      altitude: 0.5,
      longitude: -12.231521 + increment * tenMeterWithDegrees,
      latitude: 37.124421 + increment * tenMeterWithDegrees
    }
  }
};


let counter = 0;

setInterval(()=>{
  Location.EventEmitter.emit('Expo.locationChanged',{
    watchId:Location._getCurrentWatchId(),
    location:getLocation()
  });
  counter++;
},500)
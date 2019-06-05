import React from 'react';
import  MapGL, { Marker } from 'react-map-gl';
import './App.css';

class Map extends React.Component {

    state = {
      viewport: {
        width: 2400,
        height: 1200,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 12
      }
    };
  
    render() {
      console.log(process.env)
      return (
        <div className="mapSize">
          <MapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle={'mapbox://styles/nmcgregor-orange/cjwjov0dt0xcc1cmpe7wt73a2'}
          >
            <Marker offsetTop={-30} key="1" latitude={37.7577} longitude={-122.4376}>
            <div id="pulse">
            <img src="https://cdn4.iconfinder.com/data/icons/ios7-active-tab/512/map_marker-64.png" alt="" />
            </div>
            </Marker>
          </MapGL>
        </div>
      );
    }
  }

  export default Map;
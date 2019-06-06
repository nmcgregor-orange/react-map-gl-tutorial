import React from 'react';
import  MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
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
      const { stores } = this.props;
      return (
        <div className="mapSize">
          <MapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle={'mapbox://styles/nmcgregor-orange/cjwjov0dt0xcc1cmpe7wt73a2'}
          >
            <Marker offsetTop={-25} key="1" latitude={37.7577} longitude={-122.4376}>
            <div className="pulseSpot">
            {/* <img src="https://cdn4.iconfinder.com/data/icons/ios7-active-tab/512/map_marker-64.png" alt="" /> */}
            </div>
            </Marker>
          </MapGL>
        </div>
      );
    }
}

Map.propTypes = {
    stores: PropTypes.object.isRequired,
};

Map.defaultProps = {
    stores: {},
};  

export default Map;
import React from 'react';
import  MapGL, { Marker } from 'react-map-gl';
import PropTypes from 'prop-types';
import './App.css';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
              width: 2400,
              height: 1200,
              latitude: 37.7577,
              longitude: -122.4376,
              zoom: 3.7
            }
          };
    }

    // state = {
    //   viewport: {
    //     width: 2400,
    //     height: 1200,
    //     latitude: 37.7577,
    //     longitude: -122.4376,
    //     zoom: 12
    //   }
    // };
  
    render() {
      const { stores } = this.props;

      const storesList = stores ? (
        stores.map(store => {
            const JsonStore = JSON.parse(store);
            return <Marker offsetTop={-25} 
                key={JsonStore.storeId} 
                latitude={JsonStore.coordinates.latitude} 
                longitude={JsonStore.coordinates.longitude}>
                <div className="pulseSpot">
                </div>
            </Marker>
      })
      ) : null;
      return (
        <div className="mapSize">
        {console.log(stores)}
          <MapGL
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle={'mapbox://styles/nmcgregor-orange/cjwjov0dt0xcc1cmpe7wt73a2'}
          >
          {storesList} : 
            
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
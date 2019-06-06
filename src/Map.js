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
              latitude: 39.5086,
              longitude: -96.1559,
              zoom: 4.5
            }
          };
    }

 
  
    render() {
        const { stores } = this.props;

        if(this.state.viewport.zoom > 6.2){

        }else{

        }

        const marketList =[];  
        const smallStoresList = stores ? (
        //   const areaList = [];
        stores.map(store => {
        const JsonStore = JSON.parse(store);
        if(!marketList.includes(JsonStore.marketNumber)){
            console.log("ml"+ (marketList.includes(JsonStore.marketList))+JsonStore.marketNumber);
            marketList.push(JsonStore.marketNumber);
            return <Marker 
                offsetTop={-20} 
                key={JsonStore.storeId} 
                latitude={JsonStore.coordinates.latitude} 
                longitude={JsonStore.coordinates.longitude}>
                <div className="pulseSpot marketNum">
                {JsonStore.name}
                {/* {JsonStore.marketNumber} */}
            </div>
            </Marker>
        }
        })

        ): null;
        console.log(marketList);


        const storesList = stores ? (
        stores.map(store => {
            const JsonStore = JSON.parse(store);
            console.log(JsonStore.name)
            return <Marker offsetTop={-20} 
                key={JsonStore.storeId} 
                latitude={JsonStore.coordinates.latitude} 
                longitude={JsonStore.coordinates.longitude}>
                <div className="pulseSpot marketNum">
                {JsonStore.name}
                {/* {JsonStore.marketNumber} */}
                </div>
            </Marker>
        })
        ) : null;

        let viewList;
        if(this.state.viewport.zoom > 7){
            viewList = storesList;
        }else{
            viewList = smallStoresList;
        }
      
        return (
            <div className="mapSize">
                <MapGL
                {...this.state.viewport}
                onViewportChange={(viewport) => this.setState({viewport})}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle={'mapbox://styles/nmcgregor-orange/cjwjov0dt0xcc1cmpe7wt73a2'}
                >
                {viewList} : 
                
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
import React from 'react';
import Map from './Map';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        stores: [],
    };

    this.getItems = this.getItems.bind(this);
  }

  getItems() {
    axios.get('http://localhost:5000/api/v1/stores')
    .then(
        (result) => {
            this.setState({
                isLoaded: true,
                stores: result.data.stores,
            });
        },
    )
    .catch(
        (error) => {
            this.setState({
                isLoaded: true,
                error,
            });
        },
    );
  }

  componentDidMount() {
    this.getItems();
  }

  render(){
    return (
      <div className="mapSize">
        <Map stores={this.state.stores} />
      </div>
    );
  }
}

export default App;

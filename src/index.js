import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  //Initialize state
  constructor(props) {
    super(props)

    this.state = { latitude: null, errorMessage: '' }

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        //To update the state I have to use setState
        this.setState({ latitude: position.coords.latitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message})
      }
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

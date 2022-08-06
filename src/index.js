import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: '', date: null };
  }

  componentDidMount() {
    // runs after the component rendered for the first time
    // runs only once
    window.navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude } }) => {
        // ====== to update the lat state we used setState ==========
        this.setState({ lat: latitude });

        // do not use
        // this.state.lat = latitude
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    // runs after the component rerenders -update-
    // runs as many times as the components updates
    console.log('My Component was just updated - it rerendered!');
  }

  // render function Required By React
  render() {
    const { lat, errorMessage } = this.state;
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }
    if (!errorMessage && lat) {
      return <div>Latitude: {lat}</div>;
    }
    return <div>Loading...</div>;
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);

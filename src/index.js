import React from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  state = { lat: null, errorMessage: '' };

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
  }

  renderContent() {
    const { lat, errorMessage } = this.state;
    if (errorMessage && !lat) {
      return <div>Error: {errorMessage}</div>;
    }
    if (!errorMessage && lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request..." />;
  }

  // render function Required By React
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);

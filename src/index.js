import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<App />);

import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

/*const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return <div>Latitude: {}</div>;
};*/

class App extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = { lat: null, errorMessage: "" };
  }*/

  state = { lat: null, errorMessage: "" };

  //content visible on screen
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  // wait for updates...
  componentDidUpdate() {
    console.log("componentDidUpdate - updated / rerendered: ", this.state);
  }

  // wait until the component is not longer shown
  componentWillUnmount() {}

  render() {
    return (
      <div>
        {this.state.lat && <SeasonDisplay lat={this.state.lat} />}

        {this.state.errorMessage && (
          <span>Error: {this.state.errorMessage}</span>
        )}
        {!this.state.errorMessage && !this.state.lat && (
          <Spinner message="Please accept the location request!" />
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

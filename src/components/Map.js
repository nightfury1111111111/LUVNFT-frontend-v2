import { Component } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

class Map extends Component {
  state = {
    viewport: {
      width: 400,
      height: 400,
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 10,
    },
  };

  render() {
    return (
      <div className="text-black relative">
        <ReactMapGL
          {...this.state.viewport}
          width="100%"
          height="calc(100vh - 64px)"
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    );
  }
}

export default Map;

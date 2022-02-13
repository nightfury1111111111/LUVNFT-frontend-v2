import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
  const [viewport, setViewport]=useState({
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 10,
    })

    return (
      <div className="text-black relative">
        <ReactMapGL
          {...viewport}
          width="100%"
          height="calc(100vh - 64px)"
          onViewportChange={(viewport) => setViewport(viewport)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
      </div>
    );
}

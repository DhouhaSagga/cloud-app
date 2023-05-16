import React from "react";
import "./App.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

function App() {
  const item = {
    name: "Location 1",
    location: {
      lat: 33.87239440050665, 
      lng: 10.109997496425345,
    },
  };

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 33.87239440050665,
    lng: 10.109997496425345,
  };

  return (
    <div>
      <div className="aboutUsElement">
        <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker key={item.name} position={item.location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}

export default App;
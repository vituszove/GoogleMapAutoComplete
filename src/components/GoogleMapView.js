import React, { useEffect } from "react";
import {
  GoogleMap,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const GoogleMapView = ({ isLoaded, coordinate, onLoad, onUnmount }) => {
  useEffect(() => {
  }, [coordinate])
  
  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinate}
        zoom={1}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={coordinate} />
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMapView);

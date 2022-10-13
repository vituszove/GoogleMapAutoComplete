import React,{ useState } from "react";
import GoogleAutoComplete from "../components/GoogleAutoComplete";
import GoogleMapView from "../components/GoogleMapView";
import {
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { storePlaces } from "../actions/commonAction";
import { connect } from "react-redux";

const MainPage = () => {
  const [address, setAddress] = useState("");
  const [cor, setCor] = useState({
    lat: 3.1448358028811754,
    lng: 101.70099053574161,
  });

  const onChange = (value) => {
    setAddress(value);
  };

  const onSelect = async (value) => {
    const res = await geocodeByAddress(value);
    const resCor = await getLatLng(res[0]);
    storePlaces(value)
    setAddress(value);
    setCor(resCor);
  };


  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GOOGLE_API_KEYS,
    libraries: ["places"],
  });

  const [map, setMap] = React.useState(/** @type google.maps.Map */);
  
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(cor);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  console.log(map)
  return (
    <div className="main-page">
      <GoogleAutoComplete address={address} onChange={onChange} onSelect={onSelect}/>
      <GoogleMapView isLoaded={isLoaded} coordinate={cor} onLoad={onLoad} onUnmount={onUnmount}/>

    </div>
  );
};
const mapStateToProps = state => ({
  common: state.address,
});
export default connect(mapStateToProps, { storePlaces })(MainPage);

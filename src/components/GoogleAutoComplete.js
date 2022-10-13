import React from "react";
import PlacesAutocomplete, {
  // geocodeByAddress,
  // getLatLng,
} from "react-places-autocomplete";
import { Input } from "antd";
import { connect } from "react-redux";
import { storePlaces } from "../actions/commonAction";
const { Search } = Input;

const GoogleAutoComplete = ({address, onChange, onSelect}) => {
  return (
    <div className="input-box">
    <PlacesAutocomplete value={address} onChange={onChange} onSelect={onSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div key={suggestions.description}>
          <Search
            onSearch={onSelect}
            {...getInputProps({
              placeholder: "Search Places ...",
              //   className: "location-search-input",
            })}
            className="search-input"
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "#fafafa", cursor: "pointer" }
                : { backgroundColor: "#ffffff", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
    </div>
  );
};

export default connect(null, {storePlaces})(GoogleAutoComplete);

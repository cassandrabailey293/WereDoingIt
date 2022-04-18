import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";

const mapStyles = {
  position: "relative",
  width: "60vw",
  height: "50vh",
  margin: "auto",
};

const fields = ["name", "rating", "formatted_phone_number", "geometry", "url"];
const placeIds = [
  "ChIJ75ssAQKSbIcReLM-YNsepYw",
  "ChIJrz2ZXQ2FbIcRmuEC0KSgYtE",
  "ChIJATR6UFCPbIcRybD5JBjeIkk",
  "ChIJx1AW12WObIcRU94ebh8n8_g",
];
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }

  onMarkerClick = (props, marker, e) => {
    let place = this.state.places.find((p) => p.name === marker.title);
    this.setState({
      selectedPlace: place,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  componentDidMount() {
    let service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    let callback = (place, status) => {
      if (status == window.google.maps.places.PlacesServiceStatus.OK) {
        this.setState({ places: this.state.places.concat([place]) });
      }
    };
    placeIds.forEach((id) => {
      var request = {
        placeId: id,
        fields,
      };
      service.getDetails(request, callback);
    });
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        containerStyle={mapStyles}
        initialCenter={{
          lat: 39.5480555,
          lng: -104.80568,
        }}
        onClick={this.onMapClicked}
      >
        {this.state.places.map((place) => (
          <Marker
            title={place.name}
            id={place.name}
            position={place.geometry.location}
            onClick={this.onMarkerClick}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h6>{this.state.selectedPlace.name}</h6>
            <p>{this.state.selectedPlace.formatted_phone_number}</p>
            <a href={this.state.selectedPlace.url} target="_blank">
              {this.state.selectedPlace.url}
            </a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD1JhK9uiC_6AOYF_p1rLWbAdeDIpRM5w4",
  libraries: ["places"],
})(MapContainer);

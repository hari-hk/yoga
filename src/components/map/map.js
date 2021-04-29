import React from "react";
import GoogleMapReact from "google-map-react";
export class MapComponent extends React.Component {
  static defaultProps = {
    center: {
      lat: 8.3022,
      lng: 77.2231,
    },
    zoom: 13,
  };

  render() {
    return (
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

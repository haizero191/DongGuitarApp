import React from 'react'
import GoogleMapReact from 'google-map-react';
// import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'



const GoogleMapAddress = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
    };
  return (
    <div>
       <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals="true"
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}

      </GoogleMapReact>
    </div>
  )
}

export default GoogleMapAddress;
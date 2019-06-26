import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import ReactTooltip from 'react-tooltip'

const AnyReactComponent = () => (
    <div className="placeMarker">
        <i className="fa fa-map-marker fa-3x" aria-hidden="true" data-tip data-for='info'></i>
        <ReactTooltip id='info' place="left" type="dark">
            <span>Service Finance Co LLC, 555 S Federal Hwy # 200, Boca Raton, FL 33432</span>
        </ReactTooltip>
    </div>
);

class GoogleMap extends Component {
    static defaultProps = {
        center: { lat: 26.34503, lng: -80.08660 },
        zoom: 17,
    };

    render() {
        return (
            <GoogleMapReact
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
            >
                <AnyReactComponent />
            </GoogleMapReact >
        )
    }
}

export default GoogleMap;
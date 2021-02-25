import React from 'react';
import styled from 'styled-components'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapWrapper = styled.div`
    width: calc(80% - 20px);
    height: 100%;
    margin-left: 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
`
const Map = (props) => {
    const coordinates = [props.city.latitude, props.city.longitude];

    return (
        <>
            <MapWrapper>
                <MapContainer
                    center={coordinates}
                    zoom={13}
                    scrollWheelZoom={true}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={coordinates}
                    >
                        <Popup>
                            {`
                            state: ${props.city.state}
                            population: ${props.city.population}
                            growth 2000-2013: ${props.city.growth_from_2000_to_2013}
                        `}
                        </Popup>
                    </Marker>
                </MapContainer>
            </MapWrapper>
        </>
    )

};

export default Map;

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'

const MapWrapper = styled.div`
    width: calc(80% - 20px);
    height: 100%;
    margin-left: 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
`
const Map = (props) => {
    const [coordinates, setCoordinates] = useState([44.582076, 103.461760]);
    const [details, setDetails] = useState('');

    const DrawMap = () => {
        return (
            <MapContainer
                center={coordinates}
                zoom={13}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coordinates}>
                    <Popup>{details}</Popup>
                </Marker>
            </MapContainer>
        )
    };

    useEffect(() => {
        setCoordinates([props.city.latitude, props.city.longitude]);
        setDetails(`
            state: ${props.city.state}
            population: ${props.city.population}
            growth 00-13: ${props.city.growth_from_2000_to_2013}
        `);
        DrawMap();
    }, [props.city]); //eslint-disable-line

    return (
        <>
            <MapWrapper>
                <DrawMap />
            </MapWrapper>
        </>
    )

};

export default Map;

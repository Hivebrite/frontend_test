import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styled from 'styled-components'

const MapWrapper = styled.div`
    width: 80vw;
    height: 100%;
    margin-left: 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
`
const Map = (props) => {
    const [coordinates, setCoordinates] = useState([37.315116, -101.810234]);
    const [details, setDetails] = useState('');
    const [zoom, setZoom] = useState(4);

    const DrawMap = () => {
        console.log('defaults for map');
        return (
            <MapContainer
                center={coordinates}
                zoom={zoom}
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
        DrawMap();
    }, []);


    useEffect(() => {
        if (props.city) {
            setCoordinates([props.city.latitude, props.city.longitude]);
            setDetails(`
                state: ${props.city.state}
                population: ${props.city.population}
                growth 00-13: ${props.city.growth_from_2000_to_2013}
            `);
            setZoom(10);
            DrawMap();
        }
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

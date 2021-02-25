import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import List from '../components/list';
import Map from '../components/map';
import data from '../data/cities.json';


const Wrapper = styled.div`
    margin: 40px auto;
    padding: 30px;
    width: 1000px;
    height: 600px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    display: flex;
    align-items: center;
`

const Home = (props) => {
    const [cities, setCities] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [selectedCity, setSelectedCity] = useState();
    const defaultCity = {
        'city': 'Georgetown',
        'growth_from_2000_to_2013': '91.9%',
        'latitude': 30.6332618,
        'longitude': -97.6779842,
        'population': '54898',
        'rank': '666',
        'state': 'Texas',
    };

    const selectCity = (rank) => {
        console.log('CITY rank', rank);
        const city = filteredList.find((e) => e.rank === rank);
        setSelectedCity(city);
        console.log('selected city rank:', selectedCity.rank);
    };

    const filterList = (str) => {
        console.log('filterList str:', str);
        if (str.length > 2) {
            const filter = cities.filter((e) => e.city.indexOf(str) !== -1);
            console.log('filterList:', filter);
            setFilteredList(filter);
        } else {
            setFilteredList(cities.slice(0, 10));
        }
    }

    useEffect(() => {
        setCities(data);
    }, []);

    useEffect(() => {
        if (cities && cities.length > 0) {
            setFilteredList(cities.slice(0, 10));
        }
    }, [cities]);

    return (
        <Wrapper>
            <List cities={filteredList} selectCity={selectCity} searchList={filterList}/>
            <Map city={selectedCity ? selectedCity : defaultCity}/>
        </Wrapper>
    );
};

export default Home;

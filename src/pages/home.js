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

const Home = () => {
    const [cities, setCities] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [selectedCity, setSelectedCity] = useState();

    const selectCity = (rank) => {
        const city = filteredList.find((e) => e.rank === rank);
        setSelectedCity(city);
    };

    const filterList = (str) => {
        console.log('filterList str:', str);
        if (str.length > 1) {
            const filter = cities.filter((e) => e.city.toLowerCase().indexOf(str.toLowerCase()) !== -1);
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
            <Map city={selectedCity}/>
        </Wrapper>
    );
};

export default Home;

import React from 'react';
import styled from 'styled-components';

import List from '../components/list';
import Map from '../components/map';


const Wrapper = styled.div`
    margin: 40px auto;
    background-color: orange;
    padding: 30px;
    width: 1000px;
    height: 600px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    display: flex;
    align-items: center;
`

const Home = ({ cities, filteredList, onFilterList, onSelectCity, selectedCity }) => {
    const test = {
        'city': 'Los Angeles',
        'growth_from_2000_to_2013': '4.8%',
        'latitude': 34.0522342,
        'longitude': -118.2436849,
        'population': '3884307',
        'rank': '2',
        'state': 'California'
    };

    return (
        <Wrapper>
            <List list={cities}/>
            <Map city={test}/>
        </Wrapper>
    );
};

export default Home;

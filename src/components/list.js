import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import City from './city';

const ListWrapper = styled.div`
    width: 20%;
    height: 90%;
    padding: 30px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    overflow-y: scroll;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const SearchInput = styled.input`
    width: 100%;
    padding: 5px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    margin-bottom: 10px;
`
const List = ({ cities, searchList, selectCity }) => {
    const [search, setSearch] = useState('');

    const onFiltering = (e) => {
        setSearch(e.target.value);
    };

    const onCitySelect = (rank) => {
        selectCity(rank);
    };

    useEffect(() => {
        if (search.length > 2) {
            searchList(search);
        }
    }, [search]); // eslint-disable-line

    return (
        <>
            <ListWrapper>
                <SearchInput type="text" value={search} onChange={onFiltering} placeholder="Filter the list"/>
                {cities && cities.length > 0 && cities.map((element) => {
                    return <City key={element.rank} name={element.city} onChoice={onCitySelect.bind(null, element.rank)}/>
                })}
            </ListWrapper>
        </>
    )

};

export default List;

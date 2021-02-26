import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import City from './city';

const ListContainer = styled.div`
    width: 25vw;
    height: calc(100% - 40px);
    padding: 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
`;
const ListWrapper = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
`;
const ListElements = styled.div`
    width: calc(100% - 10px);
    height: calc(100%-20px);
    border-radius: 3px;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;
const SearchInput = styled.input`
    width: calc(100% - 5px);
    height: 30px;
    padding-left: 5px;
    border: 1px solid lightgrey;
    border-radius: 3px;
    margin-bottom: 10px;
`;

const List = ({ cities, searchList, selectCity }) => {
    const [search, setSearch] = useState('');

    const onFiltering = (e) => {
        setSearch(e.target.value);
        console.log('onFilterting in list:', search, e.target.value);
    };

    const onCitySelect = (rank) => {
        selectCity(rank);
    };

    useEffect(() => {
        searchList(search);
    }, [search]); // eslint-disable-line

    return (
        <>
            <ListContainer>
                <SearchInput type="text" value={search} onChange={onFiltering} placeholder="Filter the list"/>
                <ListWrapper>
                    <ListElements>
                        {cities && cities.length > 0 && cities.map((element) => {
                            return <City key={element.rank} name={element.city} onChoice={onCitySelect.bind(null, element.rank)}/>
                        })}
                    </ListElements>
                </ListWrapper>
            </ListContainer>
        </>
    )

};

export default List;

import React, { useEffect, useState } from 'react';
import styled from 'styled-components'

import data from '../data/cities.json';
import City from './city';

const ListWrapper = styled.div`
    width: 20%;
    height: 90%;
    padding: 30px;
    border: 1px solid lightgrey;
    background-color: green;
    border-radius: 3px;
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
const List = () => {
    const [cities, setCities] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [search, setSearch] = useState('');

    const onFiltering = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        setCities(data);
    }, []);

    useEffect(() => {
        if (cities && cities.length > 0) {
            console.log('CITIES:', cities.length);
            const temp = cities.slice(0, 10);
            console.log('list', temp);
            setFilteredList(temp);
        }
    }, [cities]);

    return (
        <>
            <ListWrapper>
                <SearchInput type="text" value={search} onChange={onFiltering} placeholder="Filter the list"/>
                {filteredList && filteredList.length > 0 && filteredList.map((element) => {
                    return <City name={element.city}/>
                })}
            </ListWrapper>
        </>
    )

};

export default List;

// const getData = () => {
//     fetch('./test.json'
//         , {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//     )
//         .then((response) => {
//             console.log('response', response)
//             return response.json();
//         })
//         .then((myJson) => {
//             console.log('myJson', myJson);
//             setCities(myJson)
//         });
// }
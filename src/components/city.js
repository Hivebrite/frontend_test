import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
    font-family: 'Helvetica';
    font-weight: bold;
    font-size: 1rem;

    &:hover {
        background-color: lightblue;
        color: white;
    }
`;

const City = (props) => {

    return (
        <Button onClick={props.onChoice}>
            {props.name}
        </Button>
    )
};

export default City;


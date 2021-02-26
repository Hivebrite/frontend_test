import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 100%;
    height: 60px !important;
    border: 1px solid lightgrey;
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    cursor: pointer;
    font-family: 'Helvetica';
    font-weight: bold;
    font-size: 14px;

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


import * as actionTypes from './types';

export const filterCities = (data) => {
    return {
        type: actionTypes.FILTER_CITIES,
        data,
    }
};

export const selectCity = (value) => {
    return {
        type: actionTypes.SELECT_CITY,
        city: value,
    };
};

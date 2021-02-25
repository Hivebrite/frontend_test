import * as actionTypes from './actions';
import cities from '../data/cities';

const initialState = {
    selectedCity: {},
    cities,
    filteredCities: cities.slice(0, 10),
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.selectCity:
            return {
                ...state,
                selectedCity: state.filteredCities.find((e) => e.city = action.name),
            };
        case actionTypes.filterCities:
            return {
                ...state,
                filteredCities: state.cities.filter((element) => {
                    return element.city.indexOf(action.str) !== 0;
                })
            };
        default:
            return state;
    }
};

export default reducer;

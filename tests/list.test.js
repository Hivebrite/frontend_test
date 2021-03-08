import React from 'react';
import renderer from 'react-test-renderer';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import { ListContainer, ListElements, ListWrapper, SearchInput } from '../src/components/list';

// configure({ adapter: new Adapter()});

describe('Listing and filtering cities', () => {
    it('should have 4 styled components', () => {
        const container = renderer.create(<ListContainer />).toJSON;
        const elements = renderer.create(<ListElements />).toJSON;
        const wrapper = renderer.create(<ListWrapper />).toJSON;
        const searchInput = renderer.create(<SearchInput />).toJSON;
        
        expect(container).toMatchSnapshot();
        expect(elements).toMatchSnapshot();
        expect(wrapper).toMatchSnapshot();
        expect(searchInput).toMatchSnapshot();
    });

    describe('ListElements component', () => {
        const cities = [
            {
                "city": "New York",
                "growth_from_2000_to_2013": "4.8%",
                "latitude": 40.7127837,
                "longitude": -74.0059413,
                "population": "8405837",
                "rank": "1",
                "state": "New York"
            },
            {
                "city": "Los Angeles",
                "growth_from_2000_to_2013": "4.8%",
                "latitude": 34.0522342,
                "longitude": -118.2436849,
                "population": "3884307",
                "rank": "2",
                "state": "California"
            },
            {
                "city": "Chicago",
                "growth_from_2000_to_2013": "-6.1%",
                "latitude": 41.8781136,
                "longitude": -87.6297982,
                "population": "2718782",
                "rank": "3",
                "state": "Illinois"
            }
        ];

        const getTree = (props = {}) => {
            renderer.create(<ListElements {...props} />).toJSON();
        };

        it('should render ListElements with props', () => {
            expect(getTree({ cities })).toMatchSnapshot();
        });
    });
});

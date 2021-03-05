import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

import { ListContainer, ListElements, ListWrapper, SearchInput } from '../src/components/list';

configure({ adapter: new Adapter()});

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
    },
    {
        "city": "Houston",
        "growth_from_2000_to_2013": "11.0%",
        "latitude": 29.7604267,
        "longitude": -95.3698028,
        "population": "2195914",
        "rank": "4",
        "state": "Texas"
    },
    {
        "city": "Philadelphia",
        "growth_from_2000_to_2013": "2.6%",
        "latitude": 39.9525839,
        "longitude": -75.1652215,
        "population": "1553165",
        "rank": "5",
        "state": "Pennsylvania"
    },
    {
        "city": "Phoenix",
        "growth_from_2000_to_2013": "14.0%",
        "latitude": 33.4483771,
        "longitude": -112.0740373,
        "population": "1513367",
        "rank": "6",
        "state": "Arizona"
    },
    {
        "city": "San Antonio",
        "growth_from_2000_to_2013": "21.0%",
        "latitude": 29.4241219,
        "longitude": -98.49362819999999,
        "population": "1409019",
        "rank": "7",
        "state": "Texas"
    },
    {
        "city": "San Diego",
        "growth_from_2000_to_2013": "10.5%",
        "latitude": 32.715738,
        "longitude": -117.1610838,
        "population": "1355896",
        "rank": "8",
        "state": "California"
    },
    {
        "city": "Dallas",
        "growth_from_2000_to_2013": "5.6%",
        "latitude": 32.7766642,
        "longitude": -96.79698789999999,
        "population": "1257676",
        "rank": "9",
        "state": "Texas"
    },
    {
        "city": "San Jose",
        "growth_from_2000_to_2013": "10.5%",
        "latitude": 37.3382082,
        "longitude": -121.8863286,
        "population": "998537",
        "rank": "10",
        "state": "California"
    },
];

describe('Listing and filtering cities', () => {
    it('should have 4 styled components', () => {
        const container = renderer.create(<ListContainer />).toJSON;
        const elements = renderer.create(<ListElements />).toJSON;
        const wrapper = renderer.create(<ListWrapper />).toJSON;
        const searchInput = renderer.create(<SearchInput />).toJSON;
        
        expect(container).toMatchSnapshot();
        expect(elements).toMatchSnapshot();
        expect(wrapper).toMatchSnapshot();
        expect(searchIn).toMatchSnapshot();
        // const onFiltering = jest.fn();
        // const wrapper = shallow(<ListContainer />);

        // const input = wrapper.find(<SearchInput onChange={onFiltering} />)
        //     .simulate('change', { target: { value: 'new' } });
        // expect(wrapper.find(<ListContainer />)).toContain(<SearchInput />);
        // expect(onFiltering).toBeCalledWith('new');
        // expect(wrapper).toMatchSnapshot();
        // expect(wrapper.find(City)).toHaveLength(10);
    });
});

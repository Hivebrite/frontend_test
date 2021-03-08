import React from 'react';
import renderer from 'react-test-renderer';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Wrapper } from '../src/pages/home';
import List from '../src/components/list';
import Map from '../src/components/map';
import City from '../src/components/city';

configure({ adapter: new Adapter() });

describe('Home page', () => {
    it('should have 2 components', () => {
        const tree = renderer.create(
            <Wrapper>
                <List />
                <Map />
            </Wrapper>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    describe('List tests', () => {
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
        const searchList = jest.fn();
        const selectCity = jest.fn();

        it('should render multiple <City /> components in <List>', () => {
            const wrapper = mount(<List cities={cities} searchList={searchList} sekectCity={selectCity} />);
            expect(wrapper.find(City)).to.have.lengthOf(3);
        });
    });
    // describe('Map tests', () => {
    //     it('should render map component', () => {
    //         const wrapper = mount(<Map />);

    //         expect(wrapper)
    //     });
    // });
});

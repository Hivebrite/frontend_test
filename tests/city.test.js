import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

import { Button } from '../src/components/city';

describe('City component', () => {
    it('should render correctly', () => {
        const tree = renderer.create(
            <Button />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
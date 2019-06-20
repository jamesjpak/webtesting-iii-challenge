// Test away
import React from 'react';
import 'jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import "@testing-library/react/cleanup-after-each";
import renderer from 'react-test-renderer';

describe('<Dashboard />', () => {

    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);

        expect(tree.toJSON()).toMatchSnapshot();
    })
})
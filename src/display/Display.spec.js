// Test away!
import React from 'react';
import 'jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Display from './Display';
import "@testing-library/react/cleanup-after-each";

describe('display proper colors', () => {

    it('closed is false, display green-led', () => {
        const display = render(<Display locked={false} closed={false} />)

        display.getByText( 'Unlocked' )
        display.getByText( 'Open' )

        expect(display.getByText('Unlocked').className).toContain('green-led');
        expect(display.getByText('Open').className).toContain('green-led');
    })


    it('closed is true, display red-led', () => {
        const display = render(<Display locked={false} closed={true} />)

        display.getByText( 'Unlocked' )
        display.getByText( 'Closed' )

        expect(display.getByText('Unlocked').className).toContain('green-led');
        expect(display.getByText('Closed').className).toContain('red-led');
    })

    it('closed is true, display red-led', () => {
        const display = render(<Display locked={true} closed={true} />)

        display.getByText( 'Locked' )
        display.getByText( 'Closed' )

        expect(display.getByText('Locked').className).toContain('red-led');
        expect(display.getByText('Closed').className).toContain('red-led');
    })
})

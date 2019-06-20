// Test away!
import React from 'react';
import 'jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Control from './Controls';
import "@testing-library/react/cleanup-after-each";

describe('testing buttons', () => {

    describe('test closed is false, locked is false', () => {
        it('when the door is unlocked and open', () => {
            const control = render(<Control locked={false} closed={false} />)

            control.getByText('Lock Gate')
            control.getByText('Close Gate')

            expect(control.getByText('Lock Gate')).toBeDisabled()
            expect(control.getByText('Close Gate')).not.toBeDisabled()
        })

    })

    describe('test closed is true, locked is false', () => {
        it('when the door is unlocked and closed', () => {
            const control = render(<Control locked={false} closed={true} />)

            control.getByText('Lock Gate')
            control.getByText('Open Gate')

            expect(control.getByText('Lock Gate')).not.toBeDisabled()
            expect(control.getByText('Open Gate')).not.toBeDisabled()
        })
    })

    describe('test closed is true, locked is true', () => {
        it('when the door is locked and closed', () => {
            const control = render(<Control locked={true} closed={true} />)

            control.getByText('Unlock Gate')
            control.getByText('Open Gate')

            expect(control.getByText('Unlock Gate')).not.toBeDisabled()
            expect(control.getByText('Open Gate')).toBeDisabled()
        })
    })

})



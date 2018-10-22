import React from 'react'
import { render } from 'react-testing-library'
import Divider from '../../../components/Layout/Divider'

it('renders Divider properly', () => {
    const { container } = render(<Divider />)

    expect(container.firstChild.classList.contains('js-divider')).toBe(true)
})

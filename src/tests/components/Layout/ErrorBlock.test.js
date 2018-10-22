import React from 'react'
import { render } from 'react-testing-library'
import ErrorBlock from '../../../components/Layout/ErrorBlock'

it('renders ErrorBlock properly', () => {
    const props = {
        errorMessage: 'Some error message'
    }

    const { container } = render(<ErrorBlock {...props} />)

    expect(container.firstChild.classList.contains('js-error-block')).toBe(true)
    expect(container).toHaveTextContent(props.errorMessage)
})

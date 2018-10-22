import React from 'react'
import { render } from 'react-testing-library'
import DescriptionBlock from '../../../components/Layout/DescriptionBlock'

it('renders DescriptionBlock properly', () => {
    const props = {
        description: '<p>Hello world. <a href="#">Go to places.</a></p>'
    }

    const { container } = render(<DescriptionBlock {...props} />)

    expect(
        container.firstChild.classList.contains('js-description-block')
    ).toBe(true)
    expect(container).toContainHTML(props.description)
})

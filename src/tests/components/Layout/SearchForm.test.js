import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import SearchForm from '../../../components/Layout/SearchForm'
import { BUTTON_TITLE } from './../../../utils/constants'

const props = {
    inputError: false,
    inputValue: 'hello',
    onInputChange: jest.fn(),
    onFormSubmit: jest.fn(),
    buttonTitle: BUTTON_TITLE.submit,
    enableFormButton: true
}

it('renders SearchForm properly', () => {
    const { container } = render(<SearchForm {...props} />),
        formInputElement = container.querySelector(
            '.js-search-form__form-input'
        ),
        formSubmitBtnElement = container.querySelector(
            '.js-search-form__form-btn-submit'
        )

    expect(container.firstChild).toHaveClass('js-search-form')
    expect(formInputElement).toHaveAttribute('value', props.inputValue)
    expect(formSubmitBtnElement).not.toHaveAttribute('disabled')
    expect(formSubmitBtnElement).toHaveTextContent(BUTTON_TITLE.submit)
})

it('adds error class if inputError is `true`', () => {
    const { container, rerender } = render(<SearchForm {...props} />),
        formGroupElement = container.querySelector(
            '.js-search-form__form-form-group'
        )

    expect(formGroupElement).not.toHaveClass('has-error')

    props.inputError = true

    rerender(<SearchForm {...props} />)

    expect(formGroupElement).toHaveClass('has-error')
})

it('fires onInputChange properly', () => {
    const { container, rerender } = render(<SearchForm {...props} />),
        formInputElement = container.querySelector(
            '.js-search-form__form-input'
        ),
        onInputChange = props.onInputChange,
        newInputValue = 'hello world'

    expect(formInputElement).toHaveAttribute('value', props.inputValue)

    fireEvent.change(formInputElement, {
        target: {
            value: newInputValue
        }
    })

    expect(onInputChange).toBeCalledTimes(1)

    // value is controlled, hence we need to update the props

    props.inputValue = newInputValue

    rerender(<SearchForm {...props} />)

    expect(formInputElement).toHaveAttribute('value', newInputValue)
})

it('disabled form submit button properly', () => {
    const { container, rerender } = render(<SearchForm {...props} />),
        formSubmitBtnElement = container.querySelector(
            '.js-search-form__form-btn-submit'
        )

    expect(formSubmitBtnElement).not.toHaveAttribute('disabled')

    props.enableFormButton = false

    rerender(<SearchForm {...props} />)

    expect(formSubmitBtnElement).toHaveAttribute('disabled')
})

it('changes form submit button title properly', () => {
    const { container, rerender } = render(<SearchForm {...props} />),
        formSubmitBtnElement = container.querySelector(
            '.js-search-form__form-btn-submit'
        )

    expect(formSubmitBtnElement).toHaveTextContent(BUTTON_TITLE.submit)

    props.buttonTitle = BUTTON_TITLE.loading

    rerender(<SearchForm {...props} />)

    expect(formSubmitBtnElement).toHaveTextContent(BUTTON_TITLE.loading)
})

it('fires onFormSubmit properly', () => {
    const { container } = render(<SearchForm {...props} />),
        formSubmitBtnElement = container.querySelector(
            '.js-search-form__form-btn-submit'
        ),
        onFormSubmit = props.onFormSubmit

    fireEvent.submit(formSubmitBtnElement)

    expect(onFormSubmit).toBeCalledTimes(1)
})

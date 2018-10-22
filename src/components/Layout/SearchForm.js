import React from 'react'
import PropTypes from 'prop-types'

function SearchForm(props) {
    const {
        inputError,
        inputValue,
        onInputChange,
        onFormSubmit,
        buttonTitle,
        enableFormButton
    } = props
    return (
        <form
            className="form-horizontal js-search-form"
            onSubmit={onFormSubmit}
        >
            <div
                className={`form-group js-search-form__form-form-group ${
                    inputError ? 'has-error' : ''
                }`}
            >
                <input
                    className="form-input js-search-form__form-input"
                    type="text"
                    onChange={onInputChange}
                    value={inputValue}
                    placeholder="https://soundcloud.com/user/stream"
                />
                <button
                    disabled={!enableFormButton}
                    type="submit"
                    className="btn btn-primary full-width mt-2 js-search-form__form-btn-submit"
                >
                    {buttonTitle}
                </button>
            </div>
        </form>
    )
}

SearchForm.propTypes = {
    inputError: PropTypes.bool.isRequired,
    inputValue: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
    enableFormButton: PropTypes.bool.isRequired,
    buttonTitle: PropTypes.string.isRequired
}

export default SearchForm

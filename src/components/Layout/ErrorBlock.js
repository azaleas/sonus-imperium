import React from 'react'
import PropTypes from 'prop-types'

function ErrorBlock(props) {
    const { errorMessage } = props
    return (
        <div className="toast toast-error text-center js-error-block">
            {errorMessage}
        </div>
    )
}

ErrorBlock.propTypes = {
    errorMessage: PropTypes.string.isRequired
}

export default ErrorBlock

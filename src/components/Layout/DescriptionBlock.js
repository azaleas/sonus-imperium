import React from 'react'
import PropTypes from 'prop-types'

function DescriptionBlock(props) {
    const { description } = props
    return (
        <div className="card-footer description-block js-description-block">
            <p
                className="word-break"
                dangerouslySetInnerHTML={{
                    __html: description.replace(/\n/g, '<br />')
                }}
            />
        </div>
    )
}

DescriptionBlock.propTypes = {
    description: PropTypes.string.isRequired
}

export default DescriptionBlock

import React from 'react'
import PropTypes from 'prop-types'

function StreamInformationBlock(props) {
    const { authorUrl, authorName, title, thumbnailUrl, soundCloudUrl } = props
    return (
        <React.Fragment>
            <div className="card-header">
                <div className="card-title h5">
                    <a
                        href={authorUrl}
                        target="_blank"
                        className="js-stream-information-block__author"
                        rel="noopener noreferrer"
                    >
                        {authorName}
                    </a>
                </div>
                <div className="card-subtitle text-gray js-stream-information-block__stream-title">
                    {title} ->{' '}
                    <a
                        href={soundCloudUrl}
                        target="_blank"
                        className="js-stream-information-block__stream-link"
                        rel="noopener noreferrer"
                    >
                        #SoundCloud Link
                    </a>
                </div>
            </div>
            <div className="card-image">
                <img
                    src={thumbnailUrl}
                    className="streamcast-thumbnail js-stream-information-block__streamcast-thumbnail"
                    alt="Streamcast Thumbnail"
                />
            </div>
        </React.Fragment>
    )
}

StreamInformationBlock.propTypes = {
    authorUrl: PropTypes.string.isRequired,
    authorName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    soundCloudUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired
}

export default StreamInformationBlock

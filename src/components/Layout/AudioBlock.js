import React from 'react'
import PropTypes from 'prop-types'

function AudioBlock(props) {
    const { src, playbackRate, speedIncrease, speedDecrease } = props
    return (
        <div className="card-body js-audio-block">
            <audio
                id="audioPlayer"
                className="p-centered mt-2 js-audio-player"
                controls
                controlsList="nodownload"
                onContextMenu={e => {
                    e.preventDefault()
                }}
            >
                <source
                    src={src}
                    type="audio/mpeg"
                    className="js-audio-player__source"
                />
            </audio>
            <br />
            <div className="py-2 columns">
                <div className="btn-group col-mx-auto">
                    <button
                        onClick={speedDecrease}
                        className="btn btn-error btn btn-action js-audio-player__speed-decrease"
                    >
                        -
                    </button>
                    <div className="divider-vert" />
                    <figure
                        className="avatar avatar-md bg-success playback-rate js-audio-player__playback-rate"
                        data-initial={playbackRate}
                    />
                    <div className="divider-vert" />
                    <button
                        onClick={speedIncrease}
                        className="btn btn-primary btn btn-action js-audio-player__speed-increase"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

AudioBlock.propTypes = {
    src: PropTypes.string.isRequired,
    playbackRate: PropTypes.number.isRequired,
    speedIncrease: PropTypes.func.isRequired,
    speedDecrease: PropTypes.func.isRequired
}

export default AudioBlock

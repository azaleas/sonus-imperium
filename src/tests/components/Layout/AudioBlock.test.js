import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import AudioBlock from '../../../components/Layout/AudioBlock'

const props = {
    src: 'https://soundcloud.com/some-author/some-stream.mp3',
    playbackRate: 1,
    speedIncrease: jest.fn(),
    speedDecrease: jest.fn()
}

it('renders AudioBlock properly', () => {
    const { container } = render(<AudioBlock {...props} />),
        audioPlayerElement = container.querySelector('.js-audio-block')

    expect(container.firstChild).toHaveClass('js-audio-block')

    expect(
        audioPlayerElement.querySelector('.js-audio-player__source')
    ).toHaveAttribute('src', props.src)
})

it('fires speedIncreas and speedDecrease to change playbackRate', () => {
    const { container } = render(<AudioBlock {...props} />),
        speedIncreaseButton = container.querySelector(
            '.js-audio-player__speed-increase'
        ),
        speedDecreaseButton = container.querySelector(
            '.js-audio-player__speed-decrease'
        ),
        playBackRateElement = container.querySelector(
            '.js-audio-player__playback-rate'
        )

    expect(playBackRateElement).toHaveAttribute(
        'data-initial',
        props.playbackRate.toString()
    )

    fireEvent.click(
        speedIncreaseButton,
        (playBackRateElement.dataset.initial = 1.25)
    )

    expect(props.speedIncrease).toHaveBeenCalledTimes(1)
    expect(playBackRateElement).toHaveAttribute('data-initial', '1.25')

    fireEvent.click(
        speedDecreaseButton,
        (playBackRateElement.dataset.initial = 0.75)
    )

    expect(props.speedDecrease).toHaveBeenCalledTimes(1)
    expect(playBackRateElement).toHaveAttribute('data-initial', '0.75')
})

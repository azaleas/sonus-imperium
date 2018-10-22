import React from 'react'
import { render } from 'react-testing-library'
import StreamInformationBlock from '../../../components/Layout/StreamInformationBlock'

it('renders StreamInformationBlock properly', () => {
    const props = {
        authorUrl: 'https://soundcloud.com/some-author',
        authorName: 'Some soundcloud author',
        title: 'Some soundcloud stream title',
        soundCloudUrl: 'https://soundcloud.com/some-author/some-stream',
        thumbnailUrl: 'https://soundcloud.com/thumbnail.jpg'
    }

    const { container } = render(<StreamInformationBlock {...props} />),
        authorElement = container.querySelector(
            '.js-stream-information-block__author'
        ),
        titleElement = container.querySelector(
            '.js-stream-information-block__stream-title'
        ),
        streamLinkElement = container.querySelector(
            '.js-stream-information-block__stream-link'
        ),
        thumbnailElement = container.querySelector(
            '.js-stream-information-block__streamcast-thumbnail'
        )

    expect(authorElement).toHaveTextContent(props.authorName)
    expect(authorElement).toHaveAttribute('href', props.authorUrl)

    expect(titleElement).toHaveTextContent(`${props.title} -> #SoundCloud Link`)
    expect(streamLinkElement).toHaveAttribute('href', props.soundCloudUrl)

    expect(thumbnailElement).toHaveAttribute('src', props.thumbnailUrl)
})

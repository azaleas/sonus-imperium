import axios from 'axios'
import { fetchGeneralStreamData, fetchStreamSrc } from '../../utils/fetchData'

const streamData = {
    author_url: 'https://soundcloud.com/author',
    author_name: 'authorName',
    thumbnail_url: 'https://soundcloud.com/author/thumbnail.jpg',
    title: 'Episode 1',
    description: 'Episode 1 Description',
    html: '<iframe src="tracks%12TRACK931&></iframe>'
}

const streamSrcData = {
    http_mp3_128_url: 'https://cf-media.sndcdn.com/somecode1314qweqweqw.128.mp3'
}

jest.mock('axios')

it('runs fetchGeneralStreamData properly', async () => {
    axios.post.mockResolvedValue(streamData)

    const response = await fetchGeneralStreamData(
        'https://soundcloud.com/author/episode'
    )
    expect(response).toEqual(streamData)
})

it('runs fetchStreamSrc properly', async () => {
    axios.get.mockResolvedValue(streamSrcData)

    const response = await fetchStreamSrc(
        'https://soundcloud.com/author/episode/source'
    )
    expect(response).toEqual(streamSrcData)
})

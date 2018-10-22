import getStreamData from '../../utils/getStreamData'
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

const responseData = {
    authorName: 'authorName',
    authorUrl: 'https://soundcloud.com/author',
    description: 'Episode 1 Description',
    src: 'https://cf-media.sndcdn.com/somecode1314qweqweqw.128.mp3',
    thumbnailUrl: 'https://soundcloud.com/author/thumbnail.jpg',
    title: 'Episode 1'
}

jest.mock('../../utils/fetchData')

it('gets the data properly', async () => {
    fetchGeneralStreamData.mockImplementationOnce(() => {
        return {
            data: streamData
        }
    })
    fetchStreamSrc.mockImplementationOnce(() => {
        return {
            data: streamSrcData
        }
    })

    const data = await getStreamData('https://soundcloud.com/author/episode')
    expect(data).toEqual(responseData)
})

it('returns error', async () => {
    fetchGeneralStreamData.mockImplementationOnce(() =>
        Promise.reject('Failed fetchGeneralStreamData')
    )

    try {
        await getStreamData('https://soundcloud.com/author/episode')
    } catch (error) {
        expect(error).toMatch('Failed fetchGeneralStreamData')
    }

    fetchGeneralStreamData.mockImplementationOnce(() => {
        return {
            data: streamData
        }
    })

    fetchStreamSrc.mockImplementationOnce(() =>
        Promise.reject('Failed fetchStreamSrc')
    )

    try {
        await getStreamData('https://soundcloud.com/author/episode')
    } catch (error) {
        expect(error).toMatch('Failed fetchStreamSrc')
    }
})

import { CLIENT_ID, CORS_ANYWHERE } from './constants'

import { fetchGeneralStreamData, fetchStreamSrc } from './fetchData'

export default async function getStreamData(soundCloudUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const generalStreamData = await fetchGeneralStreamData(
                    soundCloudUrl
                ),
                {
                    author_url: authorUrl,
                    author_name: authorName,
                    thumbnail_url: thumbnailUrl,
                    title,
                    description,
                    html
                } = generalStreamData.data,
                trackId = decodeURIComponent(
                    html.match(/tracks%\d.*&/gm)[0]
                ).match(/\d.*\d/gm)[0],
                streamUrl = `${CORS_ANYWHERE}/https://api.soundcloud.com/i1/tracks/${trackId}/streams?client_id=${CLIENT_ID}`,
                streamSrcData = await fetchStreamSrc(streamUrl),
                src = streamSrcData.data.http_mp3_128_url

            resolve({
                authorUrl,
                authorName,
                thumbnailUrl,
                title,
                description,
                src
            })
        } catch (error) {
            reject(error)
        }
    })
}

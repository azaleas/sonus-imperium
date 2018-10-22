import axios from 'axios'
import { SOUNDCLOUD_OEMBED } from './constants'

export async function fetchGeneralStreamData(soundCloudUrl) {
    return axios.post(SOUNDCLOUD_OEMBED, {
        format: 'json',
        url: soundCloudUrl
    })
}

export async function fetchStreamSrc(streamUrl) {
    return axios.get(streamUrl, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
}

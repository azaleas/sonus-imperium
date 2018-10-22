export const SOUND_CLOUD_REGEXP = /^https:\/\/soundcloud.com\/.+\/.+/gi

export const BUTTON_TITLE = {
    loading: 'Loading. Please wait...',
    submit: 'Submit'
}

export const CLIENT_ID = process.env.REACT_APP_SOUND_CLOUD_CLIENT_ID

export const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com'

export const SOUNDCLOUD_OEMBED = 'https://soundcloud.com/oembed'

export const stateMachineStatesEnum = Object.freeze({
    READY_FOR_SEARCH: {
        id: 'ready_for_search'
    },
    INPUT_ERROR: {
        id: 'input_error'
    },
    SEARCHING: {
        id: 'searching'
    },
    SEARCH_ERROR: {
        id: 'search_error'
    },
    AUDIO_STREAM: {
        id: 'audio_stream'
    }
})

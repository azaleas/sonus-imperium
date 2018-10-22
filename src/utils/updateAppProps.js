import { BUTTON_TITLE, stateMachineStatesEnum } from './constants'

const updateAppProps = (appState, action) => {
    switch (action.machineState) {
        case stateMachineStatesEnum.INPUT_ERROR.id:
            return {
                ...appState,
                inputError: true,
                inputValue: action.data,
                errorMessage: 'Please fill the input field properly'
            }

        case stateMachineStatesEnum.READY_FOR_SEARCH.id:
            return {
                ...appState,
                inputError: false,
                errorMessage: '',
                inputValue: action.data
            }

        case stateMachineStatesEnum.SEARCHING.id:
            return {
                ...appState,
                inputError: false,
                buttonTitle: BUTTON_TITLE.loading,
                errorMessage: '',
                enableFormButton: false
            }

        case stateMachineStatesEnum.SEARCH_ERROR.id:
            return {
                ...appState,
                buttonTitle: BUTTON_TITLE.submit,
                enableFormButton: true,
                errorMessage: action.data
            }

        case stateMachineStatesEnum.AUDIO_STREAM.id:
            return {
                ...appState,
                playbackRate: 1,
                buttonTitle: BUTTON_TITLE.submit,
                audioLoaded: true,
                enableFormButton: true,
                errorMessage: '',
                streamInfo: action.data,
                soundCloudUrl: appState.inputValue
            }

        default:
            return appState
    }
}
export default updateAppProps

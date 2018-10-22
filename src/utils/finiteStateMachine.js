import updateAppProps from './updateAppProps'
import { stateMachineStatesEnum } from './constants'

const FSM = {
    state: Object.freeze({
        [stateMachineStatesEnum.READY_FOR_SEARCH.id]: {
            INPUT_FAILURE: stateMachineStatesEnum.INPUT_ERROR.id,
            INPUT_SUCCESS: stateMachineStatesEnum.READY_FOR_SEARCH.id,
            SEARCH: stateMachineStatesEnum.SEARCHING.id
        },
        [stateMachineStatesEnum.INPUT_ERROR.id]: {
            INPUT_FAILURE: stateMachineStatesEnum.INPUT_ERROR.id,
            INPUT_SUCCESS: stateMachineStatesEnum.READY_FOR_SEARCH.id
        },
        [stateMachineStatesEnum.SEARCHING.id]: {
            SEARCH_FAILURE: stateMachineStatesEnum.SEARCH_ERROR.id,
            SEARCH_SUCCESS: stateMachineStatesEnum.AUDIO_STREAM.id
        },
        [stateMachineStatesEnum.SEARCH_ERROR.id]: {
            SEARCH: stateMachineStatesEnum.SEARCHING.id,
            INPUT_FAILURE: stateMachineStatesEnum.INPUT_ERROR.id,
            INPUT_SUCCESS: stateMachineStatesEnum.READY_FOR_SEARCH.id
        },
        [stateMachineStatesEnum.AUDIO_STREAM.id]: {
            INPUT_SUCCESS: stateMachineStatesEnum.READY_FOR_SEARCH.id,
            INPUT_FAILURE: stateMachineStatesEnum.INPUT_ERROR.id,
            SEARCH: stateMachineStatesEnum.SEARCHING.id
        }
    }),

    currentState: [stateMachineStatesEnum.INPUT_ERROR.id],

    transition(appState, action) {
        const { state, currentState } = this,
            nextState = state[currentState][action.type]

        if (nextState) {
            this.currentState = nextState
            return updateAppProps(appState, {
                machineState: nextState,
                data: action.data
            })
        }
    },

    handleInputSuccess(appState, props) {
        return this.transition(appState, {
            type: 'INPUT_SUCCESS',
            data: props
        })
    },

    handleInputFailure(appState, props) {
        return this.transition(appState, {
            type: 'INPUT_FAILURE',
            data: props
        })
    },

    handleSearch(appState) {
        return this.transition(appState, {
            type: 'SEARCH'
        })
    },

    handleSearchSuccess(appState, props) {
        return this.transition(appState, {
            type: 'SEARCH_SUCCESS',
            data: props
        })
    },

    handleSearchFailure(appState, props) {
        return this.transition(appState, {
            type: 'SEARCH_FAILURE',
            data: props
        })
    }
}

export default FSM

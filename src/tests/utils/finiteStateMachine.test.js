import FSM from '../../utils/finiteStateMachine'
import { stateMachineStatesEnum } from '../../utils/constants'

const appState = {},
    appProps = {}

it('runs FSM properly', () => {
    FSM.currentState = stateMachineStatesEnum.READY_FOR_SEARCH.id

    FSM.handleInputFailure(appState, appProps)

    expect(FSM.currentState).toBe(stateMachineStatesEnum.INPUT_ERROR.id)

    FSM.handleInputSuccess(appState, appProps)

    expect(FSM.currentState).toBe(stateMachineStatesEnum.READY_FOR_SEARCH.id)

    FSM.handleSearch(appState)

    expect(FSM.currentState).toBe(stateMachineStatesEnum.SEARCHING.id)

    FSM.handleSearchFailure(appState)

    expect(FSM.currentState).toBe(stateMachineStatesEnum.SEARCH_ERROR.id)

    FSM.handleSearch(appState)

    FSM.handleSearchSuccess(appState)

    expect(FSM.currentState).toBe(stateMachineStatesEnum.AUDIO_STREAM.id)
})

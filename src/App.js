import React, { Component } from 'react'

import getStreamData from './utils/getStreamData'
import updateAudioPlayBackRate from './utils/updateAudioPlayBackRate'

import { BUTTON_TITLE, SOUND_CLOUD_REGEXP } from './utils/constants'
import FSM from './utils/finiteStateMachine'

import './App.css'

import SearchForm from './components/Layout/SearchForm'
import ErrorBlock from './components/Layout/ErrorBlock'
import StreamInformationBlock from './components/Layout/StreamInformationBlock'
import AudioBlock from './components/Layout/AudioBlock'
import DescriptionBlock from './components/Layout/DescriptionBlock'

import Divider from './components/Layout/Divider'

class App extends Component {
    state = {
        inputError: true,
        inputValue: '',
        buttonTitle: BUTTON_TITLE.submit,
        enableFormButton: true,
        errorMessage: '',
        audioLoaded: false,
        playbackRate: 1,
        soundCloudUrl: '',
        networkErrorMessage: '',
        streamInfo: {}
    }

    speedIncrease = () => {
        this._speedControl('increase')
    }

    speedDecrease = () => {
        this._speedControl('decrease')
    }

    onInputChange = e => {
        const { value: inputValue } = e.target

        // REGEXP.test() keeps track of last index when a match is found, resulting in buggy behavior.
        // Hence, replaced with string.match(REGEXP)
        if (inputValue.match(SOUND_CLOUD_REGEXP)) {
            this.setState(FSM.handleInputSuccess(this.state, inputValue))
        } else {
            this.setState(FSM.handleInputFailure(this.state, inputValue))
        }
    }

    onFormSubmit = e => {
        e.preventDefault()

        if (!this.state.inputError) {
            this.setState(FSM.handleSearch(this.state))
            this._getStream(this.state.inputValue)
        } else {
            this.setState(FSM.handleInputFailure(this.state))
        }
    }

    _getStream = async inputValue => {
        const audioElement = document.getElementById('audioPlayer')

        await getStreamData(inputValue)
            .then(streamInfo => {
                this.setState(FSM.handleSearchSuccess(this.state, streamInfo))

                if (audioElement) {
                    audioElement.load()
                }
            })
            .catch(error => {
                this.setState(
                    FSM.handleSearchFailure(this.state, error.message)
                )
            })
    }

    _speedControl = seekOption => {
        const audioElement = document.getElementById('audioPlayer'),
            { playbackRate: currentPlayBackRate } = this.state,
            newPlayBackRate = updateAudioPlayBackRate({
                seekOption,
                currentPlayBackRate
            })

        this.setState({
            playbackRate: newPlayBackRate
        })

        audioElement.playbackRate = newPlayBackRate
    }

    render() {
        const {
                inputError,
                inputValue,
                streamInfo,
                audioLoaded,
                playbackRate,
                soundCloudUrl,
                errorMessage,
                buttonTitle,
                enableFormButton
            } = this.state,
            {
                authorUrl,
                authorName,
                title,
                description,
                thumbnailUrl
            } = streamInfo
        return (
            <div className="container grid-sm container--v-centered">
                <div className="p-centered">
                    <SearchForm
                        inputError={inputError}
                        inputValue={inputValue}
                        onInputChange={this.onInputChange}
                        onFormSubmit={this.onFormSubmit}
                        buttonTitle={buttonTitle}
                        enableFormButton={enableFormButton}
                    />
                    {errorMessage ? (
                        <ErrorBlock errorMessage={errorMessage} />
                    ) : null}
                    {audioLoaded ? (
                        <React.Fragment>
                            <div className="card">
                                <StreamInformationBlock
                                    authorUrl={authorUrl}
                                    authorName={authorName}
                                    title={title}
                                    soundCloudUrl={soundCloudUrl}
                                    thumbnailUrl={thumbnailUrl}
                                />
                                <AudioBlock
                                    src={streamInfo.src}
                                    playbackRate={playbackRate}
                                    speedIncrease={this.speedIncrease}
                                    speedDecrease={this.speedDecrease}
                                />
                                <Divider />
                                <DescriptionBlock description={description} />
                            </div>
                        </React.Fragment>
                    ) : null}
                </div>
            </div>
        )
    }
}

export default App

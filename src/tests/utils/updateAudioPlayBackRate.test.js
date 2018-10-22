import updateAudioPlayBackRate from './../../utils/updateAudioPlayBackRate'

it('updates the playback rate properly', () => {
    expect(
        updateAudioPlayBackRate({
            seekOption: 'increase',
            currentPlayBackRate: 1
        })
    ).toBe(1.25)

    expect(
        updateAudioPlayBackRate({
            seekOption: 'decrease',
            currentPlayBackRate: 1
        })
    ).toBe(0.75)

    expect(
        updateAudioPlayBackRate({
            seekOption: 'increase',
            currentPlayBackRate: 2.5
        })
    ).toBe(2.5)

    expect(
        updateAudioPlayBackRate({
            seekOption: 'increase',
            currentPlayBackRate: 5
        })
    ).toBe(2.5)

    expect(
        updateAudioPlayBackRate({
            seekOption: 'decrease',
            currentPlayBackRate: 0.1
        })
    ).toBe(0.5)
})

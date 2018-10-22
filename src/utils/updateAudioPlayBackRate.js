export default function updateAudioPlayBackRate({
    seekOption = 'increase',
    currentPlayBackRate = 1
}) {
    const MAX_RATE = 2.5,
        MIN_RATE = 0.5

    let newPlayBackRate = currentPlayBackRate

    if (seekOption === 'increase') {
        let newIncreasedPlayback = currentPlayBackRate + 0.25
        newPlayBackRate =
            newIncreasedPlayback <= MAX_RATE ? newIncreasedPlayback : MAX_RATE
    } else if (seekOption === 'decrease') {
        let newDecreasedPlayback = currentPlayBackRate - 0.25
        newPlayBackRate =
            newDecreasedPlayback >= MIN_RATE ? newDecreasedPlayback : MIN_RATE
    }

    return newPlayBackRate
}

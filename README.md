# sonus imperium

Listen to soundcloud streams with adjustable speed controls.

## Demo

[Demo](https://sonus_imperium.surge.sh/) - Hosted on surge.sh. Among the tested browsers, Firefox has the best audio player with default volume controls enabled.

## How to use

1. Copy/paste soundcloud url (ex: `https://soundcloud.com/rodneyponcedeleon/charles-bukowski-the-mind-go-all-the-way`)
2. Hit submit
3. Once stream is loaded, hit play
4. Hit `+` or `-` buttons to control the speed

Playback speed can be adjusted as low as **0.5** and as high as **2.5**.

## Tools used

1. [Web Audio API](https://developer.mozilla.org/ru/docs/Web/API/Web_Audio_API)
2. [Create React App](https://github.com/facebook/create-react-app)
3. [Spectre CSS](https://picturepan2.github.io/spectre/)
4. [Node](https://nodejs.org/en/) v10.12.0 or higher LTS version
5. [Yarn](https://yarnpkg.com/lang/en/) v1.10.1 or higher stable version

## How to run

1. You will need to get SOUND_CLOUD_CLIENT_ID (You can try [stackoverflow](https://stackoverflow.com/questions/40992480/getting-a-soundcloud-api-client-id))
2. Duplicate .env.dist as .env file in your root directory
3. Add SOUND_CLOUD_CLIENT_ID as REACT_APP_SOUND_CLOUD_CLIENT_ID
4. Make sure to have node & yarn installed
5. Run yarn install in root directory
6. Run yarn start to run the server
7. Run yarn test to run tests
8. Run yarn build to build the assets

## Tests

All tests are in src/tests folder.

## What can be improved

1. Due to usage of default browser player, some browsers won't show the volume controller. This can be improved with custom volume buttons and Web Audio API
2. Spectre CSS is relatively lightweight (~13 kb gzipped). This can be reduced even more by ejecting create-react-app and using purgecss

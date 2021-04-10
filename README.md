# nodecg-lastfm-bundle

This is a configurable bundle for rendering a live view for whatever you or any other Last.fm user is listening to at the moment.

## Requirements
- [NodeCG v1.x](https://github.com/nodecg/nodecg/releases)
- [A valid Last.fm API Key](https://www.last.fm/api/authentication)

## Installation
1. Install NodeCG
2. Initialize a NodeCG directory or use an existing one
3. run `nodecg install https://github.com/ygid/nodecg-lastfm-bundle/`
4. Run the nodecg server: `node index.js` (or `nodecg start` if you have [`nodecg-cli`](https://github.com/nodecg/nodecg-cli) installed) from the `nodecg` root directory.

## Setup your configuration
As this is NodeCG, you will use the user interface to configure everything you need.
Just access your NodeCG server (defaults to localhost:9090) and save your API Key and the last.fm user you want to retrieve data from.
You can use the NodeCG asset manager to upload your default album image and default background picture, or just use or hide the default ones

## Possible future features
- Color configuration
- Font selector and styles
- Custom text for each row (now defaults to Artist, Song, Album)
- Effects and animations

## More bundles
I intend on making more bundles and tools for streamers, you can check out my other repositories. 
More will pop out sooner or later

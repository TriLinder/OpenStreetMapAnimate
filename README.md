# OpenStreetMap Animate

OpenStreetMap Animate is a Svelte web app that plays back multiple users' GPX tracks on a map, synced to their [OpenStreetMap](https://www.openstreetmap.org/) edits in a video-style format. It's perfect for reviewing an edit session or visualizing a competition between users editing with [StreetComplete](https://streetcomplete.app/).

User edits are loaded straight from the OpenStreetMap API. No backend necessary.

## Demo video

https://github.com/user-attachments/assets/060ef78a-361f-45fd-8855-57e30a6bbf43

## Installation and basic usage

### Installation
Prerequisites: Node.js and knowledge of basic npm usage

1. Clone the repository or [download it as a zip](https://github.com/TriLinder/OpenStreetMapAnimate/archive/refs/heads/main.zip)
2. Install the required Node packages by running `npm install` in the directory

### Setting a Mapbox token

> [!NOTE]
> This project uses Mapbox for map rendering. A free Mapbox account is fully sufficient for development and regular personal usage, but Mapbox enforces their usage limits.


1. Register an account on [Mapbox](https://console.mapbox.com/), which is used for the map
2. Under Admin -> Tokens, create a token (leave the default values)
3. Copy the created token (a long string of semi-random letters starting with `pk.`)
4. Return to the OpenStreetMapAnimate directory, and open the `src/config.ts` file
5. Replace the `[Please set your Mapbox.com access token here]` with your token and save the file

### Running
You can either run the app straight away using `npm run dev`, or you can build it first using `npm run build` and then run the output in your preferred manner.

### Usage
Navigate to the website. If you ran the app using `npm run dev`, the URL should be displayed in the terminal. If everything worked correctly, you should now see a world map.

Continue by adding a user by clicking on the first button in the bottom-right corner of the screen. You will be guided through the simple process. To view the user's editing session on the map, you will require their GPX file (a location recording) of the session. If you don't already have a preferred app for doing this, I recommend using [GPSLogger](https://gpslogger.app/) set to a high logging interval. You will be additionally asked to input their OpenStreetMap username for the account on which the map edits were submitted.

Congratulations! If everything worked out, you should now be able to replay the session with video playback controls. See the demo video above for how that should look like. You can also add multiple users, which is perfect for visualizing a competition between multiple people.
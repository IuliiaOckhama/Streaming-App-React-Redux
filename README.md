This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
***

Pet project, developed with:
- React
- Redux
- Redux-thunk
- Redux-form
- JSONPlaceholder API && RTMP server (Node Media Server) on backend

## How to run 
***
To run this application, you should run with
###### `yarn start`
Also you should start the **JSON server** and **RTMP Server.**

To stream videos, you should **install OBS** and set this settings in the OBS settings:
Stream Type : Custom Streaming Server
URL : rtmp://localhost/live
Stream key : STREAM_ID

## Features
**
- OAuth authentification
- Creating, editing, deliting streams
- Live streaming with OBS

## Future fetures ( // TODO )
**
- Add stream categories
- Add more ways to authentificate users
- Add users profiles
- Add covers to streams
- Implement live chat under each stream
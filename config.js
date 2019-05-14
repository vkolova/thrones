import Reactotron from 'reactotron-react-native';

const ip = '192.168.1.102';

if (__DEV__) {
    Reactotron
        .configure({ host: ip }) // controls connection & communication settings
        .useReactNative() // add all built-in react native plugins
        .connect() // let's connect!
}
  

// const SERVER_URL = __DEV__ ? `http://${ip}:8001` : `https://thrones-tu.herokuapp.com`;
// const HOST = __DEV__ ? `${ip}:8001` : `thrones-tu.herokuapp.com`;
// const SOCKET_SCHEME = __DEV__ ? 'ws://' : 'wss://'

const SERVER_URL = `http://${ip}:8001`;
const HOST = `${ip}:8001`
const SOCKET_SCHEME = 'ws://'

// const SERVER_URL = `https://thrones-tu.herokuapp.com`;
// const HOST = `thrones-tu.herokuapp.com`;
// const SOCKET_SCHEME = 'wss://'

export {
    SERVER_URL,
    HOST,
    SOCKET_SCHEME
};
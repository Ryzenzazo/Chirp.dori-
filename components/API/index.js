
import {
    NativeEventEmitter,
    NativeModules
} from 'react-native';

const ChirpConnect = NativeModules.ChirpConnect;
const ChirpConnectEmitter = new NativeEventEmitter(ChirpConnect);

const key = 'FEd0F35aAd429d7AAaeDBd059';
const secret = 'b5E7739E9B1BE8daF274bF9E36f987Cd8dFE580C70E4458fF4';


ChirpConnect.init(key, secret);
Promise.resolve(ChirpConnect.setConfigFromNetwork()).then( () => {
    ChirpConnect.start();
});
export {ChirpConnect, ChirpConnectEmitter}

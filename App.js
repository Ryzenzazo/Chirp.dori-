import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';


const ChirpConnect = NativeModules.ChirpConnect;
const ChirpConnectEmitter = new NativeEventEmitter(ChirpConnect);

const key = 'C173cF3eBc7A9d42bFcC6014f';
const secret = '9947E2Eb8622094fD0AfbCEEB23c7140B72E57DF4623c2b269';






type Props = {};
export default class App extends Component<Props> {


  constructor(props) {
    super(props);
    this.state = {
      'data': '-----------'
    }
  }
  
  componentDidMount(){
    this.onReceived = ChirpConnectEmitter.addListener(
      'onReceived',
      async(event) => {
        if (event.data) {
          this.setState({ data: event.data});
        }
      }
    )

    this.onError = ChirpConnectEmitter.addListener(
      'onError', async(event) => { console.warn(event.message) }
    )

    ChirpConnect.init(key,secret);
    //await ChirpConnect.setConfigFromNetwork();
    ChirpConnect.start();
  }

  componentWillUnmount() {
    this.onReceived.remove();
    this.onError.remove();
  }

  componentWillUnmount() {
    this.onReceived.remove();
    this.onError.remove();
  }

  onPress() {
    ChirpConnect.send([0,1,2,3,4]);
  }




  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Chirp.dori!!</Text>      
        <Text style={styles.instructions}>{this.state.data}</Text>  
        
         
       
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    padding: 10,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

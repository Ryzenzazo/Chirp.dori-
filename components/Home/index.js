import React, { Component } from 'react';
import Permissions from 'react-native-permissions';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Subheader } from 'react-native-material-ui';
import {
  NativeEventEmitter,
  NativeModules
} from 'react-native';

import {ChirpConnectEmitter, ChirpConnect} from "../API";



export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.state = {
      initialised: false,
      sosList: [],
      lat: undefined,
      long: undefined,
    }
  }

  async componentDidMount() {
    const {geolocation} = navigator;
    geolocation.getCurrentPosition((pos) => {
      this.setState({
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      });
    }); 
    const response = await Permissions.check('microphone')
    if (response !== 'authorized') {
      await Permissions.request('microphone')
    }

    this.onReceived = ChirpConnectEmitter.addListener('onReceived',(event) => {     
      if (event.data) {
        this.setState((prevState) => {return {sosList: prevState.sosList.concat(event.data)}});
      }
    });

    this.onError = ChirpConnectEmitter.addListener('onError', (event) => { 
      console.warn(event.message) 
    });
  }

  componentWillUnmount() {
    this.onStateChanged.remove();
    this.onReceived.remove();
    this.onError.remove();
  }

  onPress(){
    const {lat, long} = this.state;
    const message = `SOS/${lat}/${long}`;
    let messageAscii = [];
      for (let index = 0; index < message.length; index++) {
      messageAscii.push(message.charCodeAt(index));
    }
    
    alert(`Message: ${message}`);
    ChirpConnect.send(messageAscii);
  }

  render() {
    return (
      <View style={styles.container}>

        <Subheader text="Welcome to Chirpdori"/>
        <Subheader text="Broadcast your location for help"/>
        <Button 
        onPress={this.onPress} 
        icon={"error"} 
        text='SEND SOS' 
        />
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
    margin: 60,
  },
  instructions: {
    padding: 10,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
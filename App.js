import React, { Component } from 'react';
import {View} from 'react-native';
import Routes from "./components/Routes";
import {createAppContainer} from 'react-navigation';
const AppContainer = createAppContainer(Routes);


export default class App extends Component {
  componentDidMount() {
    alert("Hola")
  }
    render() {
      return (
        <AppContainer/>
      )
    }
}

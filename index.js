/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React, { Component } from 'react';
import { COLOR, ThemeContext, getTheme } from 'react-native-material-ui';

class Root extends Component{
    render(){
        return (
            <ThemeContext.Provider>
                <App/>
            </ThemeContext.Provider>
        )
    }
}


AppRegistry.registerComponent(appName, () => App);

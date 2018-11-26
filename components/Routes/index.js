import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import AuthScreen from '../Auth';
import BottomTab from '../BottomTab';
import Home from "../Home";
import LoginScreen from "../Login";
import React, { Component } from 'react';


const AppNav = createBottomTabNavigator({
    Home: Home,
}, {
    initialRouteName: "Home",
    tabBarComponent: ({navigation}) => <BottomTab navigation={navigation}/>,
})

const LoginNav = createStackNavigator({
    Login: LoginScreen
},{
    initialRouteName: "Login"
})
export default createSwitchNavigator({
    Auth: AuthScreen,
    App: AppNav,
    Login: LoginNav
}, {
    initialRouteName: "Auth"
});



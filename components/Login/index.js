import React, { Component } from 'react';
import {
    View, 
    StyleSheet, 
    AsyncStorage, 
    TextInput
} from 'react-native';
import {Button, Subheader} from 'react-native-material-ui';



export default class LoginScreen extends Component<{}> {
    
    constructor(props){
        super(props);
        this.state = {
            user: "Username"
        }
    }

    _signInAsync = async () => {
        const {user} = this.state;
        await AsyncStorage.setItem('userName', user);
        this.props.navigation.navigate('App');

    }
    deletePlaceholder = () => {
        const {user} = this.state;
        if(user === "Username"){
            this.setState({user: ""})
        }
    }

    render() {
        const {user} = this.state;
        return (
            <View style={styles.container}>
                <Subheader text="Please choose a username"/>
                <TextInput
                onChangeText={(text) => this.setState({user:text})}
                value={user}
                onFocus={this.deletePlaceholder}
                >
                </TextInput>
                <Button disabled={user === "Username" || user === ""} onPress={this._signInAsync} text="Sign In."/>
            </View>
        )
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

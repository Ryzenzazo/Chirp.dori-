import React, { Component } from 'react';
import {BottomNavigation} from 'react-native-material-ui';


export default class BottomTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 'SOS'
        }
    }
    render() {
        return (
            <BottomNavigation active={this.state.active} hidden={false} >
                <BottomNavigation.Action
                    key="messages"
                    icon="message"
                    label="Messages"
                    onPress={() => {
                        this.setState({ active: 'messages' });
                        this.props.navigation.navigate('Messages');
                    }}
                />
                <BottomNavigation.Action
                    key="SOS"
                    icon="error"
                    label="SOS"
                    onPress={() => {
                        this.setState({ active: 'SOS' });
                        this.props.navigation.navigate('Home');
                    }}
                />
                <BottomNavigation.Action
                    key="settings"
                    icon="settings"
                    label="Settings"
                    onPress={() => {
                        this.setState({ active: 'settings' });
                        this.props.navigation.navigate('Settings')
                    }}
                />
            </BottomNavigation>        
        )
    }
}

import React, {Component} from 'react';
import { View, Text, StyleSheet, RefreshControlComponent} from 'react-native';

export default class Tab2 extends Component{
    render(){
        return (
            <View style ={StyleSheet.container}>
                <Text>Tab2</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 50,
        backgroundColor: "#EEE",    
      }
})
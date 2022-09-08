
import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default class Flex extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'yellow' }}>
                <View style={{ height: 50, width: 50, backgroundColor: 'red' }}></View>
                <View style={{ height: 50, width: 50, backgroundColor: 'green' }}></View>
                <View style={{ height: 50, width: 50, backgroundColor: 'blue' }}></View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
})
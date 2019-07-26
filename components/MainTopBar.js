import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Constants } from 'expo';

// Bar that allows to open the Profile and High Score views

export default class MainTopBar extends React.Component {
    //TODO: connect to views
    render() {
        return (
            <View style={styles.bar}>
                <TouchableOpacity>
                    <Image source={require('../assets/images/winner.png')} style={styles.images} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/images/user.png')} style={styles.images} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        height: 50,
        marginTop: Constants.statusBarHeight
    },
    images: {
        margin: 9
    }
});

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

// View used for checking previous results of the quiz

export default class ProfileView extends React.Component {
    //TODO: render profile
    render() {
        return (
            <View style={styles.container}>
                <Text>PROFILE</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#f00',
    },
});

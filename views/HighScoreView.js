import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// View that collects data of the all time high scores

export default class HighScoreView extends React.Component {
    //TODO: render high scores
    render() {
        return (
            <View style={styles.container}>
                <Text>HIGH SCORE</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#0f0',
    },
});

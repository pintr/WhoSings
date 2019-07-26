import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

import MainTopBar from '../components/MainTopBar';

// Main view of the game, from here it is possible to play a new quiz
// and to see high scores and profile

export default class MainView extends React.Component {
    //TODO: manage profiles and high scores
    static navigationOptions = {
        header: (
            <MainTopBar />
        )
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Start Quiz"
                    color="#2196F3"
                    accessibilityLabel="Tap to start the quiz"
                    onPress={() => {
                        this.props.navigation.navigate("Quiz");
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

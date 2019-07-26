import React from 'react';
import { Alert, Button, StyleSheet, ScrollView, View, Text } from 'react-native';

import TopBar from '../components/TopBar';
import { getQuestion } from '../utils/Api'
import Quiz from '../configs/Quiz';

// Quiz view, only for playing and seeing current score

export default class QuizView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lyrics: "lyrics",
            artist0: "artist",
            artist1: "artist",
            artist2: "artist",
            answer: -1,
            score: 0,
            plays: 0
        };
        this._updateState = this._updateState.bind(this);

    }

    componentWillMount(){
        this._updateState();
    }

    async _updateState(i) {
        console.log(this.state.answer + ";" + i + ";" + this.state.score + " - " + this.state.plays+ "/" + Quiz.QuestionsNumber)
        if(this.state.answer == i) {
            this.setState(prevState => ({ score: prevState.score + Quiz.Points }));
        };
        if(this.state.plays < Quiz.QuestionsNumber) {
            var q = await getQuestion();
            console.log(q);
            this.setState({
                lyrics: q.lyrics,
                artist0: q.artists[0].name,
                artist1: q.artists[1].name,
                artist2: q.artists[2].name,
                answer: q.answer
            });
            this.setState(prevState => ({ plays: prevState.plays + 1 }));
        }
        else {
            Alert.alert(
                'Game completed',
                'You scored ' + this.state.score,
                [
                    {text: 'Restart', onPress: () => this.props.navigation.navigate("Quiz")},
                    {text: 'Quit', onPress: () => this.props.navigation.navigate("Main")},
                ]
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infos}>
                    <Text>Score: {this.state.score}</Text>
                </View>
                <ScrollView>
                    <Text>{this.state.lyrics}</Text>
                </ScrollView>
                <View style={styles.buttons}>
                    <Button onPress={() => this._updateState(0)} title={this.state.artist0}/>
                </View>
                <View style={styles.buttons}>
                    <Button onPress={() => this._updateState(1)} title={this.state.artist1}/>
                </View>
                <View style={styles.buttons}>
                    <Button onPress={() => this._updateState(2)} title={this.state.artist2}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttons: {
        margin: 10
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
    },
    infos: {
        marginBottom: 30
    }
});

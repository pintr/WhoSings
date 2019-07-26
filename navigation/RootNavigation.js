import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import QuizView from '../views/QuizView'
import ProfileView from '../views/ProfileView'
import HighScoreView from '../views/HighScoreView'
import MainView from '../views/MainView'

//Main navigator of app, it allows to accede directly to the quiz view

const RootStackNavigator = StackNavigator({
    Main: {
        screen: MainView,
    },
    Quiz: {
        screen: QuizView
    },
    Profile: {
        screen: ProfileView
    },
    HighScore: {
        screen: HighScoreView
    }
}, {
    initialRouteName: 'Main'
});

export default class RootNavigator extends React.Component {
    render() {
        return <RootStackNavigator />;
    }
}

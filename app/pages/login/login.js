import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';

import styles from './styles'
import commonStyle from './../../commonStyles';

export class Login extends Component{
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <View style={[styles.componentWrp]}>
                <View style={[commonStyle.flexRow]}>
                </View>
            </View>
        );
    }
}
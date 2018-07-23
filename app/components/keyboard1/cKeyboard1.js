import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import commonStyles from './../../commonStyles';
import styles from './styles';

export class CKeyboard1 extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.componentWrp]}>
                <View style={[commonStyles.flexRow, styles.itemsRow]}>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>1</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>2</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap, commonStyles.mr0]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>3</Text>
                    </View>
                </View>
                <View style={[commonStyles.flexRow, styles.itemsRow]}>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>4</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>5</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap, commonStyles.mr0]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>6</Text>
                    </View>
                </View>
                <View style={[commonStyles.flexRow, styles.itemsRow]}>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>7</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>8</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap, commonStyles.mr0]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>9</Text>
                    </View>
                </View>
                <View style={[commonStyles.flexRow, styles.itemsRow, commonStyles.mb0]}>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>0</Text>
                    </View>
                    <View style={[commonStyles.colAuto, styles.itemWrap, styles.backspaceItem, commonStyles.mr0, commonStyles.flexCentering]}>
                        <Icon name='ios-backspace' size={30} style={[styles.itemNumberText, styles.backspace]}/>
                    </View>
                </View>
            </View>
        );
    }
}
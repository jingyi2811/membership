import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import commonStyles from './../commonStyles';
import styles from './styles';

export class CKeyboard extends Component{
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
                        <Text style={[commonStyles.textCenter, styles.itemCharText]}>ABC</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap, commonStyles.mr0]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>3</Text>
                        <Text style={[commonStyles.textCenter, styles.itemCharText]}>DEF</Text>
                    </View>
                </View>
                <View style={[commonStyles.flexRow, styles.itemsRow]}>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>4</Text>
                        <Text style={[commonStyles.textCenter, styles.itemCharText]}>GHI</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>5</Text>
                        <Text style={[commonStyles.textCenter, styles.itemCharText]}>JKL</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap, commonStyles.mr0]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>6</Text>
                        <Text style={[commonStyles.textCenter, styles.itemCharText]}>MNO</Text>
                    </View>
                </View>
                <View style={[commonStyles.flexRow, styles.itemsRow]}>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>7</Text>
                        <Text style={[commonStyles.textCenter, styles.itemCharText]}>PQRS</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>8</Text>
                        <Text style={[commonStyles.textCenter, styles.itemCharText]}>TUV</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap, commonStyles.mr0]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>9</Text>
                        <Text style={[commonStyles.textCenter, styles.itemCharText]}>WXYZ</Text>
                    </View>
                </View>
                <View style={[commonStyles.flexRow, styles.itemsRow, commonStyles.mb0]}>
                    <View style={[commonStyles.col, styles.itemWrap, styles.bottomItemWrap]}>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap, styles.bottomItemWrap]}>
                        <Text style={[commonStyles.textCenter, styles.itemNumberText]}>0</Text>
                    </View>
                    <View style={[commonStyles.col, styles.itemWrap, commonStyles.mr0, commonStyles.alignItemsCenter, styles.bottomItemWrap]}>
                        <Icon name='ios-backspace' size={30} style={[styles.itemNumberText, styles.backspace]}/>
                    </View>
                </View>
            </View>
        );
    }
}
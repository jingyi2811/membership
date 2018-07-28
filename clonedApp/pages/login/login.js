import React, { Component } from 'react';

import {
    View,
    Text,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';
import {
    SearchBar,
} from 'react-native-elements';

import styles from './styles'
import commonStyle from './../../commonStyles';

import backgroundImg from './../../assets/img/ReMember-BG.png';
import commonStyles from "../../commonStyles";

const fontColor = '#d1d2d6';

export class Login extends Component{
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <ImageBackground resizeMode={'stretch'} style={[commonStyle.flexCentering, styles.componentWrp]} source={backgroundImg}>
                <View style={[styles.backDrop]}></View>
                <View style={[styles.formWrap]}>
                    <View style={[styles.inputWrap]}>
                        <SearchBar icon={{type: 'simple-line-icon', name: 'user', style: styles.inputIcon}} inputStyle={styles.input} placeholder={'Username'} containerStyle={[styles.inputContainer]} placeholderTextColor={fontColor}/>
                    </View>
                    <View style={[styles.inputWrap]}>
                        <SearchBar icon={{type: 'simple-line-icon', name: 'key', style: styles.inputIcon}} inputStyle={styles.input} placeholder={'Password'} containerStyle={[styles.inputContainer]} placeholderTextColor={fontColor}/>
                    </View>
                    <View style={[styles.formFooter]}>
                        <TouchableHighlight style={[commonStyles.alignItemsCenter, styles.loginBtn]}
                                            activeOpacity={1}
                                            underlayColor={'#cdcdcf'}
                                            onPress={() => {console.log('I am pressed')}}>
                            <Text style={[commonStyles.fontBold, styles.loginBtnText]}>SIGN IN</Text>
                        </TouchableHighlight>
                        <View style={[commonStyles.flexRow, commonStyles.flexCentering, styles.forgotPassword]}>
                            <Text style={[styles.helpText]}>
                                forgot your password?
                            </Text>
                            <TouchableHighlight style={[styles.pressMe]}>
                                <Text style={[styles.pressMeText]}>PRESS HERE</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
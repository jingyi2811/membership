import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';
import {CKeyboard} from "./../../components/keyboard/cKeyboard";
import loginBaImg from './../../assets/img/login-ba.png';
import backgroundImg from './../../assets/img/background.png';
import commonStyles from './../../commonStyles';
import styles from './styles';

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render() {
        return (
            <ImageBackground resizeMode={'stretch'} style={[styles.componentWrp]} source={backgroundImg}>
                <View style={[commonStyles.alignSelfCenter, styles.componentInner]}>
                    <View style={[commonStyles.alignItemsCenter, styles.loginBaWrap]}>
                        <Image source={loginBaImg} style={[styles.loginBa]}/>
                    </View>
                    <View>
                        <TextInput style={[styles.textInput]} placeholder={"Phone Number"} editable={false} placeholderTextColor={'#7271b7'} underlineColorAndroid={'transparent'}/>
                    </View>
                    <View style={[styles.signUpFooter]}>
                        <TouchableHighlight style={[commonStyles.alignItemsCenter, styles.signUpBtn]}
                                            activeOpacity={1}
                                            underlayColor={'#cdcdcf'}
                                            onPress={() => {console.log('I am pressed')}}>
                            <Text style={[commonStyles.fontBold, styles.signUpBtnText]}>SIGN UP</Text>
                        </TouchableHighlight>
                        <View style={[commonStyles.flexRow, commonStyles.flexCentering, styles.signInHelp]}>
                            <Text style={[styles.signInHelpText]}>
                                If you are already a member, please
                            </Text>
                            <TouchableHighlight style={[styles.signIn]}>
                                <Text style={[styles.signInText]}>SIGN IN</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <CKeyboard />
            </ImageBackground>
        )
    }
}
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

//Jimmy code

const fontColor = '#d1d2d6';

export class Login extends React.Component{

	constructor(prop) {
        
		super(prop);
			
		this.state = {
		  userName: "",
		  password: "",
		  isVerify: false
		};
    }
	
	setUserName = (value) => {
		
		this.setState({
		  userName: value
		})
	}
	
	setPassword = (value) => {
		
		this.setState({
		  password: value
		})
	}
	
	onPress = () => {
		
		if(this.state.userName == 'remember' && this.state.password == 'abc'){
			
			const { navigate } = this.props.navigation;
			navigate('M2');	
			
		} else {
			alert('Password Wrong');
		}
		
	}
	
	 render() {
		 
		return (
            <ImageBackground resizeMode={'stretch'} style={[commonStyle.flexCentering, styles.componentWrp]} source={backgroundImg}>
                <View style={[styles.backDrop]}></View>
                <View style={[styles.formWrap]}>
                    <View style={[styles.inputWrap]}>
                        <SearchBar icon={{type: 'simple-line-icon', name: 'user', style: styles.inputIcon}} inputStyle={styles.input} placeholder={'Username'} containerStyle={[styles.inputContainer]} placeholderTextColor={fontColor}
						 onChangeText={this.setUserName.bind(this)}/>
                    </View>
                    <View style={[styles.inputWrap]}>
                        <SearchBar icon={{type: 'simple-line-icon', name: 'key', style: styles.inputIcon}} inputStyle={styles.input} placeholder={'Password'} containerStyle={[styles.inputContainer]} placeholderTextColor={fontColor}
						onChangeText={this.setPassword.bind(this)}/>
                    </View>
                    <View style={[styles.formFooter]}>
                        <TouchableHighlight style={[commonStyles.alignItemsCenter, styles.loginBtn]}
                                            activeOpacity={1}
                                            underlayColor={'#cdcdcf'}
                                            onPress={this.onPress.bind(this)}>
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
	};
}
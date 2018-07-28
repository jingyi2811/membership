import {StyleSheet} from "react-native";

import { scale } from "../../commonStyles";

const fontColor = '#d1d2d6';

export default StyleSheet.create({
    componentWrp: {
        flexGrow: 1,
    },
    backDrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.5,
    },
    formWrap: {
        paddingHorizontal: 50,
        paddingTop: 30,
        paddingBottom: 40,
        backgroundColor: 'white',
    },
    inputWrap: {
        marginBottom: 5,
    },
    inputContainer: {
        paddingTop: 0,
        paddingBottom: 0,
        borderTopWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: fontColor,
        backgroundColor: 'transparent',
    },
    input: {
        minWidth: scale(350),
        marginHorizontal: 0,
        marginVertical: 0,
        backgroundColor: 'transparent',
        paddingBottom: 0,
        color: fontColor
    },
    inputIcon: {
        left: 2,
        top: 16,
        color: fontColor,
    },
    formFooter: {
        marginTop: 30,
    },
    loginBtn: {
        marginBottom: 8,
        paddingVertical: 7,
        backgroundColor: '#4b0081',
        borderRadius: 5,
    },
    signUpPress: {
        backgroundColor: '#a5a5a7',
    },
    loginBtnText: {
        color: 'white',
    },
    forgotPassword: {
    },
    helpText: {
        fontSize: 10,
        color: fontColor,
    },
    pressMe: {
        marginLeft: 3,
    },
    pressMeText: {
        fontSize: 11,
        color: '#4b0081'
    }
})
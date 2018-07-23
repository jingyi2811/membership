import {StyleSheet} from "react-native";

export default StyleSheet.create({
    componentWrp: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    componentInner: {
        maxWidth: 350,
    },
    loginBaWrap: {
        paddingTop: 60,
        paddingBottom: 35,
    },
    loginBa: {
        marginRight: 0,
    },
    textInput: {
        borderBottomWidth: 1,
        borderColor: '#7271b7',
        paddingVertical: 5,
        color: '#fff',
        fontSize: 15,
    },
    signUpFooter: {
        marginTop: 30,
    },
    signUpBtn: {
        marginBottom: 8,
        paddingVertical: 7,
        backgroundColor: '#f9f9fb',
        borderRadius: 5,
    },
    signUpPress: {
        backgroundColor: '#a5a5a7',
    },
    signUpBtnText: {
        color: '#6a5a89',
    },
    signInHelp: {
    },
    signInHelpText: {
        fontSize: 12,
        color: '#7271b7'
    },
    signIn: {
        marginLeft: 3,
    },
    signInText: {
        fontSize: 13,
        color: '#9994d5'
    }
})
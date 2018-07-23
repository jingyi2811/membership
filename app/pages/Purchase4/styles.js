import {StyleSheet} from "react-native";
import { scale } from "../../commonStyles";

let blueColor = '#4b0081';
let greyColor = '#f1f1f3';
let contentColor = '#999a9e';

export default StyleSheet.create({
    componentWrp: {
        flexGrow: 1,
    },
    leftMain: {
        flex: 1,
        maxWidth: scale(438),
    },
    topNavContainer: {
        marginBottom: scale(20),
    },
    navItem: {
        marginRight: scale(5),
        paddingVertical: scale(18),
        backgroundColor: greyColor,
    },
    navItemSelected: {
        backgroundColor: blueColor,
    },
    navItemText: {
        fontSize: scale(20),
        color: contentColor,
        fontWeight: 'bold',
    },
    navItemTextSelected: {
        color: 'white',
    },
    inputWrap: {
        marginBottom: scale(10),
    },
    input: {
        paddingVertical: 0,
        paddingHorizontal: scale(37),
        borderWidth: 1,
        borderColor: '#d7d7d9',
        borderRadius: 5,
        textAlign: 'right',
        fontSize: scale(30),
    },
    rightSide: {
        flex: 1,
        backgroundColor: greyColor,
    },
    topRightPurchase: {
        paddingVertical: scale(15),
        backgroundColor: '#a6a7ab'
    },
    topRightPurchaseText: {
        color: 'white',
    },
    rightListContainer: {
        paddingHorizontal: scale(20),
        paddingVertical: scale(15),
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: greyColor,
        borderRadius: 5,
    },
    rightListItem: {
        paddingVertical: 5,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: greyColor,
    },
    rightItemLabel: {
        width: 50,
        fontSize: 10,
        paddingBottom: 2,
        fontWeight: 'bold',
    },
    rightItemText: {
        fontSize: 18,
        fontWeight: '100',
    },
    rightFooter: {
        paddingBottom: scale(45)
    },
    sign1: {
        width: scale(64),
        height: scale(64),
    }
    ,backBtnWrapper: {
        paddingVertical: 25,
        backgroundColor: '#f1f1f3',
    },
    backBtn: {
        width: 100,
        backgroundColor: blueColor,
        paddingVertical: scale(7),
        paddingRight: 25,
        paddingLeft: 15,
        borderRadius: 10,
    },
    backBtnText: {
        color: 'white',
        letterSpacing: 2,
        fontWeight: 'bold',
        fontSize: 15,
    },
    backBtnIconContainer: {
        paddingRight: -10,
        marginRight: 0,
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: 'red',
    },
})
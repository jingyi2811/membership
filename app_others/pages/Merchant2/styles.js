import {StyleSheet} from "react-native";

export default StyleSheet.create({
    componentWrp: {
        flexGrow: 1,
    },
    topMainWrap: {
        paddingHorizontal: 20,
    },
    bottomNavWrap: {
        borderTopWidth: 1,
        borderColor: '#e8e8e8',

    },
    topItem: {
    },
    itemSquare: {
        padding: 70,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#ecedef',
        shadowColor: 'red',
        shadowOffset: {width: 20, height: 20},
        shadowOpacity: .6,
        shadowRadius: 7,
    },
    itemLabel: {
        marginTop: 35,
    },
    itemText:{
        color: '#a8a9ad',
        fontSize: 25,
    },
    navItem: {
        paddingTop: 25,
        paddingBottom: 13,
        borderRightWidth: 1,
        borderColor: '#dddddd',
    },
    navItemInner: {

    },
    navItemText: {
        marginTop: 10,
        color: '#b2b3b5',
        fontSize: 18,
    }
})
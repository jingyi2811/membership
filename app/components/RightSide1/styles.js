import shorthand from "react-native-styles-shorthand";
import {StyleSheet} from "react-native";
import {colors} from "../../config/colors";

export default StyleSheet.create(shorthand({
    componentWrap: {
        paddingHorizontal: 8,
        paddingTop: 40,
        paddingBottom: 0,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    profilePicture: {
        width: 135,
        height: 135,
        borderRadius: 68,
        marginRight: 25,
    },
    nameText: {
        color: colors.blueColor,
    },
    phoneNumber: {
        marginTop: 5,
    },
    tabsWrap: {
        marginVertical: 20,
    },
    tab: {
        borderLeftWidth: 1,
        borderColor: colors.fontColor,
        paddingVertical: 15,
    },
    tabText: {
        color: '#a1a1a1',
    },
    tabSelected: {
        backgroundColor: '#e2e2e2',
    },
    footer: {
        paddingTop: 10,
    },
    backBtnWrapper: {
        paddingVertical: 15,
        paddingHorizontal: 55,
        backgroundColor: colors.backgroundGrey,
    },
    backBtn: {
        backgroundColor: colors.blueColor,
        paddingVertical: 10,
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
    listHeader: {
        color: '#626262',
    },
    listRow: {
        paddingVertical: 10,
    },
    listRowText: {
        fontSize: 17,
        color: colors.fontColor,
    },
    recruited: {
        color: colors.blueColor,
        fontWeight: '500',
    }
}));
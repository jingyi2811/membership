import {StyleSheet} from 'react-native';
import {colors} from './../../config/colors';

export default StyleSheet.create({
    componentWrap: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    tabList: {
        justifyContent: 'flex-start'
    },
    tab: {
        flexBasis: 1,
        backgroundColor: '#f1f1f3',
        marginBottom: 2,
        maxHeight: 125,
    },
    tabSelected: {
        backgroundColor: colors.blueColor,
    },
    fillEmpty: {
        backgroundColor: '#f1f1f3',
    },
    tabTextSelected: {
        color: 'white',
    },
    tabText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#9a9b9f'
    },
    cashiersWrap: {
        paddingVertical: 25,
        backgroundColor: '#f1f1f3',
    },
    cashiersBtnBorder: {
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#a8a8aa',
    },
    cashiersBtn: {
        paddingVertical: 25,
        paddingHorizontal: 27,
        borderRadius: 5,
        backgroundColor: '#dbdbdb'
    },
    cashiersText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white',
    },
    backBtnWrapper: {
        paddingVertical: 25,
        backgroundColor: '#f1f1f3',
    },
    backBtn: {
        width: 125,
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
        fontSize: 20,
    },
})
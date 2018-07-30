import {StyleSheet} from 'react-native';
import {colors} from './../../config/colors';

export default StyleSheet.create({
    componentWrap: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 30,
    },
    headerWrap: {

    },
    listWrap: {
        marginVertical: 5,
    },
    listRow: {
        paddingVertical: 10,
    },
    listRowOdd: {
        backgroundColor: '#f5f2f9',
    },
    listRowCol: {
        color: '#b4b4b4',
        fontSize: 15,
    },
    footerWrap: {
        borderTopWidth: 1,
        borderColor: '#bdbec2',
    },

    headerTabWrap: {
        paddingTop: 20,
        paddingBottom: 15,
        backgroundColor: '#f1f1f3',
        marginRight: 3,
    },
    headerTabSelected: {
        backgroundColor: colors.blueColor,
    },
    hDate: {
        color: '#afb0b2',
        fontWeight: '500',
        fontSize: 18,
    },
    hDay: {
        marginTop: 3,
        color: '#b0b1b3',
        fontSize: 16,
    },
    hTextSelected: {
        color: 'white',
    },
    footerCol: {
        paddingVertical: 18,
        borderLeftWidth: 1,
        borderColor: '#d0d2d1',
    },
    footerColLabel: {
        fontSize: 14,
        fontWeight: '500',
        color: '#9a9b9f'
    },
    footerColVal: {
        marginTop: 5,
        fontSize: 30,
        fontWeight: 'normal',
    }
});
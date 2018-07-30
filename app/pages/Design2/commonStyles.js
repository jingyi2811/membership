import {StyleSheet} from "react-native";
import {colors} from './../config/colors';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fefefe',
    },
    border: {
        borderWidth: 1,
        borderColor: colors.fontColor,
    },
    borderColor: {
        borderColor: '#858585',
    },
    flexVertical: {
        flexDirection: 'column',
    },
    flexRow: {
        flexDirection: 'row',
    },
    colAuto: {
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 0,
    },
    col: {
        flexBasis: 0,
        flexGrow: 1,
        flexShrink: 1,
    },
    col1: {
        flexBasis: 0,
        flexGrow: 1,
        flexShrink: 1,
    },
    col2: {
        flexBasis: 0,
        flexGrow: 2,
        flexShrink: 1,
    },
    col3: {
        flexBasis: 0,
        flexGrow: 3,
        flexShrink: 1,
    },
    col4: {
        flexBasis: 0,
        flexGrow: 4,
        flexShrink: 1,
    },
    col9: {
        flexBasis: 0,
        flexGrow: 9,
        flexShrink: 1,
    },
    alignItemsCenter: {
        alignItems: 'center',
    },
    justifyContentSpaceBetween: {
        justifyContent: 'space-between',
    },
    alignSelfCenter: {
        alignSelf: 'center',
    },
    alignSelfEnd: {
        alignSelf: 'flex-end',
    },
    alignSelfBase: {
        alignSelf: 'baseline',
    },
    justifyContentSpaceAround: {
        justifyContent: 'space-around',
    },
    justifyContentCenter: {
        justifyContent: 'center',
    },
    fontBold: {
        fontWeight: '500',
    },
    fontSmall: {
        fontSize: 12,
        color: colors.fontColor,
    },
    fontContent: {
        fontSize: 17,
        color: colors.fontColor,
    },
    fontTitle: {
        fontSize: 28,
        color: colors.fontColor,
    },
    fontSubTitle: {
        fontSize: 20,
        color: colors.fontColor,
    },
    textCenter: {
        textAlign: 'center',
    },
    textRight: {
        textAlign: 'right',
    },
    flexCentering: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
import {
    StyleSheet,
    PixelRatio
} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
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
    colExpand: {
        flexBasis: 'auto',
        flexGrow: 1,
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
    alignItemsEnd: {
        alignItems: 'flex-end',
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
    },
    mr0: {
        marginRight: 0,
    },
    mb0: {
        marginBottom: 0,
    },
    br0: {
        borderRightWidth: 0,
    },
    bb0: {
        borderBottomWidth: 0,
    }
});

export function scale(px) {
    return px * 1.27 / PixelRatio.get();
}
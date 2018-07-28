import {StyleSheet} from "react-native";
import { scale } from "../../commonStyles";

export default StyleSheet.create({
    componentWrp: {
        marginTop: 20,
    },
    itemsRow: {
        marginBottom: scale(10),
    },
    itemWrap: {
        paddingTop: scale(10),
        paddingBottom: scale(8),
        backgroundColor: '#f1f1f3',
        marginRight: scale(10),
    },
    itemNumberText: {
        fontSize: 25,
        color: '#a6a7ab',
        fontWeight: '100',
    },
    backspaceItem: {
        flexBasis: scale(139),
    },
    backspace: {
        fontSize: 30,
    },
})
import shorthand from "react-native-styles-shorthand";
import {StyleSheet} from "react-native";

export default StyleSheet.create(shorthand({
    componentWrap: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 1,
        backgroundColor: 'white',
    },
    personSelected: {
        backgroundColor: '#dee0e2',
    },
    selectedText: {
        color: 'white',
    }
}));
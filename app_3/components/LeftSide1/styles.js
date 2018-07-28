import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    componentWrap: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#f1f1f3',
    },
    searchWrap: {
        marginBottom: 5,
    },
    searchBarWrapper: {
        backgroundColor: '#ffffff',
        borderBottomColor: 'white',
        borderTopColor: 'white',
    },
    searchInput: {
        backgroundColor: 'white',
        borderBottomColor: 'white',
        borderTopColor: 'white',
    },
    sortByWrap: {
        paddingVertical: 0,
        backgroundColor: 'white',
        marginBottom: 5,
    },
    sortByBtn: {
        paddingHorizontal: 1,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sortByText: {
        color: '#9b9b9b',
        fontWeight: '500',
    },
    sortByLabel: {
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    sortByBtnSelected: {
        backgroundColor: '#f1f1f3',
    },
    listWrap: {
    },
});
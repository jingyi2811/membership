import React from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
import commonStyles from './../../../commonStyles';
import styles from './styles';

export class LeftMainFinal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        }
    }
    render() {
        let listRows = [
            {id: 1, name: 'Nick Nieh', val: -18.30, time: '11.30pm', oName: 'Lisa'},
            {id: 2, name: 'Ken Wong', val: 100.00, time: '11.30pm', oName: 'Lisa'},
            {id: 3, name: 'Gigi Wong', val: -17.30, time: '13.38pm', oName: 'Nice'},
            {id: 4, name: 'Chun Yew', val: -19.30, time: '10.20pm', oName: 'Gigi'},
            {id: 5, name: 'Paul Tan', val: -13.32, time: '11.36pm', oName: 'Gigi'},
            {id: 6, name: 'Grace Yap', val: 38.30, time: '11.33pm', oName: 'Yeah'},
            {id: 7, name: 'Wei Siong', val: 12.30, time: '11.30am', oName: 'Sary'},
            {id: 8, name: 'Arsh Kaur', val: 13.32, time: '11.26pm', oName: 'Bee'},
            {id: 9, name: 'Kunga Sim', val: -18.70, time: '11.40pm', oName: 'Snil'},
            {id: 10, name: 'Jane Low', val: -58.30, time: '11.10pm', oName: 'Gendo'},
            {id: 11, name: 'Jen Dee', val: -18.20, time: '11.36pm', oName: 'Ninja'},
            {id: 12, name: 'Steve Ho', val: -17.50, time: '11.33pm', oName: 'Ball'},
            {id: 13, name: 'Gigi Wong', val: -17.30, time: '13.38pm', oName: 'Nice'},
            {id: 14, name: 'Chun Yew', val: -19.30, time: '10.20pm', oName: 'Gigi'},
            {id: 15, name: 'Paul Tan', val: -13.32, time: '11.36pm', oName: 'Gigi'},
            {id: 16, name: 'Grace Yap', val: 38.30, time: '11.33pm', oName: 'Yeah'},
            {id: 17, name: 'Wei Siong', val: 12.30, time: '11.30am', oName: 'Sary'},
            {id: 18, name: 'Arsh Kaur', val: 13.32, time: '11.26pm', oName: 'Bee'},
            {id: 19, name: 'Kunga Sim', val: -18.70, time: '11.40pm', oName: 'Snil'},
            {id: 20, name: 'Jane Low', val: -58.30, time: '11.10pm', oName: 'Gendo'},
            {id: 21, name: 'Nick Nieh', val: -18.30, time: '11.30pm', oName: 'Lisa'},
            {id: 22, name: 'Ken Wong', val: 100.00, time: '11.30pm', oName: 'Lisa'},
            {id: 23, name: 'Gigi Wong', val: -17.30, time: '13.38pm', oName: 'Nice'},
            {id: 24, name: 'Chun Yew', val: -19.30, time: '10.20pm', oName: 'Gigi'},
            {id: 25, name: 'Paul Tan', val: -13.32, time: '11.36pm', oName: 'Gigi'},
            {id: 26, name: 'Grace Yap', val: 38.30, time: '11.33pm', oName: 'Yeah'},
            {id: 27, name: 'Wei Siong', val: 12.30, time: '11.30am', oName: 'Sary'},
            {id: 28, name: 'Arsh Kaur', val: 13.32, time: '11.26pm', oName: 'Bee'},
            {id: 29, name: 'Kunga Sim', val: -18.70, time: '11.40pm', oName: 'Snil'},
            {id: 30, name: 'Jane Low', val: -58.30, time: '11.10pm', oName: 'Gendo'},
        ];
        let tab = this.state.tab;
        return (
            <View style={[styles.componentWrap, commonStyles.col3]}>
                <View style={[commonStyles.flexRow, styles.headerWrap]}>
                    <TouchableHighlight onPress={() => {this.setState({tab: 0})}} style={[commonStyles.col, styles.headerTabWrap, tab === 0 && styles.headerTabSelected]}>
                        <View>
                            <Text style={[commonStyles.textCenter, styles.hDate, tab === 0 && styles.hTextSelected]}>TODAY</Text>
                            <Text style={[commonStyles.textCenter, styles.hDay, tab === 0 && styles.hTextSelected]}>SAT</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.setState({tab: 1})}} style={[commonStyles.col, styles.headerTabWrap, tab === 1 && styles.headerTabSelected]}>
                        <View>
                            <Text style={[commonStyles.textCenter, styles.hDate, tab === 1 && styles.hTextSelected]}>YESTERDAY</Text>
                            <Text style={[commonStyles.textCenter, styles.hDay, tab === 1 && styles.hTextSelected]}>FRI</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.setState({tab: 2})}} style={[commonStyles.col, styles.headerTabWrap, tab === 2 && styles.headerTabSelected]}>
                        <View>
                            <Text style={[commonStyles.textCenter, styles.hDate, tab === 2 && styles.hTextSelected]}>21/09/2017</Text>
                            <Text style={[commonStyles.textCenter, styles.hDay, tab === 2 && styles.hTextSelected]}>THU</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.setState({tab: 3})}} style={[commonStyles.col, styles.headerTabWrap, tab === 3 && styles.headerTabSelected]}>
                        <View>
                            <Text style={[commonStyles.textCenter, styles.hDate, tab === 3 && styles.hTextSelected]}>20/09/2017</Text>
                            <Text style={[commonStyles.textCenter, styles.hDay, tab === 3 && styles.hTextSelected]}>WED</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.setState({tab: 4})}} style={[commonStyles.col, styles.headerTabWrap, tab === 4 && styles.headerTabSelected]}>
                        <View>
                            <Text style={[commonStyles.textCenter, styles.hDate, tab === 4 && styles.hTextSelected]}>19/09/2017</Text>
                            <Text style={[commonStyles.textCenter, styles.hDay, tab === 4 && styles.hTextSelected]}>TUE</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <ScrollView style={[commonStyles.col, styles.listWrap]}>
                    {
                        listRows.map((row, i) => {
                            return (
                                <View style={[commonStyles.flexRow, styles.listRow, i % 2 === 0 && styles.listRowOdd]} key={row.id}>
                                    <Text style={[commonStyles.col, styles.listRowCol, commonStyles.textCenter]}>{i}</Text>
                                    <Text style={[commonStyles.col, styles.listRowCol]}>{row.name}</Text>
                                    <Text style={[commonStyles.col, styles.listRowCol]}>{row.val}</Text>
                                    <Text style={[commonStyles.col, styles.listRowCol]}>{row.time}</Text>
                                    <Text style={[commonStyles.col, styles.listRowCol]}>{row.oName}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={[commonStyles.flexRow, styles.footerWrap]}>
                    <View style={[commonStyles.col, styles.footerCol, {borderLeftWidth: 0}]}>
                        <Text style={[commonStyles.textCenter, styles.footerColLabel]}>TOTAL PURCHASE</Text>
                        <Text style={[commonStyles.textCenter, styles.footerColVal, {color: '#78419f'}]}>1432.00</Text>
                    </View>
                    <View style={[commonStyles.col, styles.footerCol]}>
                        <Text style={[commonStyles.textCenter, styles.footerColLabel]}>TOTAL REDEMPTION</Text>
                        <Text style={[commonStyles.textCenter, styles.footerColVal, {color: '#ce5662'}]}>768.50</Text>
                    </View>
                    <View style={[commonStyles.col, styles.footerCol]}>
                        <Text style={[commonStyles.textCenter, styles.footerColLabel]}>SUMMARY</Text>
                        <Text style={[commonStyles.textCenter, styles.footerColVal, {color: '#0eab5a'}]}>+663.50</Text>
                    </View>
                </View>
            </View>
        )
    }
}
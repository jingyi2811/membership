import React from "react";
import {
    Text,
    View,
    TouchableHighlight,
    ScrollView,
    Image,
} from 'react-native';
import { Button } from 'react-native-elements';
import commonStyles from './../commonStyles';
import styles from './styles';

export class RightSide extends React.Component {
    transactions;
    constructor(props) {
        super(props);
        this.state = {tab: 'point'};
        this.transactions = [
            {id: 1, transaction: -11, balance: 12, date: '02/07/17'},
            {id: 2, transaction: -12, balance: 72, date: '02/07/17'},
            {id: 3, transaction: -31, balance: 32, date: '02/04/17'},
            {id: 4, transaction: -21, balance: 62, date: '02/01/17'},
            {id: 5, transaction: -61, balance: 12, date: '02/08/17'},
            {id: 6, transaction: -13, balance: 17, date: '02/02/17'},
            {id: 7, transaction: -21, balance: 15, date: '02/07/17'},
            {id: 8, transaction: -17, balance: 11, date: '02/07/17'},
            {id: 9, transaction: -12, balance: 12, date: '02/09/17'},
            {id: 10, transaction: -91, balance: 62, date: '02/07/17'},
            {id: 11, transaction: -12, balance: 32, date: '02/03/17'},
            {id: 12, transaction: -11, balance: 16, date: '02/07/17'},
            {id: 13, transaction: -31, balance: 32, date: '02/04/17'},
            {id: 14, transaction: -21, balance: 62, date: '02/01/17'},
            {id: 15, transaction: -61, balance: 12, date: '02/08/17'},
            {id: 16, transaction: -13, balance: 17, date: '02/02/17'},
            {id: 17, transaction: -21, balance: 15, date: '02/07/17'},
            {id: 18, transaction: -17, balance: 11, date: '02/07/17'},
            {id: 19, transaction: -12, balance: 12, date: '02/09/17'},
            {id: 20, transaction: -12, balance: 12, date: '02/09/17'},
            {id: 21, transaction: -11, balance: 12, date: '02/07/17'},
            {id: 22, transaction: -12, balance: 72, date: '02/07/17'},
            {id: 23, transaction: -31, balance: 32, date: '02/04/17'},
            {id: 24, transaction: -21, balance: 62, date: '02/01/17'},
            {id: 25, transaction: -61, balance: 12, date: '02/08/17'},
            {id: 26, transaction: -13, balance: 17, date: '02/02/17'},
            {id: 27, transaction: -21, balance: 15, date: '02/07/17'},
            {id: 28, transaction: -17, balance: 11, date: '02/07/17'},
            {id: 29, transaction: -12, balance: 12, date: '02/09/17'},
            {id: 30, transaction: -12, balance: 12, date: '02/09/17'},
            {id: 31, transaction: -11, balance: 12, date: '02/07/17'},
            {id: 32, transaction: -12, balance: 72, date: '02/07/17'},
            {id: 33, transaction: -31, balance: 32, date: '02/04/17'},
            {id: 34, transaction: -21, balance: 62, date: '02/01/17'},
            {id: 35, transaction: -61, balance: 12, date: '02/08/17'},
            {id: 36, transaction: -13, balance: 17, date: '02/02/17'},
            {id: 37, transaction: -21, balance: 15, date: '02/07/17'},
            {id: 38, transaction: -17, balance: 11, date: '02/07/17'},
            {id: 39, transaction: -12, balance: 12, date: '02/09/17'},
            {id: 40, transaction: -91, balance: 62, date: '02/07/17'},
            {id: 41, transaction: -12, balance: 32, date: '02/03/17'},
            {id: 42, transaction: -11, balance: 16, date: '02/07/17'},
            {id: 43, transaction: -31, balance: 32, date: '02/04/17'},
            {id: 44, transaction: -21, balance: 62, date: '02/01/17'},
            {id: 45, transaction: -61, balance: 12, date: '02/08/17'},
            {id: 46, transaction: -13, balance: 17, date: '02/02/17'},
            {id: 47, transaction: -21, balance: 15, date: '02/07/17'},
            {id: 48, transaction: -17, balance: 11, date: '02/07/17'},
            {id: 49, transaction: -12, balance: 12, date: '02/09/17'},
            {id: 50, transaction: -12, balance: 12, date: '02/09/17'},
        ];
    }
    render() {
        let person = this.props.person;
        let tab = this.state.tab;
        let transactions = this.transactions;
        return (
            <View style={[styles.componentWrap, commonStyles.col3]}>
                <View style={[commonStyles.flexRow, commonStyles.justifyContentCenter]}>
                    <Image source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} style={[styles.profilePicture, commonStyles.colAuto, commonStyles.alignSelfCenter]}/>
                    <View style={[commonStyles.colAuto, commonStyles.alignSelfCenter]}>
                        <Text style={[commonStyles.fontTitle, styles.nameText]}>{person.name}</Text>
                        <Text style={[commonStyles.fontSmall]}>chun_yew23@gmail.com</Text>
                        <Text style={[commonStyles.fontSubTitle, styles.phoneNumber]}>016 6343878</Text>
                    </View>
                </View>
                <View style={[styles.tabsWrap, commonStyles.flexRow, commonStyles.border]}>
                    <TouchableHighlight onPress={() => {this.setState({tab: 'credit'})}} style={[tab === 'credit' && styles.tabSelected, commonStyles.col, styles.tab, {borderLeftWidth: 0}]} underlayColor={'transparent'}>
                        <View>
                            <Text style={[commonStyles.textCenter, styles.tabText, {fontSize: 20}]}>50.60</Text>
                            <Text style={[commonStyles.fontSmall, commonStyles.textCenter, styles.tabText, commonStyles.fontBold]}>CREDIT (RM)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.setState({tab: 'point'})}} style={[tab === 'point' && styles.tabSelected, commonStyles.col, styles.tab]} underlayColor={'transparent'}>
                        <View>
                            <Text style={[commonStyles.textCenter, styles.tabText, {fontSize: 20}]}>12</Text>
                            <Text style={[commonStyles.fontSmall, commonStyles.textCenter, styles.tabText, commonStyles.fontBold]}>POINT(s)</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.setState({tab: 'voucher'})}} style={[tab === 'voucher' && styles.tabSelected, commonStyles.col, styles.tab]} underlayColor={'transparent'}>
                        <View>
                            <Text style={[commonStyles.textCenter, styles.tabText, {fontSize: 20}]}>5</Text>
                            <Text style={[commonStyles.fontSmall, commonStyles.textCenter, styles.tabText, commonStyles.fontBold]}>VOUCHER(s)</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={[commonStyles.col]}>
                    <View style={commonStyles.flexRow}>
                        <Text style={[commonStyles.col, commonStyles.textCenter, commonStyles.fontContent, styles.listHeader]}>Transaction</Text>
                        <Text style={[commonStyles.col, commonStyles.textCenter, commonStyles.fontContent, styles.listHeader]}>Balance</Text>
                        <Text style={[commonStyles.col, commonStyles.textCenter, commonStyles.fontContent, styles.listHeader]}>Date</Text>
                    </View>
                    <ScrollView>
                        {
                            transactions.map((transaction) => {
                                return (
                                    <View style={[commonStyles.flexRow, styles.listRow]} key={transaction.id}>
                                        <Text style={[commonStyles.col, commonStyles.textCenter, styles.listRowText]}>{transaction.transaction}</Text>
                                        <Text style={[commonStyles.col, commonStyles.textCenter, styles.listRowText]}>{transaction.balance}</Text>
                                        <Text style={[commonStyles.col, commonStyles.textCenter, styles.listRowText]}>{transaction.date}</Text>
                                    </View>
                                );
                            })
                        }
                    </ScrollView>
                </View>
                <View style={[styles.footer, commonStyles.flexRow, commonStyles.justifyContentSpaceBetween, commonStyles.alignItemsCenter]}>
                    <Text style={[commonStyles.colAuto, commonStyles.fontSubTitle, styles.recruited]}>{'Recruited By Lisa'.toUpperCase()}</Text>
                    <View style={[commonStyles.colAuto, styles.backBtnWrapper]}>
                        <Button icon={{name: 'keyboard-arrow-left', size: 30, color: 'white'}} title={'BACK'} buttonStyle={styles.backBtn} fontWeight={'bold'}/>
                    </View>
                </View>
            </View>
        )
    }
}
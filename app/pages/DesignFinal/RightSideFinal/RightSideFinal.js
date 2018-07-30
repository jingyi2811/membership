import React from 'react';
import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';
import commonStyles from './../../../commonStyles';
import styles from './styles';

export class RightSideFinal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 'credit',
        }
    }
    render() {
        let tab = this.state.tab;
        return (
            <View style={[commonStyles.col1, styles.componentWrap]}>
                <View style={[commonStyles.col, commonStyles.flexVertical, styles.tabList]}>
                    <TouchableHighlight onPress={() => {this.setState({tab: 'credit'})}} style={[commonStyles.col, commonStyles.flexCentering, styles.tab, tab === 'credit' && styles.tabSelected]}>
                        <Text style={[styles.tabText, tab === 'credit' && styles.tabTextSelected]}>CREDIT</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.setState({tab: 'point'})}} style={[commonStyles.col, commonStyles.flexCentering, styles.tab, tab === 'point' && styles.tabSelected]}>
                        <Text style={[styles.tabText, tab === 'point' && styles.tabTextSelected]}>POINT</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={() => {this.setState({tab: 'voucher'})}} style={[commonStyles.col, commonStyles.flexCentering, styles.tab, tab === 'voucher' && styles.tabSelected]}>
                        <Text style={[styles.tabText, tab === 'voucher' && styles.tabTextSelected]}>VOUCHER</Text>
                    </TouchableHighlight>
                    <View style={[commonStyles.col, styles.fillEmpty]}></View>
                </View>
                <View style={[commonStyles.colAuto, commonStyles.flexCentering, styles.cashiersWrap]}>
                    <LinearGradient colors={['#b4b5b7', '#dbdbdb']} start={{x: 1, y: 0}} end={{x: 0, y: 0}} style={[styles.cashiersBtnBorder]}>
                        <TouchableHighlight>
                            <LinearGradient colors={['#b4b5b7', '#d6d6d6', '#dbdbdb']} start={{x: 0, y: 0}} end={{x: 1, y: 0}} style={[commonStyles.flexCentering, styles.cashiersBtn]}>
                                <Text style={[styles.cashiersText]}>CASHIERS</Text>
                            </LinearGradient>
                        </TouchableHighlight>
                    </LinearGradient>
                </View>
                <View style={[commonStyles.colAuto, commonStyles.flexCentering, styles.backBtnWrapper]}>
                    <Button icon={{name: 'keyboard-arrow-left', size: 30, color: 'white'}} title={'BACK'} buttonStyle={styles.backBtn} textStyle={styles.backBtnText}/>
                </View>
            </View>
        )
    }
}
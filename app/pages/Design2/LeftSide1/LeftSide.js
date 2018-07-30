import React from "react";
import {
    Text,
    View,
    TextInput,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import {
    SearchBar
} from 'react-native-elements';

import {LeftRow} from './LeftRow/LeftRow';
import commonStyles from './../commonStyles';
import styles from './styles';
export class LeftSide extends React.Component {
    constructor(props) {
        super(props);
        this.items = props.items;
        this.state = {
            sortBy: 'join_date',
            searchTerm: '',
        };
        this.setSelected = this.setSelected.bind(this);
    }
    render() {
        let searchTerm = this.state.searchTerm;
        let items = this.items.filter((item) => {
            if (!searchTerm) {
                return true;
            }
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
        let selectedPerson = this.props.selectedPerson;
        let sortBy = this.state.sortBy;
        return (
            <View style={[styles.componentWrap, commonStyles.col2]}>
                <View style={styles.searchWrap}>
                    <SearchBar inputStyle={styles.searchInput} onChangeText={(text) => this.setState({searchTerm: text})} placeholder={'Search'} value={searchTerm} containerStyle={[styles.searchBarWrapper]}/>
                </View>
                <View style={[styles.sortByWrap, commonStyles.flexRow]}>
                    <View style={[commonStyles.colAuto, commonStyles.flexRow, commonStyles.alignItemsCenter]}>
                        <Text style={[commonStyles.fontContent, styles.sortByLabel]}>Sory By</Text>
                    </View>
                    <View style={[commonStyles.col, commonStyles.flexRow]}>
                        <TouchableHighlight onPress={() => {this.setState({sortBy: 'join_date'})}} style={[sortBy === 'join_date' && styles.sortByBtnSelected, commonStyles.col, styles.sortByBtn]} underlayColor={'transparent'}>
                            <Text style={[commonStyles.fontSmall, commonStyles.textCenter, styles.sortByText]}>JOIN DATE</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {this.setState({sortBy: 'last_activity'})}} style={[sortBy === 'last_activity' && styles.sortByBtnSelected, commonStyles.col, styles.sortByBtn]} underlayColor={'transparent'}>
                            <Text style={[commonStyles.fontSmall, commonStyles.textCenter, styles.sortByText]}>LAST ACTIVITY</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={() => {this.setState({sortBy: 'birthday'})}} style={[sortBy === 'birthday' && styles.sortByBtnSelected, commonStyles.col, styles.sortByBtn]} underlayColor={'transparent'}>
                            <Text style={[commonStyles.fontSmall, commonStyles.textCenter, styles.sortByText]}>BIRTHDAY</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <ScrollView style={[commonStyles.col, styles.listWrap]}>
                    {items.map((item) => <LeftRow item={item} selected={item.id === selectedPerson.id} key={item.id} setSelected={this.setSelected}/>)}
                </ScrollView>
            </View>
        )
    }
    setSelected(person) {
        this.props.setSelected(person);
    }
}
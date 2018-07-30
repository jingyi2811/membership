import React from 'react';
import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import commonStyles from './../../commonStyles';
import styles from './styles';
import {colors} from "../../../config/colors";

export class LeftRow extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let item = this.props.item;
        let selected = this.props.selected;
        return (
            <TouchableHighlight onPress={() => {this.props.setSelected(item)}} underlayColor={'transparent'}>
                <View style={[styles.componentWrap, selected && styles.personSelected, commonStyles.flexRow]} >
                    <View style={[commonStyles.colAuto, {marginRight: 10}]}>
                        <Icon name={this.iconName(item.sex)} color={this.iconColor(item.sex, selected)} size={20}/>
                    </View>
                    <Text style={[commonStyles.col2, commonStyles.fontContent, selected && styles.selectedText]}>{item.name}</Text>
                    <Text style={[commonStyles.col1, commonStyles.fontContent, selected && styles.selectedText]}>{item.date}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    iconColor(sex, selected) {
        if (sex === 'male') {
            return colors.male;
        }
        else if (sex === 'female') {
            return colors.female;
        }
        else {
            return selected ? '#fffffd' : colors.gender;
        }
    }
    iconName(sex) {
        return sex === 'female' ? 'female' : 'male';
    }
}
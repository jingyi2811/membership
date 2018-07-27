import React, { Component } from 'react';

import {
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
    TouchableHighlight,
} from 'react-native';


import Icon from 'react-native-vector-icons/dist/Entypo';
import commonStyles from './../../commonStyles';
import styles from './styles';

export class Merchant2 extends Component{
    constructor(prop) {
        super(prop);
    }
    render() {
        return (
            <View style={[commonStyles.flexVertical, styles.componentWrp]}>
                <View style={[commonStyles.col, commonStyles.flexRow, commonStyles.alignItemsCenter, commonStyles.justifyContentSpaceAround, styles.topMainWrap]}>
                    <View style={[commonStyles.colAuto]}>
                        <View style={[styles.topItem]}>
                            <TouchableHighlight style={[styles.itemSquare]}>
                                <Icon name="plus" size={200} color={'#d1d2d4'}/>
                            </TouchableHighlight>
                            <View style={[styles.itemLabel]}>
                                <Text style={[commonStyles.textCenter, styles.itemText]}>PURCHASE</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[commonStyles.colAuto]}>
                        <View style={[styles.topItem]}>
                            <TouchableHighlight style={[styles.itemSquare]}>
                                <Icon name="minus" size={200} color={'#d1d2d4'}/>
                            </TouchableHighlight>
                            <View style={[styles.itemLabel]}>
                                <Text style={[commonStyles.textCenter, styles.itemText]}>PURCHASE</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[commonStyles.colAuto, commonStyles.flexRow, styles.bottomNavWrap]}>
                    <TouchableHighlight style={[commonStyles.col, commonStyles.flexCentering, styles.navItem]} onPress={() => {}}>
                        <View style={[commonStyles.flexVertical, commonStyles.alignItemsCenter, styles.navItemInner]}>
                            <Icon name={'skype'} color={'#a8a9ad'} size={40} />
                            <Text style={[commonStyles.textCenter, styles.navItemText]}>Members</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[commonStyles.col, commonStyles.flexCentering, styles.navItem]} onPress={() => {}}>
                        <View style={[commonStyles.flexVertical, commonStyles.alignItemsCenter, styles.navItemInner]}>
                            <Icon name={'skype'} color={'#a8a9ad'} size={40} />
                            <Text style={[commonStyles.textCenter, styles.navItemText]}>Members</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[commonStyles.col, commonStyles.flexCentering, styles.navItem]} onPress={() => {}}>
                        <View style={[commonStyles.flexVertical, commonStyles.alignItemsCenter, styles.navItemInner]}>
                            <Icon name={'skype'} color={'#a8a9ad'} size={40} />
                            <Text style={[commonStyles.textCenter, styles.navItemText]}>Members</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[commonStyles.col, commonStyles.flexCentering, styles.navItem]} onPress={() => {}}>
                        <View style={[commonStyles.flexVertical, commonStyles.alignItemsCenter, styles.navItemInner]}>
                            <Icon name={'skype'} color={'#a8a9ad'} size={40} />
                            <Text style={[commonStyles.textCenter, styles.navItemText]}>Members</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight style={[commonStyles.col, commonStyles.flexCentering, styles.navItem, commonStyles.br0]} onPress={() => {}}>
                        <View style={[commonStyles.flexVertical, commonStyles.alignItemsCenter, styles.navItemInner]}>
                            <Icon name={'skype'} color={'#a8a9ad'} size={40} />
                            <Text style={[commonStyles.textCenter, styles.navItemText]}>Members</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
import React, { Component } from 'react';

import {
    Text,
    TextInput,
    View,
    Image,
    ImageBackground,
    TouchableHighlight,
    PixelRatio,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import commonStyles from './../../commonStyles';
import styles from './styles';
import {CKeyboard1} from "../../components/keyboard1/cKeyboard1";
import sign1 from './../../assets/img/sign1.png';
import { Button } from 'react-native-elements';

export class Purchase4 extends Component{
    constructor(prop) {
        super(prop)
    }
    render() {
        return (
            <View style={[commonStyles.flexRow, styles.componentWrp]}>
                <View style={[commonStyles.col2, commonStyles.flexCentering]}>
                    <View style={[styles.leftMain]}>
                        <View style={[styles.topNavContainer]}>
                            <View style={[commonStyles.flexRow]}>
                                <View style={[commonStyles.col]}>
                                    <TouchableHighlight style={[styles.navItem]}>
                                        <Text style={[commonStyles.textCenter, styles.navItemText]}>CREDIT</Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={[commonStyles.col]}>
                                    <TouchableHighlight style={[styles.navItem, styles.navItemSelected]}>
                                        <Text style={[commonStyles.textCenter, styles.navItemText, styles.navItemTextSelected]}>CREDIT</Text>
                                    </TouchableHighlight>
                                </View>
                                <View style={[commonStyles.col]}>
                                    <TouchableHighlight style={[styles.navItem, commonStyles.mr0]}>
                                        <Text style={[commonStyles.textCenter, styles.navItemText]}>CREDIT</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                        <View style={[styles.inputWrap]}>
                            <TextInput value={'30'} style={[styles.input]} underlineColorAndroid={'transparent'} editable={false}/>
                        </View>
                        <CKeyboard1 />
                    </View>
                </View>
                <View style={[commonStyles.col1]}>
                    <View style={[commonStyles.flexVertical, styles.rightSide]}>
                        <View style={[commonStyles.colAuto]}>
                            <View style={[styles.topRightPurchase]}>
                                <Text style={[commonStyles.textCenter, styles.topRightPurchaseText]}>PURCHASE</Text>
                            </View>
                        </View>
                        <View style={[commonStyles.col, commonStyles.flexCentering]}>
                            <View style={[styles.rightListContainer]}>
                                <View style={[styles.rightListItem]}>
                                    <View style={[commonStyles.flexRow, commonStyles.alignItemsEnd]}>
                                        <View style={[commonStyles.colAuto]}>
                                            <Text style={[styles.rightItemLabel]}>CREDIT</Text>
                                        </View>
                                        <View style={[commonStyles.colExpand]}>
                                            <Text style={[styles.rightItemText]}>RM 2.20</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.rightListItem]}>
                                    <View style={[commonStyles.flexRow, commonStyles.alignItemsEnd]}>
                                        <View style={[commonStyles.colAuto]}>
                                            <Text style={[styles.rightItemLabel]}>POINT</Text>
                                        </View>
                                        <View style={[commonStyles.colExpand]}>
                                            <Text style={[styles.rightItemText]}>30</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.rightListItem, {marginTop: 20}]}>
                                    <View style={[commonStyles.flexRow, commonStyles.alignItemsEnd]}>
                                        <View style={[commonStyles.colAuto]}>
                                            <Text style={[styles.rightItemLabel]}>VOUCHER</Text>
                                        </View>
                                        <View style={[commonStyles.colExpand]}>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.rightListItem]}>
                                    <View style={[commonStyles.flexRow, commonStyles.alignItemsEnd]}>
                                        <View style={[commonStyles.colAuto]}>
                                            <Text style={[styles.rightItemLabel]}> </Text>
                                        </View>
                                        <View style={[commonStyles.colExpand]}>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.rightListItem]}>
                                    <View style={[commonStyles.flexRow, commonStyles.alignItemsEnd]}>
                                        <View style={[commonStyles.colAuto]}>
                                            <Text style={[styles.rightItemLabel]}> </Text>
                                        </View>
                                        <View style={[commonStyles.colExpand]}>
                                        </View>
                                    </View>
                                </View>
                                <View style={[styles.rightListItem]}>
                                    <View style={[commonStyles.flexRow, commonStyles.alignItemsEnd]}>
                                        <View style={[commonStyles.colAuto]}>
                                            <Text style={[styles.rightItemLabel]}> </Text>
                                        </View>
                                        <View style={[commonStyles.colExpand]}>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={[commonStyles.colAuto]}>
                            <View style={[styles.rightFooter]}>
                                <View style={[commonStyles.flexRow, commonStyles.justifyContentCenter]}>
                                    <View style={[commonStyles.colAuto]}>
                                        <Image source={sign1} style={styles.sign1}/>
                                    </View>
                                    <View style={[commonStyles.colAuto]}>
                                        <Button icon={{name: 'keyboard-arrow-left', size: 30, color: 'white', style: {marginRight: 0}}} title={'BACK'} buttonStyle={styles.backBtn} textStyle={styles.backBtnText}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
import React from "react";
import commonStyles from './commonStyles';

import {
    View,
} from 'react-native';

import { LeftMainFinal } from './LeftMainFinal/LeftMainFinal';
import { RightSideFinal } from './RightSideFinal/RightSideFinal';

export default class AppFinal extends React.Component {
    render() {
        return (
            <View style={[commonStyles.flexRow, {flex: 1}]}>
                <LeftMainFinal/>
                <RightSideFinal/>
            </View>
        )
    }
}
import React from "react";
import commonStyles from './commonStyles';
import {
    View,
} from 'react-native';

import {LeftSide} from './LeftSide1/LeftSide';
import {RightSide} from './RightSide1/RightSide';

export default class App extends React.Component {
    items;
    constructor(props) {
        super(props);
        this.items = [
            {id: 1, name: 'Nick Nieh', date: '20 Dec', sex: 'male'},
            {id: 2, name: 'Ken Wong', date: '19 Aug', sex: 'male'},
            {id: 3, name: 'Gigi Wong', date: '22 Nov', sex: 'female'},
            {id: 4, name: 'Chun Yew', date: '23 Jul', sex: 'male'},
            {id: 5, name: 'Paul Tan', date: '24 Sep', sex: 'male'},
            {id: 6, name: 'Grace Yap', date: '10 May', sex: 'female'},
            {id: 7, name: 'Wei Siong', date: '30 Apr', sex: 'male'},
            {id: 8, name: 'Arsh Kaur', date: '18 Act', sex: 'female'},
            {id: 9, name: 'Kunga Sim', date: '19 Nov', sex: 'female'},
            {id: 10, name: 'Jane Low', date: '24 Feb', sex: 'female'},
            {id: 11, name: 'Jen Dee', date: '16 Oct', sex: 'female'},
            {id: 12, name: 'Steve Ho', date: '7 Apr', sex: 'male'},
            {id: 13, name: 'Nick Nieh', date: '20 Dec', sex: 'male'},
            {id: 14, name: 'Ken Wong', date: '19 Aug', sex: 'male'},
            {id: 15, name: 'Gigi Wong', date: '22 Nov', sex: 'female'},
            {id: 16, name: 'Chun Yew', date: '23 Jul', sex: 'male'},
            {id: 17, name: 'Paul Tan', date: '24 Sep', sex: 'male'},
            {id: 18, name: 'Grace Yap', date: '10 May', sex: 'female'},
            {id: 19, name: 'Wei Siong', date: '30 Apr', sex: 'male'},
            {id: 20, name: 'Wei Siong', date: '30 Apr', sex: 'male'},
            {id: 21, name: 'Nick Nieh', date: '20 Dec', sex: 'gender'},
            {id: 22, name: 'Ken Wong', date: '19 Aug', sex: 'gender'},
            {id: 23, name: 'Gigi Wong', date: '22 Nov', sex: 'female'},
            {id: 24, name: 'Chun Yew', date: '23 Jul', sex: 'gender'},
            {id: 25, name: 'Paul Tan', date: '24 Sep', sex: 'male'},
            {id: 26, name: 'Grace Yap', date: '10 May', sex: 'gender'},
            {id: 27, name: 'Wei Siong', date: '30 Apr', sex: 'male'},
            {id: 28, name: 'Arsh Kaur', date: '18 Act', sex: 'female'},
            {id: 29, name: 'Kunga Sim', date: '19 Nov', sex: 'female'},
            {id: 30, name: 'Jane Low', date: '24 Feb', sex: 'gender'},
        ];
        this.state = {
            selectedPerson: this.items[0],
        }
        this.setSelected = this.setSelected.bind(this);
    }
    setSelected(person) {
        this.setState({selectedPerson: person});
    }
    render() {
        let items = this.items;
        let person = this.state.selectedPerson;
        return (
            <View style={[commonStyles.container, commonStyles.flexRow]}>
                <LeftSide items={items} selectedPerson={this.state.selectedPerson} setSelected={this.setSelected}/>
                <RightSide person={person}/>
            </View>
        );
    }
}
import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    StatusBar,
    Button
} from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: ''
        };
    }

    render() {
        const {firstName, lastName} = this.state;
        const {input, formContainer} = styles;
        return (
            <SafeAreaView>
                <StatusBar barStyle="dark-content"/>
                <View style={formContainer}>
                    <TextInput
                        placeholder='First Name'
                        style={input}
                        value={firstName}
                        onChangeText={(text) =>{
                            this.setState(
                                {
                                    firstName: text
                                })
                        }}
                    />
                    <TextInput
                        placeholder='Last Name'
                        style={input}
                        value={lastName}
                        onChangeText={(text) => {
                            this.setState(
                                {
                                    lastName: text
                                })
                        }}
                    />
                    <Button
                        title="Submit"
                        color="#841584"
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {justifyContent: 'center', padding: 10},
    input: {height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginVertical: 10},
    text: {
        color: 'black',
        fontSize: 20
    }
});

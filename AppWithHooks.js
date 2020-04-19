import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    StatusBar,
    Button
} from 'react-native';

export default function App() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setName(`${firstName} ${lastName}`);
    }, [firstName, lastName]);

    const {input, formContainer, text} = styles;
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <Text style={text}>
                {name}
            </Text>
            <View style={formContainer}>
                <TextInput
                    placeholder='First Name'
                    style={input}
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                />
                <TextInput
                    placeholder='Last Name'
                    style={input}
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                />
                <Button
                    title="Submit"
                    color="#841584"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    formContainer: {justifyContent: 'center', padding: 10},
    input: {height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginVertical: 10},
    text: {
        padding: 10,
        color: 'black',
        fontSize: 20
    }
});

import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import UserPool from '../UserPool';

// Tutorial AWS Cognito + React https://www.youtube.com/watch?v=8WZmIdXZe3Q
const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        UserPool.signUp(email, password, [], null, (err, data) => {
            if(err) {
                console.error('Error:', err)
            }
            console.log('Data:', data)
        })
        console.log(`Email: ${email}\nPassword: ${password}`)
    }

    return (
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <TextInput 
                style={styles.input}
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput 
                style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                value={password}
            />
            <TouchableOpacity onPress={handleSubmit}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <Text>Already have an account? 
                <TouchableOpacity 
                    onPress={()=> navigation.navigate('Login')}> Login
                </TouchableOpacity>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderColor: 'black',
        borderWidth: 1
    }
});


export default SignUpScreen;
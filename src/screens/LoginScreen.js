import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';

// Tutorial AWS Cognito + React https://www.youtube.com/watch?v=8WZmIdXZe3Q
const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });
        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        })

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log('onSuccess: ', data);
            },
            onFailure: (err) => {
                console.error('onFailure: ', err);
            },
            newPasswordRequired: (data) => {
                console.log('newPasswordRequired: ', data);
            }
        })
    }

    return (
        <View style={styles.container}>
            <Text>Sign In</Text>
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
            <TouchableOpacity onPress={handleLogin}>
                <Text>Submit</Text>
            </TouchableOpacity>
            <Text>Don't have an account? 
                <TouchableOpacity 
                    onPress={()=> navigation.navigate('SignUp')}> Sign Up
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


export default LoginScreen;
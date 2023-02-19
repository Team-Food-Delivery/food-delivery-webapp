import { useState } from 'react'
import FormInput from './elements/FormInput';
import FormSubmitButton from './elements/FormSubmit';
import { Text, TextInput, StyleSheet, SafeAreaView, View, Pressable } from "react-native";

const isValidObjField = () => {
  return Object.values(userInfo).every(val => val.trim());
}

const SignUpScreen = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState()

  const { email, password, confirmPassword } = userInfo;

  const handleOnChangeText = (val, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: val})
    console.log(userInfo)
  }

  const isValidForm = () => {
    if(!isValidObjField(userInfo)) {

    }
  }

  const submitForm = () => {
    if(isValidForm()) {

    }
  }

  return (
    <SafeAreaView>
      <View>
        <FormInput 
          autoCapitalize='none'
          placeholder="Enter Email or Username"
          value={email}
          onChangeText={val => handleOnChangeText(val, 'email')}
        />
        <FormInput 
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={val => handleOnChangeText(val, 'password')}
        />
        <FormInput 
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={val => handleOnChangeText(val, 'confirmPassword')}
        />
      </View>
      <View>
        <FormSubmitButton onPress={submitForm} title={'Sign Up'}/>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;
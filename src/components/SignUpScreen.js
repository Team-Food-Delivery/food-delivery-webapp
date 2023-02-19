import { useState } from 'react'
import FormInput from './elements/FormInput';
import FormSubmitButton from './elements/FormSubmit';
import validateRegister from './utiities/formValidation';
import ValidationError from './elements/validationError';
import { StyleSheet, SafeAreaView, View } from "react-native";

const SignUpScreen = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [error, setError] = useState({})
  const { email, password, confirmPassword } = userInfo;

  const handleOnChangeText = (val, fieldName) => {
    setUserInfo({...userInfo, [fieldName]: val})
    console.log(userInfo)
  }

  const isValidForm = () => {
      setError(validateRegister(userInfo))
      console.log(validateRegister(userInfo))

  }

  const submitForm = () => {
    if(isValidForm()) {

    }
  }

  const styles = StyleSheet.create({
    signUpContainer: {
      top: "40px",
      alignItems: 'center',
    },
    submitButton: {
      width: "85%",
    }
  })

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View>
        <FormInput 
          autoCapitalize='none'
          placeholder="Enter Email or Username"
          value={email}
          onChangeText={val => handleOnChangeText(val, 'email')}
        />
        {error.email && <ValidationError message={error.email}/>}
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
        {error.password && <ValidationError message={error.password}/>}
      </View>
      <View style={styles.submitButton}>
        <FormSubmitButton onPress={isValidForm} title={'Sign Up'}/>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;
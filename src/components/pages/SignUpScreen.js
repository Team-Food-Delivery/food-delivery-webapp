import { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import useForm from '../utiities/useForm';
import FormInput from '../elements/FormInput';
import FormSubmitButton from '../elements/FormSubmit';
import validateRegister from '../utiities/formValidation';
import ValidationError from '../elements/ValidationError';
import UserPool from '../../UserPool';

const SignUpScreen = () => {
  const { handleChange, handleSubmit, values, errors} = useForm({
    email: '',
    password: '',
    confirmPassword: ''
  }, submitForm, validateRegister)
  const [errorMessage, setErrorMessage] = useState("")

  const navigation = useNavigation()

  function submitForm() {
    UserPool.signUp(values.email, values.password, [], null, (err, data) => {
      if(err.name === 'UsernameExistsException') {
        setErrorMessage('An account with the given email already exists.')
      } else {
        setErrorMessage("");
        navigation.navigate('Verification');
      }
      // console.log('Data:', data)
    })
  }

  const styles = StyleSheet.create({
    signUpContainer: {
      width: Dimensions.get('window').width
    },
    submitButton: {
      maxWidth: Dimensions.get('window').width,
      alignItems: 'center', 
      justifyContent: 'center'
    }
  })

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View>
        <FormInput 
          autoCapitalize='none'
          autofocus={true}
          onFocus={() => setErrorMessage("")}
          placeholder="Enter Email"
          value={values.email}
          onChangeText={val => handleChange(val, 'email')}
        />
        {errors.email && <ValidationError message={errors.email}/>}
        <FormInput 
          placeholder="Password"
          secureTextEntry={true}
          value={values.password}
          onChangeText={val => handleChange(val, 'password')}
        />
        <FormInput 
          placeholder="Confirm Password"
          secureTextEntry={true}
          value={values.confirmPassword}
          onChangeText={val => handleChange(val, 'confirmPassword')}
        />
        {errors.password && <ValidationError message={errors.password}/>}
      </View>
      <View>
      {errorMessage && <ValidationError message={errorMessage}/>}
      </View>
      <View style={styles.submitButton}>
        <FormSubmitButton onPress={submitForm} title={'Sign Up'}/>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;
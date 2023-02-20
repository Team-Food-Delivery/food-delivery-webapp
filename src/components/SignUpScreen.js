import useForm from './utiities/useForm';
import FormInput from './elements/FormInput';
import FormSubmitButton from './elements/FormSubmit';
import validateRegister from './utiities/formValidation';

import ValidationError from './elements/validationError';

import UserPool from '../UserPool';
import { StyleSheet, SafeAreaView, View } from "react-native";

const SignUpScreen = () => {
  const { handleChange, handleSubmit, values, errors} = useForm({
    email: '',
    password: '',
    confirmPassword: ''
  }, submitForm, validateRegister)

  function submitForm() {
    UserPool.signUp(values.email, values.password, [], null, (err, data) => {
      if(err) {
          console.error('Error:', err)
      }
      console.log('Data:', data)
    })
  }

  const styles = StyleSheet.create({
    signUpContainer: {
      width: "80vw"
    },
    submitButton: {
      width: "85%",
      margin: "auto"
    }
  })

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View>
        <FormInput 
          autoCapitalize='none'
          autofocus={true}
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
      <View style={styles.submitButton}>
        <FormSubmitButton onPress={handleSubmit} title={'Sign Up'}/>
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;
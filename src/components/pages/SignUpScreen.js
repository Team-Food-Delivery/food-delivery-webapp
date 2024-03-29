import { useState, useRef } from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  View, 
  useWindowDimensions, 
  TextInput 
} from "react-native";
import useForm from '../utiities/useForm';
import FormSubmitButton from '../elements/FormSubmit';
import validateRegister from '../utiities/formValidation';
import ValidationError from '../elements/ValidationError';
import UserPool from '../utiities/UserPool';
import { setStorageObject } from '../../services/localStorage';

const SignUpScreen = ({ navigation }) => {
  const { handleChange, handleSubmit, values, errors} = useForm({
    email: '',
    password: '',
    confirmPassword: ''
  }, submitForm, validateRegister)
  const [submitError, setSubmitError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const { width } = useWindowDimensions();

  function submitForm() {
    UserPool.signUp(values.email, values.password, [], null, (err, data) => {
      if(err.name === 'UsernameExistsException') {
        setSubmitError(true);
        setErrorMessage('An account with the given email already exists.');
      } else {
        const userObject = { email: values.email, jwtToken: '' };
        setSubmitError(false);
        setErrorMessage("");
        setStorageObject('userAuth', userObject);
        navigation.navigate('Verification');
      }
    })
  }

  const styles = StyleSheet.create({
    signUpContainer: {
      marginTop: 40,
      width: width,
      alignItems: "center"
    },
    submitButton: {
      maxWidth: width,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    inputField: {
      width: width * 0.8,
      marginBottom: 20,
      padding: 15,
      fontSize: 16
    }
  })

  return (
    <SafeAreaView style={styles.signUpContainer}>
      <View>
        <TextInput 
          style={styles.inputField}
          autoCapitalize='none'
          autofocus={true}
          blurOnSubmit={false}
          returnKeyType={'next'}
          onFocus={() => setErrorMessage("")}
          placeholder="Enter Email"
          onSubmitEditing={() => password.current.focus()}
          value={values.email}
          onChangeText={val => handleChange(val, 'email')}
        />
        {errors.email && <ValidationError message={errors.email}/>}
        <TextInput 
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={true}
          blurOnSubmit={false}
          returnKeyType={'next'}
          onSubmitEditing={() => confirmPassword.current.focus()}
          value={values.password}
          ref={password}
          onChangeText={val => handleChange(val, 'password')}
        />
        <TextInput 
          style={styles.inputField}
          placeholder="Confirm Password"
          secureTextEntry={true}
          returnKeyType={'done'}
          value={values.confirmPassword}
          ref={confirmPassword}
          onChangeText={val => handleChange(val, 'confirmPassword')}
        />
        {errors.password && <ValidationError message={errors.password} />}
      </View>
      <View>
        {submitError && <ValidationError message={errorMessage} />}
      </View>
      <View style={styles.submitButton}>
        <FormSubmitButton onPress={handleSubmit} title={'Sign Up'} />
      </View>
    </SafeAreaView>
  )
}

export default SignUpScreen;
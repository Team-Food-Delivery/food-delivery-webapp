import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  StyleSheet, 
  SafeAreaView,
  Dimensions,
  Keyboard, 
  TouchableWithoutFeedback
} from 'react-native';
import { useRef, useState, useEffect } from 'react';
import FormSubmitButton from '../elements/FormSubmit';
import ValidationError from '../elements/ValidationError';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const LoginScreen = () => {
  const password = useRef();
  const [values, setValues] = useState({ email: '', password: '' })
  const errors = {};

  useEffect(() => {
    emailValidation();
    passwordValidation();
  },[errors])

  const emailValidation = () => {
    let emailRegex = /\S+@\S+\.\S+/
  
    if(values.email.length === 0) {
      errors.email = 'Email address is required'
    } else if(!emailRegex.test(values.email)) {
      errors.email = 'Email address is invalid'
    } else if (values.email.length && emailRegex.test(values.email)) {
      delete errors.email
    }  
  }

  const passwordValidation = () => {
    if (values.password.length === 0) {
      errors.password = 'Password field cannot be blank'
    } else if (values.password.length > 1) {
      delete errors.password
    }
  }

  const handleChange = (value, fieldName) => {
    setValues({ ...values, [fieldName]: value });
    
    console.log(errors)
  }

  const handleLoginSubmit = () => {
    if(Object.keys(errors).length === 0) {
      //send login data
    } else {

    }
  }
  
  return (
    <SafeAreaView styles={styles.loginContainer}>
      {/* <DismissKeyboard> */}
        <View>
          <TextInput
            value={values.email}
            style={styles.inputField}
            autoCapitalize='none'
            autofocus={true}
            blurOnSubmit={false}
            returnKeyType={'next'}
            placeholder={"Email"}
            onSubmitEditing={() => password.current.focus()}
            onChangeText={val => handleChange(val, 'email')}
          /> 
          {errors.email && <ValidationError message={errors.email}/>}
          <TextInput
            value={values.password}
            style={styles.inputField}
            autoCapitalize='none'
            autofocus={true}
            blurOnSubmit={false}
            returnKeyType={'done'}
            secureTextEntry={true}
            placeholder={"Password"}
            ref={password}
            onSubmitEditing={() => password.current.blur()}
            onChangeText={val => handleChange(val, 'password')}
          />
          {errors && <ValidationError message={errors.password}/>}
        </View>
      {/* </DismissKeyboard> */}
      <View style={styles.submitButton}>
        <FormSubmitButton title={'Login'} onPress={handleLoginSubmit} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  loginContainer: {
    width: Dimensions.get('window').width,
  },
  inputField: {
    marginBottom: 20,
    padding: 15,
    fontSize: 16,
    width: Dimensions.get('window').width * 0.8
  },
  submitButton: {
    maxWidth: Dimensions.get('window').width,
    marginTop: 10,
    alignItems: 'center', 
    justifyContent: 'center'
  },
})

export default LoginScreen;
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
import { useRef, useState } from 'react';
import FormSubmitButton from '../elements/FormSubmit';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const LoginScreen = () => {
  const password = useRef();
  const [values, setValues] = useState({ email: '', password: '' })
  const errors = {};

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
    emailValidation();
    passwordValidation();

  }

  const handleLoginSubmit = () => {
    if(Object.keys(errors).length === 0) {
      //send login data
    } else {

    }
  }
  
  return (
    <SafeAreaView styles={styles.loginContainer}>
      <DismissKeyboard>
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
        </View>
      </DismissKeyboard>
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
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: Dimensions.get('window').width * 0.8,
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 100,
    borderColor: "#9e9e9e",
    borderWidth: 0.1,
    padding: 10,
  },
  inputField: {
    marginBottom: 20,
    padding: 15,
    fontSize: 16,
    width: Dimensions.get('window').width * 0.8
  },
  submitButton: {
    maxWidth: Dimensions.get('window').width,
    alignItems: 'center', 
    justifyContent: 'center'
  },
})

export default LoginScreen;
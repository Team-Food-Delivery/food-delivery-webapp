import { 
  useWindowDimensions,
  View, 
  TextInput,
  StyleSheet, 
  SafeAreaView,
  Keyboard, 
  Pressable,
  TouchableWithoutFeedback
} from 'react-native';
import { useRef, useState, useContext } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePasswordVisibility } from '../utiities/usePasswordVisibility';
import FormSubmitButton from '../elements/FormSubmit';
import ValidationError from '../elements/ValidationError';
import AuthService from '../../services/Auth';
import { setStorageObject } from '../../services/localStorage';
import { AuthContext } from '../../contexts/AuthContext';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const LoginScreen = () => {
  let errors = {}
  const password = useRef();
  const [values, setValues] = useState({ email: '', password: '' });
  const [formErrors, setFormErrors] = useState(null);
  
  const [response, setResponse] = useState("");
  const { width } = useWindowDimensions();
  const { passwordShow, icon, handlePasswordVisibility } = usePasswordVisibility();
  
  const { setLogin } = useContext(AuthContext)

  const styles = StyleSheet.create({
    loginContainer: {
      width: width,
      flexDirection: 'row',
    },
    inputField: {
      marginBottom: 20,
      padding: 15,
      fontSize: 16,
      width: width * 0.8
    },
    passwordField: {
      position: 'relative'
    },
    passwordVisibility: {
      position: 'absolute',
      top: 15,
      right: 10
    },
    submitButton: {
      maxWidth: width,
      marginTop: 10,
      alignItems: 'center', 
      justifyContent: 'center'
    },
  })

  const loginValidation = () => {
    let emailRegex = /\S+@\S+\.\S+/
    if(values.email.length === 0) {
      errors.email = 'Email address is required'
    } else if(!emailRegex.test(values.email)) {
      errors.email = 'Email address is invalid'
    } else if (values.email.length && emailRegex.test(values.email)) {
      delete errors.email
    }  

    if (values.password.length === 0) {
      errors.password = 'Password field cannot be blank'
    } else if (values.password.length > 1) {
      delete errors.password
    }
    setFormErrors(errors)
  }

  const handleChange = (value, fieldName) => {
    setValues({ ...values, [fieldName]: value });
    loginValidation();
  }

  const handleLoginSubmit =  () => {
    if(Object.keys(errors).length === 0) {
      AuthService.login(values.email, values.password)
        .then(async jwtToken => {
          const userObject = { email: values.email, jwtToken };

          try {
            await setStorageObject('userAuth', userObject)
            await setLogin();
          } catch(e) {
            console.error(e)
          }
        })
        .catch(err => {
          setResponse(err);
        })
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
          {formErrors?.email && <ValidationError message={formErrors.email}/>}
          <View>
            <TextInput
              value={values.password}
              style={[styles.inputField, styles.passwordField]}
              autoCapitalize='none'
              autofocus={true}
              blurOnSubmit={false}
              returnKeyType={'done'}
              secureTextEntry={passwordShow}
              placeholder={"Password"}
              ref={password}
              onSubmitEditing={() => password.current.blur()}
              onChangeText={val => handleChange(val, 'password')}
            />
            <Pressable style={styles.passwordVisibility} onPress={handlePasswordVisibility}>
              <MaterialCommunityIcons name={icon} size={22} color="#232323" />
            </Pressable>
          </View>
          {formErrors?.password && <ValidationError message={formErrors.password}/>}
        </View>
        <View>
          {response && <ValidationError message={response} />}
        </View>
      {/* </DismissKeyboard> */}
      <View style={styles.submitButton}>
        <FormSubmitButton title={'Login'} onPress={handleLoginSubmit} />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;

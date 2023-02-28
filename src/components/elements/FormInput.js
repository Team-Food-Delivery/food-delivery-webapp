import { StyleSheet, Text, TextInput } from 'react-native';

const FormInput = (props) => {
  const { placeholder, label } = props;

  const styles = StyleSheet.create({
    inputField: {
      marginBottom: 20,
      padding: 15,
      fontSize: 16
    }
  })

  return (
    <>
      <Text>{label}</Text>
      <TextInput 
        {...props} 
        placeholder={placeholder} 
        style={styles.inputField}
      />
    </>
  )
}

export default FormInput;
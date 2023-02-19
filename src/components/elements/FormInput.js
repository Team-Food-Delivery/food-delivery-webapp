import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = (props) => {
  const { placeholder, label } = props;

  const styles = StyleSheet.create({
    inputField: {
      marginBottom: "20px",
      padding: "15px",
      fontSize: "16px"
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
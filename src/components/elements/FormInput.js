import { View, StyleSheet, Text, TextInput } from 'react-native';

const FormInput = (props) => {
  const { placeholder, label } = props;

  return (
    <>
      <Text>{label}</Text>
      <TextInput {...props} placeholder={placeholder}/>
    </>
  )
}

export default FormInput;
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FormSubmitButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity>
      <Text onPress={onPress}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FormSubmitButton;
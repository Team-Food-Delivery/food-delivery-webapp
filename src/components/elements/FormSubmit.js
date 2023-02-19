import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const FormSubmitButton = ({ title, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      color: "#fff",
      textAlign: "center",
    },
    signUpButton: {
      backgroundColor: "#3f6186",
      paddingVertical: "20px",
      alignItems: 'center',
      borderRadius: "30px"
    }
  })
  return (
    <TouchableOpacity style={styles.signUpButton}>
      <Text 
        style={styles.button}
        onPress={onPress}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default FormSubmitButton;
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const FormSubmitButton = ({ title, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      color: "#fff",
      textAlign: "center",
      fontSize: 16,
    },
    signUpButton: {
      backgroundColor: "#3f6186",
      paddingVertical: 20,
      alignItems: 'center',
      width: 200,
      borderRadius: 30
    }
  })
  return (
    <TouchableOpacity style={styles.signUpButton}>
      <Text style={styles.button} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default FormSubmitButton;
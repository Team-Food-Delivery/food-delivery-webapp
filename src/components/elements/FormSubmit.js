import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const FormSubmitButton = ({ title, onPress }) => {
  const styles = StyleSheet.create({
    button: {
      color: "#fff",
      textAlign: "center",
      fontSize: 16,
      fontWeight: '700'
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
    <TouchableOpacity onPress={onPress} style={styles.signUpButton}>
      <Text style={styles.button}>{title}</Text>
    </TouchableOpacity>
  )
}

export default FormSubmitButton;
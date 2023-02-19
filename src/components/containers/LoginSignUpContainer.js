import { Text, StyleSheet, SafeAreaView, View, Pressable } from "react-native";
import SignUpScreen from "../SignUpScreen";
import HomeScreen from '../SignUpScreen';

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    backgroundColor: "#fff",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "85vw",
    height: "60vh",
    borderRadius: "50px"
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    top: "10%",
    width: "80%",
    margin: "2em",
    position: "relative",
    backgroundColor: "royalblue",
    borderRadius: "100px",
    padding: "10px"
  },
  buttons: {
    width: "30%",
    backgroundColor: "purple",
  },
  moveButton: {
    position: "absolute",
    margin: "-8px",
    width: "50%",
    padding: "8px",
    border: "none",
    // outline: "none",
    borderRadius: "50px",
    backgroundColor: "#fff",
    textAlign: "center",
  },
  actionButton: {
    width: "50%",
    // outline: "none",
    border: "none",
    backgroundColor: "transparent",
    borderRadius: "50px",
    textAlign: "center"
  },
  buttonTextColor: {
    color: "#fff"
  }
})

const LoginSignUpContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.actionButton]}>
          <Text style={styles.buttonTextColor}>Sign Up</Text>
        </Pressable>
        <Pressable style={styles.actionButton}>
          <Text style={styles.buttonTextColor}>Login</Text>
        </Pressable>
        <Pressable style={styles.moveButton}>
          <Text>Sign Up</Text>
        </Pressable>
      </View>
      <SignUpScreen />
    </SafeAreaView>
  )
}

export default LoginSignUpContainer;
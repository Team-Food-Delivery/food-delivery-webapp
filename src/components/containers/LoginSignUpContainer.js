import React from "react";
import { Text, StyleSheet, SafeAreaView, View, Pressable, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    backgroundColor: "#000",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    width: "85vw",
    height: "60vh",
    borderRadius: "50px"
  },
  buttonContainer: {
    top: "10%",
    width: "80%",
    backgroundColor: "royalblue",
    margin: "2em",
    display: "flex",
    justifyContent: "space-between",
    position: "relative"
  },
  buttons: {
    width: "30%",
    backgroundColor: "white",
  }
})

const LoginSignUpContainer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttons}>
          <Text>Login</Text>
        </Pressable>
        <Pressable style={styles.buttons}>
          <Text>Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default LoginSignUpContainer;
import { 
  Dimensions,
  Text, 
  StyleSheet, 
  SafeAreaView, 
  View, 
  TouchableOpacity,
  Animated
} from "react-native";
import React, { useState, useEffect, useRef } from 'react'
import SignUpScreen from "../pages/SignUpScreen";

const LoginSignUp = () => {
  const [active, setActive] = useState(true);
  const [width, setWidth] = useState(0);

  let transformX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (active) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start()
    } else {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start()
    }
  }, [active]);

  const onLayout = (event) => {
    setWidth(event.nativeEvent.layout.width);
  }

  const styleBarTranslation = {
    width: width / 2 - 2 - 5*2,
    transform: [
    {
      translateX: transformX.interpolate({
        inputRange: [0, 1],
        outputRange: [width / 3.93, -267]
      })
    }
  ]}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer} onLayout={onLayout}>
        <Animated.View style={[styles.bar, styleBarTranslation]}>
        </Animated.View>
        <TouchableOpacity hitSlop={{top: 10, right: -5, bottom: 10 }} style={styles.buttons} onPress={() => setActive(true)}>
          <Text style={[active ? styles.activeTextColor : styles.inactiveTextColor, styles.buttonText]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity hitSlop={{top: 10, left: -5, bottom: 10 }} style={styles.buttons} onPress={() => setActive(false)}>
          <Text style={[active ? styles.inactiveTextColor : styles.activeTextColor, styles.buttonText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {active ? (
        <LoginScreen />
      ): (
        <SignUpScreen />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bar: {
    position: 'absolute',
    height: 41 - 2 * 2,
    top: 1,
    bottom: 2,
    borderRadius: 100,
    backgroundColor: '#3f6186',
  },
  container: {
    zIndex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    left: 0,
    right: 0,
    marginLeft: 0,
    marginRight: 0,
    maxWidth: Dimensions.get('window').width,
    height: "60%",
    borderRadius: 50
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: Dimensions.get('window').width * 0.8,
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 100,
    borderColor: "#9e9e9e",
    borderWidth: 0.1,
    padding: 10,
    top: 15
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    width: Dimensions.get('window').width / 2,
    textAlign: "center",
    fontWeight: "bold"
  },
  inactiveTextColor: {
    color: "#3f6186",
  },
  activeTextColor: {
    color: "#fff",
  }
})

export default LoginSignUp;
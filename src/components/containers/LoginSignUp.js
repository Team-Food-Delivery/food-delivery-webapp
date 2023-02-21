import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  View, 
  TouchableOpacity,
  Animated
} from "react-native";
import React, { useState, useEffect, useRef } from 'react'
import SignUpScreen from "../pages/SignUpScreen";
import HomeScreen from '../pages/HomeScreen';

const LoginSignUp = () => {
  const [active, setActive] = useState(false);
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

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [width / 2, -74]
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer} onLayout={onLayout}>
        <Animated.View style={{
          position: 'absolute',
          height: 41 - 2 * 2,
          top: 1,
          bottom: 2,
          borderRadius: "100px",
          width: width / 2 - 2 - 5*2,
          transform: [
            {
              translateX: rotationX
            }
          ],
          backgroundColor: '#3f6186',
        }}>
        </Animated.View>
        <TouchableOpacity style={styles.buttons} onPress={() => setActive(true)}>
          <Text style={[active ? styles.activeTextColor : styles.inactiveTextColor, styles.buttonText]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={() => setActive(false)}>
          <Text style={[active ? styles.inactiveTextColor : styles.activeTextColor, styles.buttonText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <SignUpScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "80vw",
    height: "60%",
    borderRadius: "50px"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    // position: "relative",
    backgroundColor: "#fff",
    borderRadius: "100px",
    borderColor: "#9e9e9e",
    borderWidth: 0.1,
    padding: "10px",
    top: "-10%"
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    width: "50%",
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
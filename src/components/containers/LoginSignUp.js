import { 
  useWindowDimensions,
  Text, 
  StyleSheet, 
  SafeAreaView, 
  View, 
  TouchableOpacity,
  Animated
} from "react-native";
import React, { useState, useEffect, useRef, useContext } from 'react'
import { AuthContext } from "../../contexts/AuthContext";
import SignUpScreen from "../pages/SignUpScreen";
import LoginScreen from "../pages/LoginScreen";

const LoginSignUp = ({ verified, navigation }) => {
  const [active, setActive] = useState(false);
  const [width, setWidth] = useState(0);
  const { isNotVerified } = useContext(AuthContext);

  let transformX = useRef(new Animated.Value(0)).current;
  const { width: windowWidth } = useWindowDimensions();

  useEffect(() => {
    if (active || verified) {
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
  }, [active, verified]);

  const onLayout = (event) => {
    setWidth(event.nativeEvent.layout.width);
  }

  const toggleScreen = () => {
    if(verified === true) {
      setActive(false);
      isNotVerified();
    } else {
      setActive(false);
    }
  }

  const styleBarTranslation = {
    width: width / 2 - 2 - 5*2,
    transform: [
    {
      translateX: transformX.interpolate({
        inputRange: [0, 1],
        outputRange: [width / 3.78, -1*(width / 3.78)]
      })
    }
  ]}

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
      maxWidth: windowWidth,
      height: "55%",
      borderRadius: 50
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "center",
      width: "80%",
      position: "absolute",
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
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer} onLayout={onLayout}>
        <Animated.View style={[styles.bar, styleBarTranslation]} />
        <TouchableOpacity hitSlop={{top: 10, right: -5, bottom: 10 }} style={styles.buttons} onPress={() => setActive(true)}>
          <Text style={[(active || verified) === true ? styles.activeTextColor : styles.inactiveTextColor, styles.buttonText]}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity hitSlop={{top: 10, left: -5, bottom: 10 }} style={styles.buttons} onPress={() => toggleScreen()}>
          <Text style={[(active || verified) === true ? styles.inactiveTextColor : styles.activeTextColor, styles.buttonText]}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      {(active || verified) === true ? (
        <LoginScreen />
      ): (
        <SignUpScreen navigation={navigation}/>
      )}
    </SafeAreaView>
  )
}

export default LoginSignUp;
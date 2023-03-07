import React from "react";
import ImageBG from '../../img/HomeBackGround.jpg'
import LoginSignUp from "../containers/LoginSignUp";;
import { Text, StyleSheet, View, Box, ImageBackground } from "react-native";

const styles = StyleSheet.create({
  backgroundimage:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    fontSize: 100,
    fontFamily: 'Arial',
    color: '#ffffff',
    opacity: 50,
  } 
});

const HomeScreen = ({ route }) => {
  const { isSuccess } = route.params;

  return (
  <View style={styles.backgroundimage}>
    <ImageBackground 
      source={ImageBG} resizeMode="contain" style={styles.backgroundimage}>
      <Text style={styles.title}>
        FOOD DELIVERY
      </Text>
    </ImageBackground>
    <LoginSignUp isSuccess={isSuccess} />
  </View>
  );
};

export default HomeScreen;

